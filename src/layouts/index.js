import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import seo from "../data/seo";
import Header from "../components/Header";
import Footer from "../components/Footer/";
import Image from "../assets/jj.jpg"
import "./index.css";

const TemplateWrapper = ({ children, footer, back }) => (
  <>
  <div>
    <Helmet>
      <title>{seo.TITLE}</title>
      <meta name="description" content={seo.DESCRIPTION} />

      {/* Google / Search Engine Meta Tags */}
      <meta itemprop="name" content={seo.AUTHOR} />
      <meta itemprop="description" content={seo.DESCRIPTION} />
      <meta itemprop="image" content={Image} />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content={seo.URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.TITLE} />
      <meta property="og:description" content={seo.DESCRIPTION} />
      <meta property="og:image" content={Image} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seo.URL} />
      <meta name="twitter:title" content={seo.AUTHOR} />
      <meta name="twitter:description" content={seo.DESCRIPTION} />
      <meta name="twitter:image" content={Image} />
    </Helmet>
    <Header back={back} />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0,
      }}
      className="content"
    >
      {children}
    </div>
    {footer ? <Footer /> : ''}
  </div>
  <style jsx>{`
    .content {
      animation-name: bodytextEntry;
      animation-duration: .184s;
    }

    @keyframes bodytextEntry {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `}</style>
  </>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
