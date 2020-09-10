import React from "react";
import Link from "gatsby-link";
import { graphql } from "gatsby"

import {
  Sides,
  LeftSide,
  RightSideHome
} from "../shared/styles/styled-components";

import Info from "../components/Info";
import TimelineItem from "../components/TimelineItem";
import FullpageItems from "../components/FullpageItems";
import Layout from "../layouts";

const IndexPage = ({ data }) => {
  const {
    page,
    allImages,
  } = data;
  const pageWithImageSharp = page.frontmatter.items.map( item => ({
    title: item.title,
    backgroundImage: allImages.edges.find( image => image.node.parent.relativePath === item.backgroundImage ).node,
    info: item.info,
    features: item.features,
  }))
  return (
    <Layout back>
      <div>
        <FullpageItems items={pageWithImageSharp} />
      </div>
    </Layout>
  )
}


export default IndexPage;

export const whyQuery = graphql`
  query {
    page: markdownRemark(fileAbsolutePath: {regex: "/(fullpage)/.*\\\\.md$/"}) {
      id
      frontmatter {
        items {
          title
          info
          features
          backgroundImage
        }
      }
    }
    allImages: allImageSharp {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
          parent {
            ... on File {
              relativePath
            }
          }
        }
      }
    }
  }
`
