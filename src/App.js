import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import IncomeApp from "./components/IncomeApp";
import ExpenseApp from "./components/ExpenseApp";
import Budget from "./components/main/budget"

function App() {
  return (
      <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/income-app" element={<IncomeApp />}></Route>
            <Route path="/expense-app" element={<ExpenseApp />}></Route>
            <Route path="/budget" element={<Budget />}></Route>
          </Routes>
      </div>
  );
  };

export default App;