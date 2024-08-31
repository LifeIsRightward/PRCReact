import React from "react"
import { useState } from "react";
import { useEffect } from "react";

export default function Slide() {
    const trainCompartment = ['1 칸', '2 칸', '3 칸', '4 칸', '5 칸'];

    const [curSlide, setCurSlide] = useState(0); // 이미지 슬라이드에서 표출되는 이미지 번호

    const FIRST_SLIDE_INDEX = 0; // 이미지 슬라이드의 시작 번호
    const LAST_SLIDE_INDEX = trainCompartment.length - 1; // 이미지 슬라이드의 끝 번호
    const MOVE_SLIDE_INDEX = 1; // 이미지 슬라이드 이동 값

    const [intervalId, setIntervalId] = useState(null);

    const autoMoveSlide = () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
        }

        setIntervalId(
            setInterval(() => {
                setCurSlide((prevState) =>
                    prevState < LAST_SLIDE_INDEX
                        ? prevState + MOVE_SLIDE_INDEX
                        : FIRST_SLIDE_INDEX
                );
            }, 4000)
        );
    };

    useEffect(() => {
        autoMoveSlide();

        return () => clearInterval(intervalId);
    }, []);


    const handlePaginationClick = (index) => {
        setCurSlide(index);
        autoMoveSlide(); // curSlide가 변경된 후 setInterval 대기 시간 초기화
    };

    return (
        <div className='train'>

            <div className='show'>
                {
                    trainCompartment.map((item, index) => (
                        <div
                            className='compartment'
                            key={index}
                            style={{
                                transform: `translateX(${-1100 * curSlide}px)`,
                                transition: 'all 0.4s ease-in-out',
                            }}
                        >
                            {item}
                        </div>
                    ))
                }
            </div>
            <ol className='slide-index'>
                {
                    trainCompartment.map((_, index) => (
                        <li
                            key={index}
                            className={`index-item ${curSlide === index ? 'active' : ''}`}
                            onClick={() => handlePaginationClick(index)}
                        >
                            {index + 1}
                        </li>
                    ))
                }
            </ol>

        </div>
    );
}