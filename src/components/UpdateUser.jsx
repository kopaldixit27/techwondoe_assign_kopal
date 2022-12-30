import React,{useState} from 'react'
import Axios from 'axios'
import {FiEdit2} from 'react-icons/fi'
import styled from 'styled-components'


export default function UpdateUser({id,usersData,setUsersData}) {
    const [username,setUsername]=useState('')
    const [userPosition,setUserPosition]=useState('')
    const [toggleUpdate,setToggleUpdate]=useState(false)
    // const [modal, setModal] = useState(false);
    const handleUpdate=()=>{
        if(toggleUpdate===false)
            setToggleUpdate(!toggleUpdate)
    }
    const updateData=(e)=>{
        e.preventDefault()
        // setModal(false)
        setToggleUpdate(!toggleUpdate)
        setUsersData(
        usersData.map(user=>
        user.id===id?{...user,name:username,position:userPosition} : user      
        )
        )
    }
  return (
    <Container>
        <button onClick={handleUpdate}><FiEdit2 /></button>

        {toggleUpdate && (
            <div className="pop_up_container">
                <div className="pop_up_body">
                <div className="pop_up_content">
                <div className="heading">Update User Information</div>
                <form className='updateForm'>
                    <label>Enter name: </label>
                    <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter name'></input>
                    <br></br>
                    <label>Enter user role: </label>
                    <input type='text' value={userPosition} onChange={(e)=>setUserPosition(e.target.value)} placeholder='Enter role'></input>
                    <br></br>
                    <button onClick={updateData}>Update</button>
                </form>
                </div>
                </div>
            </div>
        )
        }
        
    </Container>
  )
}

const Container=styled.div`
.pop_up_container{
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:rgb(0,0,0,0.5);
    padding-top:15%;
    .pop_up_body{
        width:50%;
        height:50%;
        background:white;
        margin:auto;
        .pop_up_content{
            text-align:center;
            padding:5%;
            .heading{
                font-size:1.9rem;
            }
            .updateForm{
                label{
                    font-size:1.1rem;
                    margin-right:10px;
                    color:gray;
                }
                input{
                    padding:7px;
                    margin-bottom:10px;
                    border-radius:7px;
                    border:1px solid gray;
                }
                button{
                    background:	#87CEEB;
                    padding:10px;
                    width:7rem;
                    margin-top:5px;
                    border-radius:7px;
                    color:white;
                    font-weight:600;
                }
                button:hover{
                    background:	#4682B4;
                }
            }
        }
    }
    
}
`