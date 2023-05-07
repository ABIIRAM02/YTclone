import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SideBar from './SideBar'
import Videos from './Videos'

import { APIfetching } from '../utils/APIfetching'


const Home = () => {

let [selectedCategory , setSelectedCategory] = useState('New')
let [videos , setVideos]  = useState([])

 useEffect(()=>
 {

      APIfetching(`search?part=snippet&q=${selectedCategory}`)
      .then((data)=>{setVideos(data.items);})

 } , [selectedCategory])


  return (
    <Stack sx={{flexDirection:{sx:'column' , md:'row'}}} >
        <Box sx={{height:{sx:'auto' , md:'90vh'} , borderRight:'1px solid #3d3d3d' , px:{sx:0 , md:2} }} >
          <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          />
          <Typography className='copyright' variant='body2' sx={{ mt:1.5 , color:'#fff' }} >
            copyright 2023 abii ytClone
          </Typography>
        </Box>

        <Box p={2} sx={{overflowY:'auto' , height:'90vh' , flex:2}} >
          <Typography variant='h4' fontWeight={'bold'} sx={{color:'white' , mb:2}} >
            {selectedCategory}
          <span style={{color:'#F31503'}} > videos</span>
          </Typography>

          <Videos videos={videos} />

        </Box>
    </Stack>
  )
}

export default Home