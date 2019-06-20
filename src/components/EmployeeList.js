import React from "react"
function EmployeeList(Props){
let Enames=Props.eList.employees;
  return(
      <div className="Elist" >
          <h1>Employees</h1>
          {
              Enames.map((values)=>  <div onClick={Props.fun} id={values.id} key={values.id} > {values.name } </div>)
          }

      </div>
  )


}
export default EmployeeList;

