import icon from "../../images/Balance.png";

export default function BalanceIcon(props) {
  const { setComponentClickedToZero } = props;
  const handleClick = () => {
    setComponentClickedToZero(0);
  };

  return <img src={icon} onClick={handleClick} />;
}
