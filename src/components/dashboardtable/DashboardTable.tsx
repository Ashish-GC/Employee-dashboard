
import { employeesDetails} from '../../data'
import TableContent from './TableContent'
import classes from './DashboardTable.module.css'

// renders  hearder for the table and sends employeeDetails to the table Content

function DashboardTable() {

  return (
   <table className={classes.table}>
    <thead>
    <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Designation</th>
        <th>No. of hours worked</th>
        <th>Changes</th>
      </tr>
    </thead>
     <tbody>
       <TableContent employeesData={employeesDetails}/>
     </tbody>
   </table>
  )
}

export default DashboardTable
