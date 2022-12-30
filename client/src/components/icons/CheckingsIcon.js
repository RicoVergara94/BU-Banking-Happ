import icon from "../../images/Checkings.png";

export default function CheckingsIcon(props) {
  const { setComponentClickedToOne } = props;
  const handleClick = () => {
    setComponentClickedToOne(1);
  };
  return <img src={icon} onClick={handleClick} />;
}
