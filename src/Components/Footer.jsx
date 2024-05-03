import { Box, Link, Typography } from "@mui/material"

const Footer = () => {
  return (
   
    <Box sx={{
        bgcolor:"#2B3445",
        py:1.5,
        mt:8,}}>
        <Typography 
        // display={"flex"}
        // justifyContent={"center"}
        // alignItems={"center"}
        color={"HighlightText"}
        // variant="p"
        sx={{fontSize:15 ,textAlign:"center"}}
        >
Copyright ©{new Date().getFullYear() } All rights reserved | This template is made with by 
<span>
    <Link href="https://www.facebook.com/AymanIbrahim.official"  target="_blank" sx={{ml:1}} underline="none">
      {'Ayman Ibrahim'}
      
    </Link>
</span>



        </Typography>
    </Box>

      
   
  )
}

export default Footer
