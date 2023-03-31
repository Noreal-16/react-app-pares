import React, { useState } from "react";
import APIURL from "../utils/API";
import TOKEN from "../utils/TOKEN";

export const FormsComponent =()=>{
    const [number, setNumber]= useState([]);
    const [showError, setShowError] = useState(false);
    const [formData, setFormData] = useState({
      objetive:0,
      arrays:[]
    })
    const {objetive, arrays} = formData;
    const fetchAPiPost =(e)=>{
        e.preventDefault();
        fetch(APIURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + TOKEN
            },
            body: JSON.stringify({
                objetive: formData.objetive,
                arrays: number
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                window.location.reload();
            })
            .catch(error => console.error(error))
    }
    const handleInputChange =({target})=>{
        const isValidInput = /^\d+(,\d+)*$/.test(target.value);
        setShowError(!isValidInput);
        const inputNumber = target.value.split(',').map(Number);
        setNumber(inputNumber);

        const {name, value} = target;
        setFormData({
          ...formData,
          [name]: value
        })  

    }
    return(
        <form className='row g-3' onSubmit={fetchAPiPost}>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label text-left">Objetive</label>
              <input type="number" className="form-control" name="objetive" value={objetive} onChange={handleInputChange} id="formGroupExampleInput" placeholder="please enter an integer ejm. 2" />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">Array</label>
              <input type="text"  name="arrays" value={arrays}
              onChange={handleInputChange} className="form-control" 
              id="formGroupExampleInput2" placeholder="1,2,3,4,5" />
            </div>
            {showError ? <p className="info">Ingrese números separados por coma, por ejemplo: 1,2,3</p>:
            <div className="col-12">
              <button type="submit" className="btn btn-info">Find Pairs</button>
            </div>}
          </form>
    )
}