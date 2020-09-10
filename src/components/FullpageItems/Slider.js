import React, { Fragment, useState, useEffect, useRef } from 'react';
import ScrollBar from './ScrollBar'

const FullpageSlider = ({ children }) => {
  const [slide, setSlide] = useState(0);
  const [ scrolled, setScrolled ] = useState(0)
  const ref = useRef()
  const rem = (typeof window !== "undefined") && parseFloat(getComputedStyle(document.documentElement).fontSize)
  const moveTreshold = rem
  const moveAgainTreshold = rem*2.718
  const slides = children.length
  var touchStart
  var throttler = false
  useEffect(() => {
    const handleScroll = event => {
      const deltaY = event.deltaY
      if (deltaY > moveTreshold || deltaY === 3) {
        setSlide( (slide + 1) % slides)
      } else if (event.deltaY < -1 * moveTreshold || deltaY === -3) {
        const nextSlide = (slide -1 >= 0) ? slide-1 : slides - 1
        setSlide( parseInt(nextSlide))}
    }
    const handleTouchStart = event => {
      touchStart = event.touches[0].clientY
    }
    const handleTouchMove = event => {
      const moved = touchStart - event.touches[0].clientY
      if (moved > moveTreshold) {
        setSlide( (slide + 1) % slides)
      }
      if (moved < (-1 * moveTreshold)) {
        const nextSlide = (slide -1 >= 0) ? slide-1 : slides - 1
        setSlide( parseInt(nextSlide))
      }
    }
    setTimeout(function(){
      ref.current.addEventListener('wheel', handleScroll, {passive: true})
    }, 300);
    ref.current.addEventListener('touchstart', handleTouchStart, {passive: true})
    ref.current.addEventListener('touchmove', handleTouchMove, {passive: true})
    return () => {
      ref.current.removeEventListener('wheel', handleScroll)
      ref.current.removeEventListener('touchstart', handleTouchStart)
      ref.current.removeEventListener('touchmove', handleTouchMove)
    }
  }, [slide])
  return (
    <Fragment>
      <ScrollBar slide={slide} setSlide={setSlide} length={children.length}/>
      <div className="fullpage-slider" ref={ref}>
        {children.map((child, index) => (
          <div key={`slide-${index}`} className={`slide ${(slide === index) ? 'active' : 'inactive'}`}>{child}</div>
        ))}
      </div>
      <style jsx>{`
      .slide {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transition: opacity .4s;
        height: 100vh;
        z-index: 100;
      }
      .active {
        opacity: 1;
        pointer-events: auto;
      }
      .inactive {
        opacity: 0;
        pointer-events: none;
      }
      `}</style>
    </Fragment>
  );
}

export default FullpageSlider;
