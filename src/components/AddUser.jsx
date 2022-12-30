import React, {useState} from 'react'
import Axios from 'axios'
import styled from 'styled-components'

export default function AddUser({toggle,setToggle,usersData}) {
    const [username,setUsername]=useState('')
    const [useremail,setUseremail]=useState('')
    const postData=(e)=>{
        e.preventDefault();
        setToggle(!toggle)
        Axios.post('https://jsonplaceholder.typicode.com/users',{
            name:username,
            email:useremail
        }).then(res=>
            {
                console.log('Posting Data',res)
                usersData.push(res.data)
        })
        .catch(err=>console.log(err))
    }

  return (
    <Container>
        <div className='formHeading'>Add User information</div>
        <form className='userform'>
            <label for='username' className='username'>Enter name of user: </label>
            <input type="text" placeholder='Enter name' id='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <br></br>
            <label for='useremail' className='useremail'>Enter email id of user: </label>
            <input type="text" placeholder='Enter email' id='useremail' value={useremail} onChange={(e)=>setUseremail(e.target.value)}/>
            <br></br>
            <button className='addBtn' onClick={postData}>Add User</button>
        </form>
    </Container>
  )
}



const Container=styled.div`
    
    padding:15px 0 25px 20px;
    border-bottom:1px solid #F5F5F5; 
    .formHeading{
        font-size:1.4rem;
        font-weight:500;
        margin-bottom:10px;
    }
    .userform{
        gap:5px;
        .username{
            font-size:1rem;
            margin-right:5px;
            color:gray;
        }
        #username{
            padding:10px;
            border:1px solid #DCDCDC;
            margin-bottom:10px;
            border-radius:7px;
        }
        .useremail{
            font-size:1rem;
            margin-right:5px;
            color:gray;
        }
        #useremail{
            padding:10px;
            border:1px solid #DCDCDC;
            margin-bottom:15px;
            border-radius:7px;
        }
        .addBtn{
            background:	#66CDAA;
            padding:10px;
            width:7rem;
            border:none;
            color:white;
            border-radius:7px;
        }
        .addBtn:hover{
            background:	#008080;
        }
    }
`