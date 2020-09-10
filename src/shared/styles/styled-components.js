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
  min-width: 300px;
  min-height: calc(100vh - ${sizes.header.height}px);
`;

const RightSide = styled.div`
  padding-bottom: 50px;
`;

export const RightSideHome = styled(RightSide)`
  color: #000;
  border-left: 5px solid rgba(0, 0, 0, 0.5);
  padding-left: 70px;
  margin-left: 20px;
  position: relative;

  ${media.phoneM`
      padding-left: 30px;
    `};
`;

export const Section = styled.section`
  margin-bottom: 80px;
  overflow-wrap: anywhere;
`;

export const SectionTitle = styled.h3`
  font-size: 35px;
  font-weight: 100;
  margin: 0 0 10px 0;
  color: #000;
  font-weight: 300;
  padding-bottom: 5px;
  position: relative;
  &:before {
    content: "";
    width: 25px;
    height: 25px;
    border-radius: 100%;
    color: #000;
    background-color: #fff;
    position: absolute;
    left: -90px;
    top: 7px;
    border: 5px solid #CB4B16;

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
  font-size: 18px;
  list-style-type: none;
  margin: 10px 0;
  font-weight: 100;
  line-height: 30px;
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
  padding: 10px 15px;
  font-size: 15px;
  border: 1px solid rgba(0, 0, 0, 0.69);
  margin-top: 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
