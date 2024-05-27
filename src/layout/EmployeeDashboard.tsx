import DashboardHeader from "../components/dashboardHeader/DashboardHeader";
import DashboardTable from "../components/dashboardtable/DashboardTable";
import EmployeeCard from "../components/employee_of_the_month/EmployeeCard";
import classes from "./EmployeeDashboard.module.css";

// Layout  for the Employee Dashboard
function EmployeeDashboard() {
  return (
    <section className={classes.container}>
       <section className={classes.main}>
       <header className={classes.header}>
        <DashboardHeader/>
      </header>
      <section className={classes.content}>
         <div className={classes.dashTable}><DashboardTable></DashboardTable></div>
         <div className={classes.empCard}><EmployeeCard/></div>
      </section>
       </section>
      
    </section>
  );
}

export default EmployeeDashboard;
