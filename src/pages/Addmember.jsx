import axios from 'axios';
import React, { useState } from 'react'

const Addmember = () => {
    const [formData, setFormData] = useState({
   
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
          role:"member"
        });
      };
      const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:5000/admin/createuser',formData)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        
      }
  return (
    <div>
        <h1>Add Member</h1>
        
        <form onSubmit={handleSubmit}>
        <input type="email" placeholder='email' className="email"
                 name="email" onChange={handleChange}/>
        <input type="text" placeholder='name' className="name"
                 name="name" onChange={handleChange}/>
        <input  type="password" placeholder='password' className="password"
                 name="password" onChange={handleChange}/>
       <input type="submit" />
        </form>
    </div>
  )
}

export default Addmember