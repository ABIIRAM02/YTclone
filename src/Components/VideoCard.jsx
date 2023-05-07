import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { demoChannelTitle, demoVideoUrl } from '../utils/data';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const VideoCard = ({item : {id:{videoId} , snippet } } ) => {

    console.log(videoId);

  return (
    <Link to={ videoId ? `/video/${videoId}` : demoVideoUrl} ><Card sx={{width:{ md:'320px' , xs:'90vw' } , borderRadius:0 }} >

        <CardMedia image={snippet.thumbnails.high.url} sx={{height:'180px' }} />
        
        <CardContent sx={{backgroundColor:'#1e1e1e' , height:'100px'}} >

            <Typography variant='subtitle1' fontWeight='bold' color='#FFF'  >
                { snippet.title.slice(0 , 35) || demoChannelTitle.split(0 , 35) }...
            </Typography>

            <Typography variant='subtitle2' fontWeight='bold' color='gray'  >
                { snippet.channelTitle.slice(0 , 35) || demoChannelTitle.split(0 , 35) }
                <CheckCircle fontSize='12' color='gray' sx={{ml:'5px'}} />
            </Typography>

        </CardContent>
    </Card></Link>
  )
}

export default VideoCard