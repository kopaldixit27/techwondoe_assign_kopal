import React, {useState,useEffect} from 'react'
import Axios from 'axios'
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';
import styled from 'styled-components';
import {FiDownloadCloud} from 'react-icons/fi'
import {AiOutlinePlus} from 'react-icons/ai'
import {MdArrowDownward} from 'react-icons/md'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {GoPrimitiveDot} from 'react-icons/go'
import Pic1 from '../images/pic1.jpg'
import Pic2 from '../images/pic2.jpg'
import Pic3 from '../images/pic3.jpeg'
import Pic4 from '../images/pic4.jpg'
import Pic6 from '../images/pic6.jpg'
import Pagination from './Pagination';

export default function Users({usersData,setUsersData}) {
  const positions=["Admin","Sales Rep","Sales Leader"];
  const statuses=["Active","Invited"]
  const [toggle,setToggle]=useState(false);
    const pictures=[Pic1,Pic2,Pic3,Pic4,Pic6]
    const [currentPage,setCurrentPage]=useState(1);
    const [usersPerPage]=useState(5);

    

  const handleClick=()=>{
    if(toggle===false)
        setToggle(!toggle);
  }

  const handleDelete=(id,e)=>{
    e.preventDefault();
    Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res=>{
        console.log('Deleted!!',res)
        setUsersData(usersData.filter(user=>{
            return user.id!==id
        }))
    })
    .catch(err=>console.log(err))
  }

  const indexOfLastUser=currentPage * usersPerPage;
  const indexOfFirstUser=indexOfLastUser-usersPerPage;
  const currentUsers=usersData.slice(indexOfFirstUser,indexOfLastUser)

  const paginate=(pageNumber)=>setCurrentPage(pageNumber)
  
  return (
    <Container>
        <div className='user_header'>
        <div className='headings'>
            <div className='user'>
                <div className='user_heading'>Users</div>
                <div className='user_num'>{usersData.length} users</div>
            </div>
            
            <div className='user_subheading'>Manage your team members and their account permissions here</div>
        </div>
        <div className='buttons'>
            <button><FiDownloadCloud />   Download CSV</button>
            <button className='blue_btn' onClick={handleClick}><AiOutlinePlus />   Add User</button>
        </div>
        </div>
        {
            toggle && <AddUser toggle={toggle} setToggle={setToggle} usersData={usersData}/>
        }
        <div className='userDetails'>
            <div className="grid_container1">
                <div className="grid_item1">Name <MdArrowDownward /></div>
                <div className='grid_item1'>Status <MdArrowDownward /></div>
                <div className="grid_item1">Role <MdArrowDownward /></div>
                <div className="grid_item1">Last Login <MdArrowDownward /></div>
            </div>
            {currentUsers.map(user=>{
                return (
                    <div key={user.id} className='grid_container'>
                        <div className='grid_item'>
                            <div className='userInfo'>
                                <img src={pictures[Math.floor(Math.random()*pictures.length)]} alt="profile" />
                                <div>
                                <div className='name'>{user.name}</div>
                                <div className='email'>{user.email}</div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='grid_item_stat'><GoPrimitiveDot /> {statuses[Math.floor(Math.random()*statuses.length)]}</div>
                        <div className='grid_item_pos'>{!user.position ? positions[Math.floor(Math.random()*positions.length)] : user.position}</div>
                        
                        <div className='grid_item'>
                            <div className='date'>Jun 20, 2022</div>
                            <div className='time'>4:45pm</div>
                        </div>
                        <div className="grid_item"><button onClick={(e)=>handleDelete(user.id,e)}><RiDeleteBin6Line /></button></div>
                        <div className="grid_item"><UpdateUser id={user.id} usersData={usersData} setUsersData={setUsersData}/></div>
                        <br></br>
                    </div>
                )
            })}
            <div className="pagination_bar">
                <Pagination usersPerPage={usersPerPage} totalUsers={usersData.length} paginate={paginate}/>
            </div>
        </div>
        
    </Container>
  )
}




const Container=styled.div`
border:1px solid lightgray;
border-radius:10px;
box-shadow:1px 1px 5px lightgray;

.user_header{
    display:flex;
    justify-content:center;
    align-items:center;
    border-bottom:1px solid lightgray;
    padding:10px;
    .headings{
        display:flex;
        flex-direction:column;
        width:37rem;
        text:center;
        .user{
            display:flex;
            flex-direction:row;
            .user_heading{
                font-size:1.2rem;
                font-weight:600;
                margin-right:1rem;
            }
            .user_num{
                background:	#F0FFF0;
                width:4.5rem;
                height:1.5rem;
                text-align:center;
                border-radius:7px;
                color:#66CDAA;
                font-weight:bold;
            }
        }
        
        .user_subheading{
            font-size:0.9rem;
            color:gray;
            font-weight:500;
        }
    }
    .buttons{
        display:flex;
        justify-content:end;
        button{
            padding:0.6rem;
            margin:0.8rem;
            text:center;
            background:white;
            border:1px solid lightgray;
            color:#696969;
            font-weight:700;
            border-radius:5px;
            
        }
        button:hover{
            background:	#DCDCDC;
        }
        .blue_btn{
            color:white;
            background:	#6495ED;
        }
        .blue_btn:hover{
            background:#4169E1;
        }
    }
}
.grid_container1{
    display:grid;
    grid-template-columns:22rem 10rem 10rem 7rem; 
    margin-top:1rem;
    padding-left:2px;
    
    .grid_item1{
        padding:10px;
        font-size:0.9rem;
        color:#696969;
        font-weight:500;
    }
    
}
.grid_container{
    display:grid;
    grid-template-columns:22rem 10rem 10rem 7rem 3rem 3rem;
    padding:5px 5px 0px 10px;
    padding-bottom:0;
    border-bottom:1px solid #F5F5F5;
    align-items:center
}
.grid_container:nth-child(odd){
    background:#F5F5F5;
    button{
        background:#F5F5F5;
        border:none;
    }
}

.grid_item{
    font-size:0.9rem;
    .userInfo{
        display:flex;
        flex-direction:row;
        align-items:center;
        .name{
            font-weight:500;
        }
        .email{
            color:gray;
        }
        img{
            width:50px;
            height:50px;
            margin-right:10px;
            margin-top:10px;
            border-radius:50%;
        }
    }
    &_pos{
        font-size:0.9rem;
        font-weight:500;
        color:gray;
    }
    &_stat{
        text:center;
        font-size:0.9rem;
        font-weight:500;
        color:#20B2AA;
        background:	#F0FFF0;
        width:4.5rem;
        padding:2px;
        border-radius:10px;
    }
    button{
        background:white;
        border:none;
    }
    .date{
        font-weight:500;
    }
    .time{
        color:gray;

    }
}

`
