import "./Home.css"
import { Stack,  } from '@mui/material'
import CardProduct from "Components/CardProduct"
import { products } from "Products"

const Home = () => {

  
 



  return (
    <Stack direction={"row"} sx={{flexWrap:"wrap" ,justifyContent:"center"}}>

{products.map((item ) => {
  return(
    <CardProduct  key={item.id} item={item} price={item.price} imageLink={item.imageLink[0]} description={item.description} productName={item.productName} />
  )
}
)}

    </Stack>
  ) 
}

export default Home
