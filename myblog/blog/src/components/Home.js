import React, { useEffect, useState } from 'react';
import axios from "axios";
import Bloglist from './Bloglist';


const Blog = () => {
  const [data, setdata] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:4000/blogs')
      .then(res => {
        setdata(res.data)
      })
      .catch(err=>{
        console.error("Error!", err);
      })
  }, [])
  return (
    <div className='home'>
      {data.length > 0 ? <Bloglist blogs={data} /> : <p>Loading...</p>}
    </div>
  )
      }

export default Blog;
