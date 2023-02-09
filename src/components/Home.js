import React from "react";
import { Link } from 'react-router-dom';

import {
  HomeContainer,
  HomeContentText,
  HomeTitleText,
  HomeFooter,
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
                Manage your expenses
              </HomeTitleText>
              <div><Link to="/expense-app">Get Started</Link></div>
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
    </div>
  );
};

export default Home;
