import React from "react";

import {
  HomeContainer,
  HomeContentText,
  HomeTitleText,
  HomeText,
  HomeBtn,
  HomeTopic,
} from "./Home.styles";

const Home = () => {
  return (
    <div>
      <HomeContainer>
        <HomeContentText>
          <HomeTopic>
          <div style={{marginTop: "80px",fontSize:"40px" }}>Income Expense Tracker
          <HomeTitleText style={{ fontSize: "20px", justifyContent: "center" }}>
            In one click
          </HomeTitleText>
          </div>
          <div><img style={{width: "50%", height: "90%", transform: "rotate(-29deg)", marginTop: "20"}} src="https://i.pinimg.com/564x/76/fc/63/76fc635faaaed966bc31b14fb313e9c9.jpg"/></div>
          </HomeTopic>
        </HomeContentText>
      </HomeContainer>
      <div style={{backgroundColor: "#840C70", color: "#FFE6FC", textAlign: "center"}}>Deborah@media2023</div>
    </div>
  );
};

export default Home;