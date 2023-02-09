import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  background-color: #ffe6fc;
  color: #850b70;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  .homepage {
    background-color: #840c70;
    color: #ffe6fc;
    text-align: center;
  }
  @media only screen and (max-width: 1600px) {
    height: 90vh;
  }
`;

export const HomeContent = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fffefe;
  @media only screen and (max-width: 375px) {
    text-align: start;
    height: 80%;
  }
`;

export const HomeContentText = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  .homeImage {
    width: 50%;
    height: 90%;
    transform: rotate(-29deg);
    margin-top: 20;
  }
  @media only screen and (max-width: 912px) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 820px) {
    position: absolute;
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 412px) {
    position: absolute;
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 390px) {
    position: absolute;
    display: flex;
    justify-content: center;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 0.5rem;
  line-height: 1;
`;

export const HomeTitleText = styled.span`
  display: block;
  margin: 0;
  font-size: clamp(1rem, 10vw, 3rem);
  font-size: 20px;
  justify-content: center;
`;

export const HomeTopic = styled.span`
  margin: 0;
  display: flex;
  flex-direction: row;
  .homeName {
    margin-top: 80px;
    font-size: 40px;
  }
`;

export const HomeSubTitle = styled.h2`
  font-size: clamp(2rem, 3vw, 4rem);
  box-sizing: border-box;
  text-align: center;
  margin: 0;
  font-weight: 300;
  padding-top: 1rem;
  @media only screen and (max-width: 375px) {
    text-align: center;
    padding: 0.5rem;
    box-sizing: border-box;
  }
`;

export const HomeText = styled.h3`
  font-size: clamp(1.5rem, 2vw, 2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  padding: 1rem 1rem;
  @media only screen and (max-width: 375px) {
    padding: 1.5rem 0;
  }
`;

export const HomeBtn = styled(Link)`
  text-decoration: none;
  outline: none;
  border: none;
`;

export const HomeFooter = styled.div`
  background-color: #840c6e;
  color: #fff;
  align-items: center;
  text-align: center;
  padding: 0.5em;
`;
