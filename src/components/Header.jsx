import { useState, useEffect, useCallback } from 'react';
import IMG1 from '../assets/img/react.jpg';
import IMG2 from '../assets/img/vanilla-css.jpg';
import ChatroomIMG from '../assets/img/chatroom-app.jpg';

const images = [
    'https://www.blender.org/wp-content/uploads/2019/07/blender_render-1280x720.jpg?x12104',
    IMG1,
    ChatroomIMG,
    IMG2
];

function Header(){
    const { index, direction, goToNext, goToPrev }  = useBackgroundSlider(images, 5000);

    return (
        <div className="banner sizing">
            <div className="slider-container">
                {images.map((img, i) => {
                    let positionClass = "idle-slide";
                    if (i === index) {
                        positionClass = "active-slide";
                    } else if (i === (index - 1 + images.length) % images.length) {
                        positionClass = direction === "right" ? "prev-slide" : "prev-slide no-transition";
                    } else if (i === (index + 1) % images.length) {
                        positionClass = direction === "left" ? "next-slide" : "next-slide no-transition";
                    }

                    return (
                        <div 
                            key={img}
                            className={`slide-image ${positionClass}`}
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    );
                })}
            </div>
            <div className="intro">
                <h3 className="name-intro">Hi there, I'm Dava</h3>
                <h1 className="font-bold">Front-End Web Developer Learner</h1>
                <p>I am currently learning to build high-performance front-end with a focus on aesthetic precision.For me, it’s not just about writing code; it’s about crafting seamless digital experiences that truly connect with people through thoughtful UI and intuitive UX.</p>
            </div>
            <div className="absolute inset-0 max-w-360 mx-auto! pointer-events-none">
                <div className='arrow left-0 rotate-180 pointer-events-auto' onClick={goToPrev}></div>
                <div className='arrow right-0 pointer-events-auto' onClick={goToNext}></div>
            </div>
            <div className="iconic">
                {images.map((_, i) => (
                    <div key={i} className={index === i ? 'active' : ''}></div>
                ))}
            </div>
        </div>
    );
}

function useBackgroundSlider(imageArray, delay = 5000) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState('right');

    const goToNext = useCallback(() => {
        setDirection('right');
        setIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, [imageArray.length]);

    const goToPrev = useCallback(() => {
        setDirection('left');
        setIndex((prevIndex) => (prevIndex - 1 + imageArray.length) % imageArray.length);
    }, [imageArray.length]);

    useEffect(() => {
        const timer = setInterval(goToNext, delay);

        return () => clearInterval(timer);
    }, [delay, goToNext]);

    return { index, direction, goToNext, goToPrev };
}

export default Header