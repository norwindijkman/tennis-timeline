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
import Layout from "../layouts";

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
    <div>
      <Sides>
        <LeftSide>
          <Info />
        </LeftSide>
        <RightSideHome>
          {edges.length ? edges.map(edge => (
            <TimelineItem
              key={`node-${edge.node.id}`}
              date={edge.node.frontmatter.date}
              content={edge.node.html}
            />
          )):null}
        </RightSideHome>
      </Sides>
    </div>
    </Layout>
  )
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date}) {
      edges {
        node {
          id
          html
          frontmatter {
            date
          }
        }
      }
    }
  }
`
