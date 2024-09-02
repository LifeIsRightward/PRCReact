import React, { useState, useEffect, useRef } from "react";

export default function Slide() {
    const trainCompartment = ['1 칸', '2 칸', '3 칸', '4 칸', '5 칸'];
    const extendedCompartment = [...trainCompartment, trainCompartment[0]];

    const [curSlide, setCurSlide] = useState(0); // 현재 슬라이드 인덱스
    const [isAnimating, setIsAnimating] = useState(true); // 애니메이션 상태
    const [slideWidth, setSlideWidth] = useState(0); // 슬라이드 너비
    const slideContainerRef = useRef(null); // 슬라이드 컨테이너 참조

    const LAST_REAL_SLIDE_INDEX = trainCompartment.length - 1;
    const LAST_SLIDE_INDEX = extendedCompartment.length - 1;

    // 슬라이드 너비를 계산하는 함수
    const updateSlideWidth = () => {
        if (slideContainerRef.current) {
            setSlideWidth(slideContainerRef.current.clientWidth);
        }
    };

    // 윈도우 크기 변화에 대응하여 슬라이드 너비 업데이트
    useEffect(() => {
        updateSlideWidth(); // 초기 슬라이드 너비 설정
        window.addEventListener("resize", updateSlideWidth); // 리사이즈 이벤트에 대응

        return () => {
            window.removeEventListener("resize", updateSlideWidth);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurSlide((prevState) => prevState + 1);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (curSlide === LAST_SLIDE_INDEX) {
            // 마지막 슬라이드에 도달했을 때
            setTimeout(() => {
                setIsAnimating(false);
                setCurSlide(0);
            }, 400); // 애니메이션 시간이 끝난 후
        } else if (curSlide === 0) {
            setTimeout(() => setIsAnimating(true), 50); // 애니메이션 다시 활성화
        }
    }, [curSlide]);

    const handlePaginationClick = (index) => {
        setIsAnimating(true);
        setCurSlide(index);
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
                            width: `${slideWidth}px`, // 각 슬라이드의 너비를 설정
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <ol className='slide-index'>
                {trainCompartment.map((_, index) => (
                    <li
                        key={index}
                        className={`index-item ${curSlide === index || (curSlide === LAST_SLIDE_INDEX && index === 0) ? 'active' : ''}`}
                        onClick={() => handlePaginationClick(index)}
                    >
                        {index + 1}
                    </li>
                ))}
            </ol>
        </div>
    );
}
