import { useEffect } from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import { useState } from 'react';



const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        const carouselInterval = setInterval(() => {
            
            const nextSlide = currentSlide === 4 ? 1 : currentSlide + 1;
            setCurrentSlide(nextSlide);
        }, 4000); 

        return () => {
            clearInterval(carouselInterval); 
        };
    }, [currentSlide]);

    const getSlideImage = (slideNumber) => {
        switch (slideNumber) {
            case 1:
                return img1;
            case 2:
                return img2;
            case 3:
                return img3;
            case 4:
                return img4;
            default:
                return img1; 
        }
    };

    return (
        <div className="carousel w-full h-[600px]">
            <div id={`slide${currentSlide}`} className="carousel-item relative w-full">
                <img src={getSlideImage(currentSlide)} className="w-full rounded-xl " />
                <div className="absolute flex items-center  left-0 top-0   bg-gradient-to-r from-[#151515] to-[rgba(21,21,21, 0)] h-full" >
                    <div className='text-white rounded-xl space-y-7 pl-12 w-1/2 '>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-primary mr-5'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id={`slide${currentSlide}`} className="carousel-item relative w-full">
                <img src={getSlideImage(currentSlide)} className="w-full rounded-xl " />
                <div className="absolute flex items-center  left-0 top-0   bg-gradient-to-r from-[#151515] to-[rgba(21,21,21, 0)] h-full" >
                    <div className='text-white rounded-xl space-y-7 pl-12 w-1/2 '>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-primary mr-5'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id={`slide${currentSlide}`} className="carousel-item relative w-full">
                <img src={getSlideImage(currentSlide)} className="w-full rounded-xl " />
                <div className="absolute rounded-xl flex items-center  left-0 top-0   bg-gradient-to-r from-[#151515] to-[rgba(21,21,21, 0)] h-full" >
                    <div className='text-white space-y-7 pl-12 w-1/2 '>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-primary mr-5'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id={`slide${currentSlide}`} className="carousel-item relative w-full">
                <img src={getSlideImage(currentSlide)} className="w-full rounded-xl " />
                <div className="absolute rounded-xl flex items-center  left-0 top-0   bg-gradient-to-r from-[#151515] to-[rgba(21,21,21, 0)] h-full" >
                    <div className='text-white space-y-7 pl-12 w-1/2 '>
                        <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-primary mr-5'>Discover More</button>
                            <button className='btn btn-outline btn-secondary'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;