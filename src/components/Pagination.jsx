import React from 'react'
import styled from 'styled-components';

export default function Pagination({usersPerPage, totalUsers, paginate}) {
    const pageNumbers=[];

    for(let i=1;i<=Math.ceil(totalUsers/usersPerPage);i++)
    {
        pageNumbers.push(i);
    }

  return (
    <Container>
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number=>{
                    return (
                        <li key={number} className='page_item'>
                            <a href='!#' className='page_link' onClick={()=>paginate(number)}>
                                {number}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </Container>
  )
}


const Container=styled.div`
nav{
    ul{
        list-style-type:none;
        li{
            display:inline-block;
            width:20px;
            height:20px;
            padding:8px;
            text-align:center;
            background:#F5F5F5;
            margin-right:7px;
            a{
                text-decoration:none;
                color:gray;
                font-weight:700;
            }
        }
        li:hover{
            background:lightgray;
        }
    }
}
`