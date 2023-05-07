import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { APIfetching } from '../utils/APIfetching'
import { CheckCircle } from '@mui/icons-material'
import Videos from './Videos'

const VideoDetail = () => {

    let {id} = useParams()
    let [video , setVideo] = useState(null)
    let [suggession , setsuggession] = useState(null)

    useEffect(()=>
    {

        APIfetching(`videos?part=snippet,statistics&id=${id}`)
        .then((data)=>{ setVideo(data.items[0]) })

        APIfetching(`search?part=snippet&relatedToVideoId=${id}`)
        .then((data)=>{ setsuggession(data.items , console.log(data.items)) })

    } , [])
    
    if( !video?.snippet ){ return 'Loading...' }

    let { snippet : { title ,channelTitle } , statistics:{ viewCount , likeCount } } = video

  return (
    <Box minHeight='95vh' >
        <Stack direction={{ xs:'column' , md:'row' }} >
            <Box flex={1} >
                <Box sx={{width:'100%' , position:'sticky' , top:0  }} >
                    <ReactPlayer className="react-player" url={`https://youtube.com/watch?v=${id}`} controls />
                    <Typography color='#fff' variant='h5' fontWeight='bold' p={2} >
                        { title }
                    </Typography>
                    <Stack color='white' direction='row' py={1} px={2} justifyContent='space-between' >
                        <Typography variant={ {sx:'subtitle1' , md:'h6'} } color='white'  >
                                {channelTitle}<CheckCircle sx={{fontSize : '15px' , color:'gray' , ml:'5px'}} />
                        </Typography>
                        <Stack direction='row' gap={'20px'} alignItems='center'  >
                            <Typography variant='body1' sx={{opacity:0.7}} >
                                    { parseInt(viewCount).toLocaleString() } Views
                            </Typography>
                            <Typography variant='body1' sx={{opacity:0.7}} >
                                    { parseInt(likeCount).toLocaleString() } Likes
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        <Box justifyContent='center' alignItems='center' px={2} py={{md:1 , xs:5}} >
            { suggession && <Videos direction={'column'} videos={suggession} />}
        </Box>
        </Stack>


    </Box>
  )
}

export default VideoDetail