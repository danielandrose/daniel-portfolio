import React, { useState, useEffect } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import "../cssFiles/ImageSlider.css"

export default function ImageSlider({ slides }) {
    const [currentSlide, setCurrentSlide] = useState(0)

    function handlePrevious() {
        setCurrentSlide(currentSlide == 0 ? slides.length : currentSlide - 1)
    }

    function handleNext() {
        setCurrentSlide(currentSlide == slides.length - 1 ? 0 : currentSlide + 1);
    }

    return <div className="container">
        <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
        {
            slides.map((imageItem, ind) => (
                <img
                    key={imageItem.id}
                    src={imageItem.url}
                    alt={imageItem.alt}
                    className={currentSlide === ind ? "current-image" : "current-image hide-current-image"}
                />
            ))
        }
        <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
        <span className="circle-indicators">
            {
                slides.map((_, ind) =>
                    <button
                        key={ind}
                        className={currentSlide === ind ? "current-indicator" : "current-indicator inactive-indicator"}
                        onClick={() => setCurrentSlide(ind)}
                    ></button>
                )
            }
        </span>
    </div>
}