
import { useEffect,useState } from "react";
import classes from './CurrentDate.module.css';
import { dateOptions,timeOptions } from "../../types";

//this component renders current date and time 

function CurrentDate() {

  const [date,setDate]= useState(new Date().toLocaleDateString('en-US',dateOptions))
  const [time,setTime]=useState(new Date().toLocaleTimeString('en-US',timeOptions))
  
  useEffect(()=>{
     const interval = setInterval(()=>{

      const getDate = new Date();
      setDate(getDate.toLocaleDateString('en-US',dateOptions))
      setTime(getDate.toLocaleTimeString('en-US',timeOptions))
     },(60-(new Date().getSeconds()))*1000 )

     return ()=>clearTimeout(interval);

    },[])

   return (
    <div className={classes.currDate}>
      <p> {date}</p>
      <p> {time}</p>
    </div>
  )
}

export default CurrentDate
