
import classes from "./DashboardHeader.module.css"
import headerLogo from '../../assets/logo.png'
import CurrentDate from "./CurrentDate"

// Heading for the employee dashboard

function DashboardHeader() {
  return (
    <div className={classes.main}>
          <div className={classes.heading}>
              <img src={headerLogo} alt="remoteImage" />
              <h1 className={classes.title}>Employee Activity Dashboard</h1>
          </div>
          <div className={classes.time}>
            <CurrentDate/>
          </div>
    </div>
  )
}

export default DashboardHeader
