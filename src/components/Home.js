import React from "react";

import {
  HomeContainer,
  HomeContentText,
  HomeTitleText,
  HomeText,
  HomeBtn,
} from "./Home.styles";

const Home = () => {
  return (
    <div>
      <HomeContainer>
        <HomeContentText>
          <HomeTitleText>Income-Expense Tracker</HomeTitleText>
          <HomeTitleText style={{ fontSize: "20px", justifyContent: "center" }}>
            In one click
          </HomeTitleText>
          <HomeText>
            <HomeBtn to="/repo">
              <button primary big bigFont bigRadius>
              </button>
            </HomeBtn>
          </HomeText>
        </HomeContentText>
      </HomeContainer>
    </div>
  );
};

export default Home;