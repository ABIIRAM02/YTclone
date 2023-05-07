import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'

import {Home , Nav , SearchFeed , VideoDetail } from './utils/files'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}} >
        <Nav/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/video/:id' element={<VideoDetail/>} />
        <Route path='/search/:input' element={<SearchFeed/>} />
    </Routes>
    </Box>
    </BrowserRouter>
    </>
  )
}

export default App