import {useState} from "react"

const ImageSlider = ({slides})=>{
    const [currentIndex,setCurrentIndex]=useState(0);

    const sliderStyles={
        height:'100%',
        position:'relative',
    }
    const slideStyles={
        width:'100%',
        height:'100%',
        borderRadius:'0px',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundImage:`url(${slides[currentIndex].url})`,
        zIndex:0,
    }
    
    const leftArrowStyles={
        position:'absolute',
        top:'50%',
        transform:'translate(0,-50%)',
        left: '30px',
        fontSize:'45px',
        zIndex:1,
        cursor:'pointer',
        background:'transparent',
        color:'#b0b0b0'
    }

    const rightArrowStyles={
        position:'absolute',
        top:'50%',
        transform:'translate(0,-50%)',
        right: '30px',
        fontSize:'45px',
        zIndex:1,
        cursor:'pointer',
        background:'transparent',
        color:'#b0b0b0'
    }
    
    const goToPrevious=()=>{
        const isFirstSlide=currentIndex===0
        const newIndex=isFirstSlide?slides.length-1:currentIndex-1
        setCurrentIndex(newIndex)
    }

    const goToNext=()=>{
        const isLastSlide=currentIndex===slides.length-1
        const newIndex=isLastSlide?0:currentIndex+1
        setCurrentIndex(newIndex)
    }

    return (
        <div style={(sliderStyles)}>
            <div style={leftArrowStyles} onClick={goToPrevious}>❰</div>
            <div style={slideStyles}></div>
            <div style={rightArrowStyles} onClick={goToNext}>❱</div>
        </div>
    )
}

export default ImageSlider