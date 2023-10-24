'use client'
import React, { useEffect } from 'react'
import Nav from './Nav';
import Footer from './Footer';

export default function IndvBlog(props) {
    const fetchById = async () => {
        let headersList = {
          Accept: "*/*",
        };
    
        let response = await fetch(
          `http://localhost:5000/api/blog/fetch/${props.id}`,
          {
            method: "GET",
            headers: headersList,
          }
        );
    
        let blogs = await response.json();
        console.log(blogs);
      };
    useEffect(()=>{
        fetchById();
    },[])
  return (
    <>
    <Nav/>
    <div>indvBlog this is demo</div>
    <Footer/>
    </>
  )
}
