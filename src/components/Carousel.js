
import { useEffect, useState } from 'react';
import '../Carousel.css'
export default function Carousel(props){

    const [isPrevHidden, setIsPrevHidden] = useState(true);
    const [isNextHidden, setIsNextHidden] = useState(false);

    let track, dotsNav;

    useEffect(() => {
        track = document.querySelector('.carousel__track');
        dotsNav = document.querySelector('.carousel__nav');
        const slides = Array.from(track.children);

        const slideWidth = slides[0].getBoundingClientRect().width;

        const setSlidePosition = (slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        };

        slides.forEach(setSlidePosition);
    });

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = `translateX(-${targetSlide.style.left})`;
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');
    };

    const hideShowArrows = (slides, targetIndex) => {
        if(targetIndex === 0){
            setIsPrevHidden(true);
            setIsNextHidden(false);
        }else if(targetIndex === slides.length - 1){
            setIsPrevHidden(false);
            setIsNextHidden(true);
        }else{
            setIsPrevHidden(false);
            setIsNextHidden(false);
        }
    }

    function nextSlide(e){
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot = dotsNav.querySelector('.current-slide');
        const targetDot = currentDot.nextElementSibling;

        const slides = Array.from(track.children);
        const nextIndex = slides.findIndex(slide => slide === nextSlide);

        moveToSlide(track, currentSlide, nextSlide);
        updateDots(currentDot, targetDot);
        hideShowArrows(slides, nextIndex);
    }

    function prevSlide(e){
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = dotsNav.querySelector('.current-slide');
        const targetDot = currentDot.previousElementSibling;

        const slides = Array.from(track.children);
        const prevIndex = slides.findIndex(slide => slide === prevSlide);

        moveToSlide(track, currentSlide, prevSlide);
        updateDots(currentDot, targetDot);
        hideShowArrows(slides, prevIndex);
    }

    function changeIndicator(e){
        const targetDot = e.target.closest('button');

        if(targetDot === null){
            return;
        }

        const currentSlide = track.querySelector('.current-slide');
        const currentDot = dotsNav.querySelector('.current-slide');

        const dots = Array.from(dotsNav.children);
        const targetIndex = dots.findIndex(dot => dot === targetDot);

        const slides = Array.from(track.children);
        const targetSlide = slides[targetIndex];

        moveToSlide(track, currentSlide, targetSlide);
        updateDots(currentDot, targetDot);
        hideShowArrows(slides, targetIndex);
    }

    return (
        <div className="carousel">
            <button onClick={prevSlide} className={`carousel__button carousel__button--left`} disabled={isPrevHidden}>
                <i className="fa-solid fa-arrow-left"></i>
            </button>

            <div className='carousel__track-container'>
                <ul className='carousel__track'>
                    <li className='carousel__slide current-slide'>
                        <img className='carousel__image' src={require('../images/portfolio-01.jpg')} alt=""/>
                    </li>
                    <li className='carousel__slide'>
                        <img className='carousel__image' src={require('../images/portfolio-02.jpg')} alt=""/>
                    </li>
                    <li className='carousel__slide'>
                        <img className='carousel__image' src={require('../images/portfolio-03.jpg')} alt=""/>
                    </li>
                </ul>
            </div>

            <button onClick={nextSlide} className={`carousel__button carousel__button--right`} disabled={isNextHidden}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>

            <div className='carousel__nav' onClick={changeIndicator}>
                <button className='carousel__indicator current-slide'></button>
                <button className='carousel__indicator'></button>
                <button className='carousel__indicator'></button>
            </div>
        </div>
    );
}