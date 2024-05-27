import { bestEmployee } from "../../data";
import classes from "./EmployeeCard.module.css";
import cardImage from "../../assets/cardImage.webp";

//Card component that displays the employee of the month

function EmployeeCard() {
  return (
    <div className={classes.card}>
      <div className={classes.empContent}>
        <img src={bestEmployee.avatar} alt="remote" />
        <p className={classes.title}>Employee of the Month</p>
        <p className={classes.name}>{bestEmployee.name}</p>
        <p className={classes.designation}>{bestEmployee.designation}</p>
      </div>
      <div className={classes.cardImage}>
        <img src={cardImage} alt="remote" />
      </div>
    </div>
  );
}

export default EmployeeCard;
