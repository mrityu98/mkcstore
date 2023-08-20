import { styled } from '@mui/material';
import { bannerData,imageURL } from '../../Constants/data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const ImageTop = styled('img')(({ theme }) => ({
    width: '100%',
    height: 280,
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 180
    }
}));

const ImageBottom = styled('img')({
    width: '100%',
    height: 400,
});

const Banner = ({topSection}) => {
    return (
        <>
        {
         topSection?
         (
        <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            showDots={false}
            slidesToSlide={1}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {
                bannerData.map(image => (
                    <ImageTop src={image.url} alt="banner" id={image.id} key={image.id} />
                ))
            }
        </Carousel>
         )
        :( <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
    >
        {
            imageURL.map(image => (
                <ImageBottom src={image} alt="banner" key={image} />
            ))
        }
    </Carousel>
        )
    }
        </>
    )
}

export default Banner;