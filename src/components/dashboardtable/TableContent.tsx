import { employeeDataType } from "../../types";
import classes from "./TableContent.module.css";
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import rank1 from "../../assets/rank1.png";
import rank2 from "../../assets/rank2.png";
import rank3 from "../../assets/rank3.png";


// uses map method to display employee details one by one

function TableContent({employeesData,}: {employeesData: employeeDataType[];}) 
{
  return (
    <>
      {employeesData.map((employee, index) => {
        return (
          <tr key={index} className={classes.main}>
            <td className={classes.ranks}>
              <p className={classes.rankingIcons}>
                {index === 0 && <img src={rank1} alt="rank1" />}
                {index === 1 && <img src={rank2} alt="rank2" />}
                {index === 2 && <img src={rank3} alt="rank3" />}
              </p>
              <p className={classes.index}>{index + 1}</p>
            </td>
            <td className={classes.empName}>
              <div>
                {employee.avatar && (
                  <img
                    className={classes.avatarImage}
                    src={employee.avatar}
                    alt="avatar"
                  />
                )}

                <p>{employee.name}</p>
              </div>
            </td>

            <td>{employee.designation}</td>
            <td>7({employee.workingHours})</td>
            <td className={classes.employeeWorkingStatus}>
              <p>
                {employee.workingHoursChangesStatus === "increased" ? (
                  <FaSortUp color="green" size={15} />
                ) : (
                  <FaSortDown color="red" size={15} />
                )}
              </p>
              <p>{employee.workingHoursChanges} hrs</p>
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default TableContent;
