import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { APIfetching } from '../utils/APIfetching'
import Videos from './Videos'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {

    let [videos , setVideos]  = useState([])

    let {input} = useParams()
    
     useEffect(()=>
     {
          APIfetching(`search?part=snippet&q=${input}`)
          .then((data)=>{setVideos(data.items);})
    
     } , [])

  return (
    <>
            <Box p={2} sx={{overflowY:'auto' , height:'90vh' , flex:2}} >
          <Typography variant='h4' fontWeight={'bold'} sx={{color:'white' , mb:2}} >
            
            Search results for
          <span style={{color:'#F31503'}} > {input} </span>
          </Typography> videos

          <Videos videos={videos} />

        </Box>
    </>
  )
}

export default SearchFeed