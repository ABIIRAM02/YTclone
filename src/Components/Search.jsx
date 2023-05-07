import React, { useState } from 'react'

import { Paper , IconButton } from '@mui/material'

import { Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

  let [input , setInput] = useState('')

  let navigate = useNavigate()

  let handleSearch = (e)=>
  {
    e.preventDefault()
    if(input)
    {
      navigate(`/search/${input}`)
      setInput('')
    }
  }

  return (
    <Paper component={'form'} onSubmit={handleSearch} sx={{
        borderRadius:20,
        border:'1px solid #e3e3e3',
        pl:2,
        boxShadow:'none',
        mr:{sm:5},
    }} >
        <input className='search-bar' placeholder='Search' value={input} onChange={(e)=>{setInput(e.target.value)}} />
        <IconButton sx={{p:'10px' , color:'red' }} >
            <Search/>
        </IconButton>

    </Paper>
  )
}

export default SearchBar