import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/data'

const SideBar = ( {selectedCategory , setSelectedCategory} ) => {

  return (
    <Stack direction='row' sx={{ overflowY:'auto' , height:{ sx:'auto' , md:'95%' } , flexDirection:{md: 'column'} }} >
        {
            categories.map((data)=>{return(
                <button onClick={()=>{setSelectedCategory(data.name)}} key={data.name} style={{background: data.name === selectedCategory && '#FC1503' , color:'white' }} className='category-btn' >

                    <span style={{color:data.name === selectedCategory ? 'white' : 'red' , marginRight:'15px'}} >{data.icon}</span>
                    <span style={{opacity:data.name === selectedCategory ? '1' : '0.8' , marginRight:'15px'}} >{data.name}</span>

                </button>
            )})
        }
    </Stack>
  )
}

export default SideBar