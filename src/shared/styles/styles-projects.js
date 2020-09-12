import styled from "styled-components";
import { media } from "../../utils/responsive-utils";
import { ListItem, UnderlinedLink } from "./styled-components";

export const Wrapper = styled(ListItem)`
  margin: 2.718rem 0;
`;

export const Link = styled(UnderlinedLink)`
  margin-bottom: .472rm;
  padding-bottom: .368rem;
  display: inline-block;
`;

export const Points = styled.div`
  margin-bottom: 2.718rem;
  line-height: 3.490rem;
`;

export const Title = styled.div`
  font-size: 2.718rem;
  font-weight: 300;
  position: relative;

  &:before {
    content: "";
    width: 2.718rem;
    height: 2.718rem;
    border-radius: 100%;
    color: white;
    background-color: #66dbff;
    position: absolute;
    left: -90px;
    top: 0px;
    border: 5px solid #CB4B16;

    ${media.phoneM`
        left: -4.482rem;
      `};
  }

  ${media.phoneM`
       font-size: 1.649rem;
    `};
`;

export const Point = styled.p`
  position: relative;
  padding: 0;
  margin: .368rem 0;
  line-height: 1.649rem;
  margin-bottom: 1rem;

  &:before {
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 100%;
    color: white;
    background-color: white;
    position: absolute;
    left: -85px;
    top: 4px;
    border: 4px solid #CB4B16;
    ${media.phoneM`
        left: -40px;
    `};
  }
`;

export const GithubUnderlinedLink = styled.a`
  color: white;
  text-decoration: none;
  ${props =>
    props.href &&
    `
      border-bottom: 0px rgba(255, 255, 255, 0.7);
    `} padding-bottom: 1px;
  &:hover {
    color: #bd93d8;
  }
`;
