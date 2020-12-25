import React, { useState } from "react";
import { FormInput } from "../../components/FormInput/FormInput";
import axios from "../../axiosUrl";

export const VehicleInsert = () => {
  const [vehicleNo, setVehicleNo] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [type, setType] = useState("");
  const [owns, setOwns] = useState("");
  const [model, setModel] = useState("");
  const [capacity, setCapacity] = useState("");
  const [lastMaintainance, setLastMaintainance] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    console.log("submit");
    axios
      .post(
        "/WarehouseStocksManagementAPI/Vehicle",
        {
          in_wh: owns,
          reg_num: vehicleNo,
          model: model,
          type: type,
          last_maintainence: lastMaintainance,
        }
        /* {
                vehicleNo:vehicleNo,
                registrationNo:registrationNo,
                type:type,
                model:model,
                capacity:capacity,
                lastMaintainance:lastMaintainance,
                owns:owns
        } */
      )
      .then((res) => {
        console.log("Inserted Succesfully");
        window.location.reload(true);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div>
      <FormInput
        label="Vehicle No"
        type="text"
        placeHolder={`AA-XX AA-XXXX`}
        required
        value={vehicleNo}
        set={setVehicleNo}
      />
      {/* 
      <FormInput
        label="Registration No"
        type="number"
        required
        value={registrationNo}
        set={setRegistrationNo}
      /> */}
      <FormInput label="Type" type="text" required value={type} set={setType} />
      <FormInput
        label="Model"
        type="text"
        required
        value={model}
        set={setModel}
      />
      {/* <FormInput
        label="Capacity"
        type="number"
        required
        value={capacity}
        set={setCapacity}
      /> */}
      <FormInput
        label="Warehouse Owner"
        type="number"
        required
        value={owns}
        set={setOwns}
      />
      <FormInput
        label="Last Maintainance"
        type="date"
        required
        value={lastMaintainance}
        set={setLastMaintainance}
      />
      <button onClick={handleClick}>Add vehicle</button>
    </div>
  );
};
