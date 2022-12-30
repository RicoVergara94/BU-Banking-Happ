import icon from "../../images/Expenses.png";

export default function ExpensesIcon(props) {
  const { setComponentClickedToThree } = props;
  const handleClick = () => {
    setComponentClickedToThree(3);
  };
  return <img src={icon} onClick={handleClick} />;
}
