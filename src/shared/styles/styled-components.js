import styled from "styled-components";
import { media, mobileHome } from "../../utils/responsive-utils";
import flex from "./flex";

const sizes = {
  header: {
    height: 50
  }
};

export const Sides = styled.div`
  display: flex;
  flex-direction: row;

  ${media.tablet`
      flex-direction: column;
    `};
`;

export const LeftSide = styled.div`
  width: auto;
  min-height: calc(100vh - ${sizes.header.height}px);
`;

const RightSide = styled.div`
  padding-bottom: 2.718rem;
`;

export const RightSideHome = styled(RightSide)`
  color: #000;
  border-left: .368rem solid rgba(0, 0, 0, 0.5);
  padding-left: 2.718rem;
  margin-left: 1rem;
  position: relative;

  ${media.phoneM`
      padding-left: 30px;
    `};
`;

export const Section = styled.section`
  margin-bottom: 7.389rem;
  overflow-wrap: anywhere;
`;

export const SectionTitle = styled.h3`
  font-size: 2.718rem;
  font-weight: 100;
  margin: 0 0 10px 0;
  color: #000;
  font-weight: 300;
  padding-bottom: .368rem;
  position: relative;
  &:before {
    content: "";
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    color: #000;
    background-color: #fff;
    position: absolute;
    left: -3.718rem;
    top: .368rem;
    border: .368rem solid #CB4B16;

    ${media.phoneM`
        left: -45px;
      `};
  }
  &:first-of-type:before {
    top: -1px;
  }

  ${media.phoneM`
    font-size: 25px;
  `};
`;

export const ListItem = styled.li`
  font-size: 1rem;
  list-style-type: none;
  margin: .368rem 0;
  font-weight: 100;
  line-height: 2.718rem;
`;

export const UnorderedList = styled.ul`
  padding: 0;
`;

export const UnderlinedLink = styled.a`
  color: #000;
  text-decoration: none;
  ${props =>
    props.href &&
    `
      border-bottom: 1px dashed rgba(0, 0, 0, 0.7);
    `} padding-bottom: 1px;
  &:hover {
    color: #bd93d8;
  }
`;

export const ShowMoreButton = styled.button`
  background-color: rgba(0, 0, 0, 0.16);
  transition: all 200ms linear;
  border: 0;
  cursor: pointer;
  border-radius: 3px;
  color: #000;
  font-weight: 100;
  padding: .368rem .368rem;
  font-size: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.69);
  margin-top: .368rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
