import React, { useState } from "react";
import { FormInput } from "../../components/FormInput/FormInput";
import { SelectInput } from "../../components/FormInput/SelectInput";
import axios from "../../axiosUrl";

export const GoodsInsert = () => {
  // goods details
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [sensitive, setSensitive] = useState("");
  const [storageId, setStorageId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [goodsID, setgoodsID] = useState("");
  const [arrivalID, setarrivalID] = useState("");
  const [supplierID, setsupplierID] = useState("");
  const [dapartureID, setdapartureID] = useState("");
  const [consumerID, setconsumerID] = useState("");
  const [wID, setwID] = useState("");
  const [bin, setbin] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log("submit");
    axios
      .post(
        '/WarehouseStocksManagementAPI/Goods',
        {
          goods_id: Number.parseInt(goodsID),
          is_sensitive: sensitive === "True" ? 1 : 0,
          storage: Number.parseInt(storageId),
          weight: Number.parseInt(weight),
          cost:      Number.parseInt(price),
          arrival:   Number.parseInt(arrivalID),
          supplier:  Number.parseInt(supplierID),
          departure: Number.parseInt(dapartureID),
          consumer: Number.parseInt(consumerID),
          goods_name: name,
          category: categoryId,
          wid: Number.parseInt(wID),
          bin: Number.parseInt(bin),
        }

        /*  
        {
                name:name,
                price:price,
                weight:weight,
                sensitive:sensitive,
                Cname: Cname,
                Cphone: Cphone,
                Cemail : Cemail,
                Sname: Sname,
                Sphone: Sphone,
                SelectInput: Semail,
                endLocationArrival: endLocationArrival,
                endLocationDeparture : endLocationDeparture,
                startLocationArrival: startLocationArrival,
                startLocationDeparture : startLocationDeparture,
                dispatchTimeArrival: dispatchTimeArrival,
                dispatchTimeDeparture :dispatchTimeDeparture,
                recieveTimeArrival: recieveTimeArrival,
                recieveTimeDeparture: recieveTimeDeparture,
                vehicleNumber: vehicleNumber,
                storageId: storageId,
                categoryId: categoryId
        } */
      )
      .then((res) => {
        console.log("Inserted Succesfully")
        window.location.reload(true);
})
      .catch((err) => alert(err.message));
  };
  return (
    <div>
    <FormInput
        label="Goods ID"
        type="text"
        required
        value={goodsID}
        set={setgoodsID}
      />
      <FormInput label="Name" type="text" required value={name} set={setName} />
      <FormInput
        label="Price"
        type="number"
        required
        value={price}
        set={setPrice}
      />
      <FormInput
        label="Weight"
        type="number"
        required
        value={weight}
        set={setWeight}
      />
      <SelectInput
        label="Is Sensitive"
        type="text"
        optionItems={[
          { id: 1, value: "True" },
          { id: 2, value: "False" },
        ]}
        required
        value={sensitive}
        set={setSensitive}
      />
      <FormInput
        label="Category"
        type="text"
        required
        value={categoryId}
        set={setCategoryId}
      />
      
      <FormInput
        label="Supplier ID"
        type="number"
        required
        value={supplierID}
        set={setsupplierID}
      />
      <FormInput
        label="Arrival ID"
        type="number"
        required
        value={arrivalID}
        set={setarrivalID}
      />
      <FormInput
        label="Departure ID"
        type="number"
        required
        value={dapartureID}
        set={setdapartureID}
      />
      <FormInput
        label="Consumer ID"
        type="number"
        required
        value={consumerID}
        set={setconsumerID}
      />
      <FormInput label="Bin" type="number" required value={bin} set={setbin} />
      <FormInput
        label="Warehouse Id"
        type="number"
        required
        value={wID}
        set={setwID}
      />
      <FormInput
        label="Storage Id"
        type="number"
        required
        value={storageId}
        set={setStorageId}
      />
      <button onClick={handleClick}>Add Good</button>
    </div>
  );
};
