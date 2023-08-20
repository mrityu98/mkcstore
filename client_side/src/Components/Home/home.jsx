import Banner from "./banner";
import { Box,styled } from "@mui/material";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Slide1 from "./slide1";
import Slide2 from "./slide2";
import Slide3 from "./slide3";
import Slide4 from "./slide4";
import Slide5 from "./slide5";
import Slide6 from "./slide6";
import Footer from "./footer";

const StyleBox = styled(Box)`
padding:10px;
background:#F2F2F2;

`;
const Home= ()=>{
    const {products}=useSelector(state=>state.getProducts);
    const dispatch = useDispatch();
    useEffect(()=>{
     dispatch(getProducts()) 
    },[dispatch]);
    return (
    <>
    <StyleBox>
    <Banner topSection={true}/>
    </StyleBox>
    <StyleBox>
    <Slide1 products={products} title='Deals of the day' />
    </StyleBox>
    <StyleBox>
    <Slide2 products={products} title='Most Trending'  />
    </StyleBox>
    <StyleBox>
    <Slide3 products={products} title='Our Recommendations'/>
    </StyleBox>
    <StyleBox>
    <Banner topSection={false}/>
    </StyleBox>
    <StyleBox>
    <Slide4 products={products} title='Electronics' />
    </StyleBox>
    <StyleBox>
    <Slide5 products={products} title='Clothes' />
    </StyleBox>
    <StyleBox>
    <Slide6 products={products} title='Sports' />
    </StyleBox>
    <Footer/>
    </>
    )
}

export default Home;