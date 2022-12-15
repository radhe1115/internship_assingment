import React, { useState } from 'react';

const NewForm = () => {
// const {register, handleChange, errors } = useForm();
  const [payFees, setpayFees] = useState({
    fullname: "",
    num: "",
    age: "",
    email: "",
  });
  

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setpayFees({ ...payFees, [name]: value })
  }
  const [data, setData ] = useState ({
    batch:""
  });
  const handleChange = (e) => {
    setData(e.target.value);
  }

  const [records, setRecords] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...payFees, id: new Date().getTime.toString() }
    console.log(records,);
    setRecords([...records, newRecord]);
    console.log(records);
    setpayFees({ fullname: "", num: "",age: "", email: ""});
  }
  return (
    <div className="container">
      <h1>Yoga Class</h1>
      <h3>To join yoga classes fill the registration form</h3>

      <form action="" className='form' onSubmit={handleSubmit}>

        <div>
          <label>NAME:</label>
          <input type="text" placeholder='Enter Your Name'
            value={payFees.fullname}
            onChange={handleInput}
            name='fullname' id='fullname' />
        </div>

        <div>
          <label>MOBILE NO:</label>
          <input type="number" placeholder='Enter Your Contact no'
            value={payFees.num}
            onChange={handleInput}
            name='num' id='num' />
        </div>

        <div>
          <label>AGE:</label>
          <input type="number" placeholder='Enter Your age '
            value={payFees.age}
            onChange={handleInput}
            name='age' id='age' />
        </div>

        <div>
          <label>Email: </label>
          <input type="email" placeholder='Enter Your Email id'
            value={payFees.email}
            onChange={handleInput}
            name="email" id="email" />
        </div>
        <div>
          <label htmlFor="batch">Select Your Batch</label>
          <select 
          value= {payFees.batch} 
          onChange={handleChange} name="batch" id="batch">
            <option value="fisrt">6-7 AM</option>
            <option value="second">7-8 AM</option>
            <option value="third">8-9 AM</option>
            <option value="fourth">5-6 PM</option>
          </select>
        </div>
      

        {/* <div>
          <label><input type="checkbox" id='tc' /> I Accepet the terms And Condtions</label>
        </div> */}
     
      <button type="submit" className='btn'>
        PAY FEES </button>
     
         </form>
         <div>
          {
            records.map((curElem) =>{
              return(
                <div className='showDataStyle' key={curElem.id}>
                  <p>{curElem.fullname}</p>
                  <p>{curElem.num}</p>
                  <p>{curElem.age}</p>
                  <p>{curElem.email}</p>
                </div>
              )
            })
          }
         </div>

    </div>

  )
}

export default NewForm
