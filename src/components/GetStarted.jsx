import React, { useState } from "react";
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import { CarouselProvider } from "pure-react-carousel";
import Title from './Title'
import CarouselSlider from "./Carousel"
// img
import leftArrow from '../assets/leftArrow.png';
import rightArrow from '../assets/rightArrow.png';
import img1 from '../assets/Group 153.png';
import img2 from '../assets/Group 155.png';
import img3 from '../assets/Group 156.png';
import whatsapp from '../assets/whatsapp.png';
import telegram from '../assets/telegram.png';

const GetStarted = () => {

    const [slideCount, setSlideCount] = useState(2);
    const [currentSlide, setCurrentSlide] = useState(0);

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingBottom: "24px"
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#5F5F5F',
        marginTop: '0.5rem',
    })

    const TextNIKO = styled(Typography) (({ theme }) => ({
        fontWeight: 100,
        fontSize: "55px",
        color: '#4E449E',
        fontFamily: "Cakra",
        marginRight: "auto",
        marginTop: 'auto',
        marginBottom: 'auto',
        [theme.breakpoints.down('sm')]: {
            fontWeight: 100,
            fontSize: "35px",
        },
    }));

    return (
            
        <Grid container spacing={{ xs: 0, sm: 0, md: 0 }}
              style={{backgroundColor: '#E9C7C4'}}
        sx={{
            py: 8,
        }}
        >
            <CustomGridItem item xs={12} sm={16} md={24}
            component = 'section'
            style={{backgroundColor: '#E9C7C4', marginTop: '-40px'}}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Первый в мире AI-маркетплейс для кондитеров NIKO'
                    }
                    textAlign={'start'}
                    color='#5F5F5F'
                    />
                    <CustomTypography>
                        Даст возможность создавать уникальные
                        дизайны, исходя из ваших фантазий, и находить
                        лучших кондитеров.
                    </CustomTypography> 
                </Box>

            </CustomGridItem>

            <Grid container xs={12} sm={16} md={24}
                  sx={{
                      order: {xs: 4, sm: 4, md: 3},
                      backgroundColor: 'white',
                      py: 3,
                  }}
            >
                <Grid container xs={6} sm={7} md={6.5}
                      sx={{
                          px: 1,
                          order: {xs: 4, sm: 4, md: 3}
                      }}
                >
                    <TextNIKO>
                        СВЯЖИТЕСЬ С НАМИ
                    </TextNIKO>
                </Grid>
                <Grid container xs={2} sm={1} md={2.5}
                      sx={{
                          px: 4,
                          order: {xs: 4, sm: 4, md: 3}
                      }}
                >
                </Grid>
                <Grid container xs={1} sm={1} md={1}
                      sx={theme => ({
                          order: {xs: 4, sm: 4, md: 3},
                          marginTop: 'auto',
                          marginBottom: 'auto',
                          [theme.breakpoints.down('md')]: {
                              height: "10vw",
                              width: "10vw",
                          }
                      })}
                      style={{maxHeight: "75px",
                          maxWidth: "75px"}}
                >
                    <a href="https://t.me/niko_pastry">
                        <img src={whatsapp} alt=""
                             style={{aspectRatio: '1/1', width: '100%'}}
                        />
                    </a>
                </Grid>
                <Grid container xs={0.5} sm={0.5} md={0.5}
                      sx={{
                          px: 2,
                          order: {xs: 4, sm: 4, md: 3}
                      }}
                >
                </Grid>
                <Grid container xs={1} sm={1} md={1}
                      sx={theme => ({
                          order: {xs: 4, sm: 4, md: 3},
                          height: "75px",
                          width: "75px",
                          marginTop: 'auto',
                          marginBottom: 'auto',
                          [theme.breakpoints.down('md')]: {
                              height: "10vw",
                              width: "10vw",
                          }
                      })}
                      style={{maxHeight: "75px",
                          maxWidth: "75px"}}
                >
                    <a href="https://t.me/niko_pastry">
                        <img src={telegram} alt=""
                             style={{aspectRatio: '1/1', width: '100%'}}
                        />
                    </a>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12}
                  sx={theme => ({
                      order: {xs: 4, sm: 4, md: 3},
                      py: 3,
                      px: 3,
                      textAlign: "center",
                      marginTop: "20px",
                      marginBottom: '-60px',
                  })}>
                <CarouselProvider
                    visibleSlides={slideCount}
                    totalSlides={6}
                    step={1}
                    currentSlide={currentSlide}
                    naturalSlideWidth={200}
                    naturalSlideHeight={105}
                    isIntrinsicHeight={true}
                >
                <CarouselSlider setSlideCount={setSlideCount}
                                setCurrentSlide={setCurrentSlide}/>
                </CarouselProvider>
            </Grid>

        </Grid>
    )
}

export default GetStarted;