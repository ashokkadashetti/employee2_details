import './App.css';
import React,{useState} from 'react';
import Data from './constants/DataComponent'
import HeaderComponent from './components/HeaderComponent';
import DeptDetails from './components/DeptDetails';
import EmployeeDetails from './components/EmployeeDetails';


function App() {

  const [selectDept, setSelectDept] = useState(0)

  const getDeptDetails = (deptId) => {
    setSelectDept(deptId)
  }

  const dept = Data.filter((dept) => dept.deptId === selectDept);

  return (
      <div className="App">
        <HeaderComponent />
        {
          (dept.length > 0 ? <EmployeeDetails employeeDetails={dept[0]} /> : '')
        }
        <DeptDetails data={Data} getDeptDetails={getDeptDetails}/>
      </div>
  );
}

export default App;
