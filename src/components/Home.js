import React from "react";
import { Link } from 'react-router-dom';

import {
  HomePage,
  HomeContainer,
  HomeContentText,
  HomeTitleText,
  HomeFooter,
  HomeLink,
  HomeTopic,
} from "./Home.styles";

const Home = () => {
  return (
    <HomePage>
      <HomeContainer>
        <HomeContentText>
          <HomeTopic>
            <div className="homeName">
              Income Expense Tracker
              <HomeTitleText>
                Manage your expenses
              </HomeTitleText>
              <HomeTitleText><HomeLink to="/expense-app">Get Started</HomeLink></HomeTitleText>
            </div>
            <div>
              <img
                className="homeImage"
                alt="home"
                src="https://i.pinimg.com/564x/76/fc/63/76fc635faaaed966bc31b14fb313e9c9.jpg"
              />
            </div>
          </HomeTopic>
        </HomeContentText>
      </HomeContainer>
      <HomeFooter>
        Deborah@media2023
      </HomeFooter>
    </HomePage>
  );
};

export default Home;
