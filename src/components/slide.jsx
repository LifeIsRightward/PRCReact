import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import Slide1 from '../img/Slide1.JPG';
import Slide2 from '../img/Slide2.JPG';
import Slide3 from '../img/Slide3.JPG';
import Slide4 from '../img/Slide4.JPG';
import Slide5 from '../img/Slide5.JPG';

export default function Slide() {
    const trainCompartment = [Slide1, Slide2, Slide3, Slide4, Slide5];
    const extendedCompartment = [...trainCompartment, trainCompartment[0]];

    const [curSlide, setCurSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const [slideWidth, setSlideWidth] = useState(0);
    const slideContainerRef = useRef(null);

    const LAST_REAL_SLIDE_INDEX = trainCompartment.length - 1;
    const LAST_SLIDE_INDEX = extendedCompartment.length - 1;

    const updateSlideWidth = () => {
        if (slideContainerRef.current) {
            setSlideWidth(slideContainerRef.current.clientWidth);
        }
    };

    useEffect(() => {
        updateSlideWidth();
        window.addEventListener("resize", updateSlideWidth);

        return () => {
            window.removeEventListener("resize", updateSlideWidth);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurSlide((prevSlide) => prevSlide + 1);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (curSlide === LAST_SLIDE_INDEX) {
            setTimeout(() => {
                setIsAnimating(false);
                setCurSlide(0);
            }, 400);
        } else if (curSlide === 0) {
            setTimeout(() => setIsAnimating(true), 50);
        }
    }, [curSlide]);

    const handleNextSlide = () => {
        if (curSlide === LAST_REAL_SLIDE_INDEX) {
            setCurSlide(curSlide + 1);
            setTimeout(() => {
                setIsAnimating(false);
                setCurSlide(0);
            }, 400);
            setTimeout(() => setIsAnimating(true), 500);
        } else {
            setCurSlide(curSlide + 1);
        }
    };

    const handlePrevSlide = () => {
        if (curSlide === 0) {
            setCurSlide(LAST_SLIDE_INDEX - 1);
            setTimeout(() => {
                setIsAnimating(false);
                setCurSlide(LAST_REAL_SLIDE_INDEX);
            }, 400);
            setTimeout(() => setIsAnimating(true), 500);
        } else {
            setCurSlide(curSlide - 1);
        }
    };

    return (
        <div className='train'>
            <div className='show' ref={slideContainerRef}>
                {extendedCompartment.map((item, index) => (
                    <div
                        className='compartment'
                        key={index}
                        style={{
                            transform: `translateX(${-slideWidth * curSlide}px)`,
                            transition: isAnimating ? 'all 0.4s ease-in-out' : 'none',
                            width: `${slideWidth}px`,
                        }}
                    >
                        <img src={item} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '100%' }} />
                    </div>
                ))}
            </div>
            <button className="prev-slide" onClick={handlePrevSlide}>
                <IoIosArrowBack size={50} />
            </button>
            <button className="next-slide" onClick={handleNextSlide}>
                <IoIosArrowForward size={50} />
            </button>
        </div>
    );
}
