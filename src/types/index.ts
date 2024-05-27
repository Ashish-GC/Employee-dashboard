//Stores TypeScript types used in the application

export  type employeeDataType={
  name: string;
  avatar: string;
  designation: string;
  workingHours: number;
  workingHoursChanges: number;
  workingHoursChangesStatus: string;
}


export const dateOptions:Intl.DateTimeFormatOptions = {
    month:'long',
    day:'numeric',
    year:'numeric',   
  }
 export const timeOptions:Intl.DateTimeFormatOptions={
    hour:'2-digit',
    minute:'2-digit',
  }