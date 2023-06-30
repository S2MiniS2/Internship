import React, { useState, useEffect } from "react";

const Slide = ({ text }) => {
    return <div>{text}</div>;
};



    const AutoSlide = () => {
        const [slideIndex, setSlideIndex] = useState(0);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % slideTexts.length);
        }, 3000);
    
        return () => clearInterval(intervalId);
    }, []);
    
        const slideTexts = [
            <div>
            <h1>리뷰1</h1>
            <br />
            <p>이름</p>
        </div>,
        <div>
        <h1>리뷰2</h1>
        <br />
        <p>이름</p>
        </div>, 
        <div>
            <h1>리뷰3</h1>
            <br />
            <p>이름</p>
        </div>
        ];
    
    const handleSlideClick = (index) => {
        setSlideIndex(index);
    };
    
    return (
        <div>
        <Slide text={slideTexts[slideIndex]} />
        <div style={{ display: "flex", justifyContent: "center" }}>
            {slideTexts.map((text, index) => (
            <button
                key={index}
                style={{
                margin: "50px",
                borderRadius: "50%",
                width: "10px",
                height: "10px",
                backgroundColor: slideIndex === index ? "white" : "gray",
                border: "none",
                outline: "none",
                cursor: "pointer"
                }}
                onClick={() => handleSlideClick(index)}
            ></button>
            ))}
        </div>
        </div>
        
    );
};






export default AutoSlide;