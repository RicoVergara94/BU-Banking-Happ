import { useState, useEffect } from "react";
import BalanceIcon from "./icons/BalanceIcon";
import Viewer from "./Viewer";
import ExpensesIcon from "./icons/ExpensesIcon";
import CheckingsIcon from "./icons/CheckingsIcon";
import SavingsIcon from "./icons/SavingsIcon";

import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";

export default function Dashboard() {
  const [componentClicked, setComponentClicked] = useState(0);
  useEffect(() => {
    console.log(componentClicked);
  }, [componentClicked]);
  // const handleClick = {target} => {

  // }
  return (
    <>
      <h1 id="dashboard-header"> Dashboard </h1>
      <div id="dashboard-container">
        <div class="dashboard">
          Dashboard
          <div class="left-column">
            <div class="icon">
              <BalanceIcon setComponentClickedToZero={setComponentClicked} />
              <div class="icon-text">Balance</div>
            </div>
            <div class="icon">
              <CheckingsIcon setComponentClickedToOne={setComponentClicked} />
              <div class="icon-text">Checkings</div>
            </div>
            <div class="icon">
              <SavingsIcon setComponentClickedToTwo={setComponentClicked} />
              <div class="icon-text">Savings</div>
            </div>
            <div class="icon">
              <ExpensesIcon setComponentClickedToThree={setComponentClicked} />
              <div class="icon-text">Expenses</div>
            </div>
          </div>
          <div class="right-column">
            <Viewer indexOfComponentClicked={componentClicked} />
          </div>
        </div>
      </div>
    </>
  );
}
