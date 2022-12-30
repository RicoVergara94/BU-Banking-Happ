import { useState, useEffect } from "react";
import BalanceView from "./views/BalanceView";
import CheckingsView from "./views/CheckingsView";

export default function Viewer(props) {
  const componentArray = [<BalanceView />, <CheckingsView />];
  const { indexOfComponentClicked } = props;

  const [currentComponent, setCurrentComponent] = useState(<BalanceView />);
  // const handleClic
  useEffect(() => {
    setCurrentComponent(componentArray[indexOfComponentClicked]);
  }, [indexOfComponentClicked]);
  return <div>{currentComponent}</div>;
}
