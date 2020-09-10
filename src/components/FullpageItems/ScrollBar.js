import React, { Fragment } from 'react';

const ScrollBar = ({ slide, setSlide, length }) => {
  const slides = new Array(length).fill(null)
  return (
    <Fragment>
      <div className="scroll-bar">
        <ul>
        {slides.map((item, index) => (
          <li
            key={`scrollbar-${index}`}
            className={(index === slide ? 'active' : '')}
            onClick={() => setSlide(index)}
          >
            <a href="#"/>
          </li>
        ))}
        </ul>
      </div>
      <style jsx>{`
        .scroll-bar {
          position: fixed;
          bottom: 50%;
          right: .368rem;
          z-index: 101;
        }
        li.active {
          transform: scale(1.649);
          margin-bottom: 0.607rem;
          margin-top: 0.607rem;
        }
        li {
          height: 1rem;
          width: 1rem;
          background-color: rgba(255,255,255,.778);
          list-style: none;
          border-radius: 50%;
          position: relative;
          right: 0.368rem;
          margin-bottom: .368rem;
          backdrop-filter: saturate(180%) blur(1rem);
          box-shadow: rgba(0, 0, 0, 0.2) 0px 0.135rem 1rem -3px;
        }

      `}</style>
    </Fragment>
  );
}

export default ScrollBar;
