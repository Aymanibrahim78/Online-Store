import { useTheme } from '@emotion/react'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
const navigate =useNavigate()
const theme = useTheme()
  return (
    <Box sx={{display:"flex", flexDirection: "column",gap:"20px", alignItems: "center"}} >
        <Typography color={theme.palette.error.main} sx={{textAlign:"center"}} variant="h1" >Not Found 404</Typography>
            <Button className={"border"} sx={{width:"30%" ,}} variant="contained" onClick={()=>{navigate("/")}} >Go To Home</Button>      
    </Box>
  )
}

export default NotFound
