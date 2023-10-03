import React, { useState, useEffect } from 'react';
import carData from "../dummydata/carData";
import car_css from "./CarPage.module.scss";
import CarCard from "../components/CarCard";
import { Container } from 'react-bootstrap';

export default function CarPage() {
    const [filteredData, setFilteredData] = useState(carData);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6); 
    const maxPaginationLinks = 10;

    useEffect(() => {
        setCurrentPage(1);
    }, [filteredData]);

    const totalPosts = filteredData.length;
    const totalPaginationLinks = Math.max(
        Math.ceil(totalPosts / postsPerPage),
        maxPaginationLinks
    );

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const searchHandler = (e) => {
        const searchQuery = e.target.value;
        setFilteredData(
            carData.filter((item) => item.carName.includes(searchQuery))
        );
    };

    return (
        <div className={car_css.page_background}>
            <Container>
            <div className={car_css.header_section}>

                <input type="text" placeholder='Search...'
                    onChange={searchHandler}
                />

                <img src="./search.JPG" alt="search cars" className={car_css.search} />

                <select name="cars" id="cars">
                    <option value="volvo">Relevance</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>

                <select name="cars" id="cars">
                    <option value="volvo">All Brands</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                </div>

                <div className={car_css.car_grid}>
                    {totalPosts === 0 ? (
                        <p>No cars found.</p>
                    ) : (
                        currentPosts.map((data) => (
                            <CarCard
                                key={data.id}
                                carImg1={data.carImg1}
                                carName={data.carName}
                                manufacturingYear={data.manufacturingYear}
                                seatingCapasity={data.seatingCapasity}
                                fuelType={data.fuelType}
                                milage={data.milage}
                                transmission={data.transmission}
                                price={data.price}
                            />
                        ))
                    )}
                </div>

                {totalPosts > 0 && (
                    <nav>
                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</button>
                            </li>
                            {[...Array(totalPaginationLinks)].map((_, i) => (
                                <li
                                    key={i}
                                    className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                                >
                                    <button className="page-link" onClick={() => paginate(i + 1)}>
                                        {i + 1}
                                    </button>
                                </li>
                            ))}
                            <li
                                className={`page-item ${currentPage === totalPaginationLinks ? 'disabled' : ''}`}
                            >
                                <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
                            </li>
                        </ul>
                    </nav>
                )}
            </Container>
        </div>
    );
}
