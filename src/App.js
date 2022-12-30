import React, {useState,useEffect} from "react";
import Axios from 'axios'
import Users from "./components/Users";
import styled from "styled-components";

function App() {
  const [usersData,setUsersData]=useState([]);
  useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
         console.log(res.data)
          setUsersData(res.data)
        })
        .catch(err=>console.log(err))
  },[])

  return (
    <Container>
      <div className="heading">Company Settings</div>
      <div className="btns">
        
        <button className="btns_btn_gen">General</button>
        <button className="btns_btn_users">Users</button>
        <button className="btns_btn">Plan</button>
        <button className="btns_btn">Billing</button>
        <button className="btns_btn_int">Integrations</button>
      </div>
      <div>
        <Users usersData={usersData} setUsersData={setUsersData}/>
      </div>
    </Container>
  );
}

export default App;

const Container=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:1rem;
  .heading{
    font-size:2rem;
    font-weight:500;
    margin-bottom:1.5rem;
  }
  .btns{
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin-bottom:1rem;
    &_btn{
      width:8rem;
      text:center;
      font-weight:bold;
      height:1.8rem;
      background:white;
      border:none;
      border:1px solid lightgray;
      margin-bottom:1rem;
      color:#696969;
      &_gen{
        width:8rem;
        text:center;
        font-weight:bold;
        height:1.8rem;
        color:#696969;
        background:white;
        border:none;
        border:1px solid lightgray;
        border-radius:5px 0 0 5px;
        margin-bottom:1rem;
      }
      &_int{
        width:8rem;
        text:center;
        font-weight:bold;
        height:1.8rem;
        background:white;
        border:1px solid lightgray;
        border-radius:0 5px 5px 0;
        margin-bottom:1rem;
        color:#696969;
      }
      &_users{
        width:8rem;
      text:center;
      font-weight:bold;
      height:1.8rem;
      background:#6495ED;
      border:none;
      border:1px solid lightgray;
      color:white;
      margin-bottom:1rem;
      }
    }
  }
  
`