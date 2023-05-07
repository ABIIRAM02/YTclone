import { Stack } from '@mui/material'
import React from 'react'

import {logo} from '../utils/data'
import { Link } from 'react-router-dom'
import Search from './Search'

const Nav = () => {
  return (

    <Stack direction={'row'} p={2} alignItems={'center'} justifyContent={'space-between'} sx={{position:'sticky' , top:0}} >
        <Link to='/'  >
              <img src={logo} alt="" height={45} />
        </Link>

        <Search/>
    </Stack>

  )
}

export default Nav