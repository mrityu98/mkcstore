import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import { Divider, Box, Typography, styled } from '@mui/material';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const Component = styled(Box)`
    margin-top: 10px;
    background:#ffffff;
    
`;

const Deals = styled(Box)`
    display: flex;    
    padding: 10px 20px;
    justify-content:flex-start;
    align-items:center;
`
const DealsText = styled(Typography)`
    font-size: 20px;
    font-weight: 550;
    line-height: 32px;
    margin-right: 25px;
`

const Image = styled('img')({
    width: 'auto',
    height: 150,
});

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px
`



const RenderTimer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const Slide1 =({products,title})=>{


    const renderer = ({ hours, minutes, seconds }) => {
        return <RenderTimer variant="span">{hours} : {minutes} : {seconds}  Left</RenderTimer>;
    };

    
  
        const list=['product1','product2','product3','product4','product5','product6','product7']
        const to_be_rendered_items=products.filter(product =>
            list.includes(product.id)
       ); 
     

    return (
    <Component>
        <Deals>
            <DealsText>{title}</DealsText>
            {
             <Box style={{marginLeft:30,marginTop:2,fontSize:20}}>
                <Countdown  date={Date.now() + 5.04e+7} renderer={renderer} />
                </Box>
            }
        </Deals>
        <Divider />
    <Carousel  swipeable={false}
    draggable={false}
    responsive={responsive}
    centerMode={true}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={4000}
    keyBoardControl={true}
    showDots={false}
    containerClass="carousel-container"
    // removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    >
 
     
    {
        
        
        
        to_be_rendered_items.map(product => (
        <Link to={`product/${product.id}`} style={{textDecoration: 'none'}}>
        <Box textAlign="center" style={{ padding: '25px 15px' }} key={product.id}>
        <Image src={product.url} alt="product"  />
        <Text style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Text>
        <Text style={{ color: 'green' }}>{product.discount}</Text>
        <Text style={{ color: '#002b80', opacity: '1' }}>{product.tagline}</Text>
        </Box>        
        </Link>
        ))
}
    </Carousel>
    </Component>
        
    ) 
}

export default Slide1;