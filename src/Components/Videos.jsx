import { Box, Stack } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'

const Videos = ({videos , direction}) => {

  return (
    <Stack direction={ direction || 'row'} flexWrap='wrap' gap={2} justifyContent='center' >
        {
            videos.map((item , index)=>{
                return(
                    <Box key={index} >
                        { item.id.videoId && <VideoCard item={item} /> }
                    </Box>
                )
            })
        }
    </Stack>
  )
}

export default Videos