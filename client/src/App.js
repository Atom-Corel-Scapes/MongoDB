import React, { useEffect, useState } from 'react'

import axios from 'axios';

function App() {
    // const limit = 2;
    const URL = `http://localhost:4000/post`
    // useEffect(() => {
    //     fetch(URL).then((res)=>{
    //         res.json().then((data) => {
    //             console.log(data);
    //         })
    //     })
    // })

    const handleSignup = async (e) => {
      e.preventDefault();
      const ele = e.target.elements;
      const userData = {
        name: ele[0].value,
        password: ele[1].value,
        age: ele[2].value,
      };
      const res = await axios.post(URL, userData);
      console.log(res.data);
    }

  return (
    <div>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder='enter name'/><br/>
        <input type="password" placeholder='enter password'/><br/>
        <input type="number" placeholder='enter age'/><br/><br/>
        <button>Signup</button>
      </form>
    </div>
  )
}

export default App