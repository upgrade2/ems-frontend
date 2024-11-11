import React ,{useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'

const ListEmployeeComponent = () => {

  const[employee,setEmployees] = useState([])

  useEffect(()=>{
    listEmployees().then((res) => {
        setEmployees(res.data)
    }).catch(
         error => {
            console.error("ERROR",error);
         }
    )
  },[])

  return (

    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Emp Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>

            </thead>
            <tbody>
            {
                employee.map(employee =>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>
                )
            }

            </tbody>
        </table>

    </div>
  )
}

export default ListEmployeeComponent