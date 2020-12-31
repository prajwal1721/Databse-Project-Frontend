import React, { useState } from "react";
import { FormInput } from "../../components/FormInput/FormInput";
import { SelectInput } from "../../components/FormInput/SelectInput";
import axios from "../../axiosUrl";
export const EmployeeInsert = () => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [shift, setShift] = useState("");
  const [permanant, setPermanant] = useState("No");
  const [worksOn, setWorksOn] = useState("");
  const [empid, setEmpid] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    console.log("submit");
    axios
      .post(
        "/WarehouseStocksManagementAPI/Employee",
        {
          empid: Number.parseInt(empid),
          emp_name: name,
          emp_shift: shift,
          emp_sal: Number.parseInt(salary),
          wid: Number.parseInt(worksOn),
        }
        /*  {
                name:name,
                salary:salary,
                shift:shift,
                permanant:permanant,
                worksOn:worksOn
        } */
      )
      .then((res) => {
        console.log("Inserted Succesfully");
        window.location.reload(true);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div style={{margin: '10px', border: '2px solid black', borderRadius: '10px', padding:'0px 10px 10px 10px'}}>
        <div style={{fontSize: '24px', fontWeight: '600', margin: '10px'}}>Employee Details</div>
      <FormInput
        label="Employee ID"
        type="number"
        required
        value={empid}
        set={setEmpid}
      />
      <FormInput label="Name" type="text" required value={name} set={setName} />
      <FormInput
        label="Salary"
        type="number"
        required
        value={salary}
        set={setSalary}
      />
      <FormInput
        label="Shift"
        type="text"
        required
        value={shift}
        set={setShift}
      />
      <FormInput
        label="Works on"
        type="number"
        required
        value={worksOn}
        set={setWorksOn}
      />
      {/* <SelectInput 
                    label='Is Permanant'
                    type='text'
                    optionItems={[{id:1,value:'True'},{id:2,value:'False'}]}
                    required
                    value={permanant}
                    set={setPermanant}
            /> */}
      <button onClick={handleClick}>Add Employee</button>
    </div>
  );
};
