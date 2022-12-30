import icon from "../../images/Savings.png";

export default function SavingsIcon(props) {
  const { setComponentClickedToTwo } = props;
  const handleClick = () => {
    setComponentClickedToTwo(2);
  };
  return <img src={icon} onClick={handleClick} />;
}
