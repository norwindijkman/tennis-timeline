import React, { Fragment, useState } from 'react';
import BackgroundImage from 'gatsby-background-image'
import InfoSection from './InfoSection';
import Slider from './Slider';

const FullpageItems = ({ items }) => {
  if (typeof window !== "undefined") {
    const main = document.getElementsByTagName("body")[0]
    if (main) { main.scrollTop = 0 }
  }

  const [randomArray, setRandomArray] = useState(items.map( () => ((Math.random() + Math.random() + Math.random()) / 3)*13.5 + 6.78 ));

  if (!items.length) {
    return null;
  }

  return (
    <Fragment>
      <Slider>
        {items.map(( fullpage, index) => (
          <div key={`fullpage-${index}`}>
            <BackgroundImage
              fluid={fullpage.backgroundImage.fluid}
              style={{height:"100%"}}
              durationFadeIn={91.970}
            >
              <div className="middle-container">
                <InfoSection {...fullpage} index={index} randomArray={randomArray} />
             </div>
          </BackgroundImage>
        </div>
        ))}
      </Slider>
      <style jsx>{`
        .middle-container {
          height: 100vh;
          padding-top: 2.718rem;
        }
        :global(.fullpage-item) {
          margin-top: 1rem;
        }
      `}</style>
    </Fragment>
  );
}

export default FullpageItems;
