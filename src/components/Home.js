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
            <div className="homeName">
              Income Expense Tracker
              <HomeTitleText>
                In one click
              </HomeTitleText>
            </div>
            <div>
              <img
                className="homeImage"
                src="https://i.pinimg.com/564x/76/fc/63/76fc635faaaed966bc31b14fb313e9c9.jpg"
              />
            </div>
          </HomeTopic>
        </HomeContentText>
      </HomeContainer>
      <div className="homepage"
        style={{
         
        }}
      >
        Deborah@media2023
      </div>
    </div>
  );
};

export default Home;
