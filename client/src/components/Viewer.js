import { useState, useEffect } from "react";
import BalanceView from "./views/BalanceView";
import CheckingsView from "./views/CheckingsView";
import SavingsView from "./views/SavingsView";
import ExpensesView from "./views/ExpensesView";

export default function Viewer(props) {
  const componentArray = [
    <BalanceView />,
    <CheckingsView />,
    <SavingsView />,
    <ExpensesView />,
  ];
  const { indexOfComponentClicked } = props;

  const [currentComponent, setCurrentComponent] = useState(<BalanceView />);
  useEffect(() => {
    setCurrentComponent(componentArray[indexOfComponentClicked]);
  }, [indexOfComponentClicked]);
  return <div id="viewContainer">{currentComponent}</div>;
}
