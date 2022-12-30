import { useState } from "react";
import BalanceView from "./BalanceView";

export default function Viewer() {
  const [currentComponent, setCurrentComponent] = useState(<BalanceView />);
  // const handleClic
  return <div>{currentComponent}</div>;
}
