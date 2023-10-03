import React from 'react';

import card_css from "./CarCard.module.scss"

import Carousel from 'react-bootstrap/Carousel';

export default function CarCard(props) {
  return (
    <>
        <div className={card_css.card_background}>

            <div className={card_css.carousel}>  
                <Carousel data-bs-theme="dark" >
                    <Carousel.Item>
                        <img
                        className="d-block w-100 rounded-3"
                        src={props.carImg1}
                        alt="First slide"
                        />
                      
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 rounded-3"
                        src={props.carImg1}
                        alt="Second slide"
                        />
                      
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 rounded-3"
                        src={props.carImg1}
                        alt="Third slide"
                        />
                      
                    </Carousel.Item>
                </Carousel>
            
            </div>

            <div className="d-flex justify-content-between align-items-center mb-2">
                <div>   <h1 className="fs-5 p-3"> {props.carName} </h1>    </div>
                <div> <button className={card_css.dotted_button}> {props.manufacturingYear} </button> </div>

            </div>

            <div className='row justify-content-center'>
                <div className='d-flex col-md'> 
                    <img  src="./people.JPG" alt="people" className={card_css.small_img}/>
                    <h6 className='fs-5 text-muted'> {props.seatingCapasity} People </h6>
                </div>

                <div className='d-flex col-md'> 
                    <img src="./fuel.JPG" alt="fuel type" className={card_css.small_img} />
                    <h6 className='fs-5 text-muted'> {props.fuelType}</h6>
                </div>

            </div>

            <div className='row justify-content-center mt-3'>

                <div className='d-flex col-md'> 
                    <img src="./milage.JPG" alt="milage" className={card_css.small_img} />
                    <h6 className='fs-5 text-muted'> {props.milage} km/1-litre </h6>
                </div>

                <div className='d-flex col-md'> 
                    <img src="./transmission.JPG" alt="transmission" className={card_css.small_img} />
                    <h6 className='fs-5 text-muted'> {props.transmission} </h6>
                </div>
            </div>

            <div className='d-flex align-items-center justify-content-between border-top border-muted pt-2 mt-2'>
                <div>
                    <h6 className='fs-5 '> $ {props.price} <small className='text-muted'> /month </small>  </h6>
                </div>
                <div>
                    <div>
                        <img src="./like.JPG" alt="like button" className={card_css.like_btn} />
                        <button className='btn btn-primary'> Rent Now</button>
                    </div>
                </div>
            </div>

        </div>

    </>
  )
}
