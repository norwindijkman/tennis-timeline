import React from "react";
import { Link } from "gatsby";

const InfoSection = ({ title, info, features, className, button, index, randomArray }) => (
  <>
    <div className="middle-random">
      <div className="middle">
        <div className={`paper-transparent ${className}`}>
          <div>
            <h1 className="card-title">{title}</h1>
            <p>{info}</p>
            {button && (
              <button><Link to={button.to}>{button.title}</Link></button>
            )}
            { features && features.length ? (
              <>
                <h2 className="card-features">Onze beloften</h2>
                <p>
                  {features.map( ( feature, featureIndex ) => (
                    <span key={`feature-${featureIndex}`}>• {feature}<br /></span>
                  ))}
                </p>
              </>
            ):null}
          </div>
        </div>
      </div>
    </div>
    <style jsx>{` // Conditional Styling
      .middle-random {
        top: 1rem;
      }
      @media only screen and (min-height: 600px) and (min-width: 600px) {
        .middle-random {
          top: ${randomArray[index]}%;
          right: ${index % 2 ? '-' : '' }${randomArray[index]/2}%;
        }
      }
    `}</style>
    <style jsx>{`
      h1 {
        margin-top: 0;
      }
      .middle-random {
        position: relative;
      }
      .middle {
        height: 100vh;
      }
      button {
        margin-top: 1rem;
      }
      .paper-transparent {
        background-color: rgba(255,255,255,.864);
        z-index: 100;
        position: relative;
        padding: 1rem;
        border-radius: 1rem;
        backdrop-filter: saturate(180%) blur(1rem);
        box-shadow: 0 0.223rem 0.368rem rgba(0,0,0,.368);
        width: 78%;
        margin: 0 auto;
      }
      @media only screen and (min-width: 600px) {
        .paper-transparent {
          width: 47.237%;
          padding: 2.718rem;
        }
      }
    `}</style>
  </>
)

export default InfoSection
