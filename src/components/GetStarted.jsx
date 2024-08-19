import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import icon1 from '../assets/Icons.png';
import icon2 from '../assets/Vector2.png';
import leftCurve from '../assets/Vector3.png';
import rightCurve from '../assets/Vector4.png';
import img1 from '../assets/Group 153.png';
import img2 from '../assets/Group 155.png';
import img3 from '../assets/Group 156.png';


const GetStarted = () => {

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
        color: 'white',
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
            fontSize: "45px",
        }
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
                <Grid container xs={6} sm={8} md={8}
                      sx={{
                          px: 4,
                          order: {xs: 4, sm: 4, md: 3}
                      }}
                >
                    <TextNIKO>
                        СВЯЖИТЕСЬ С НАМИ
                    </TextNIKO>
                </Grid>
                <Grid container xs={3} sm={2} md={2}
                      sx={{
                          px: 4,
                          order: {xs: 4, sm: 4, md: 3}
                      }}
                >
                    <img src={icon2} alt=""
                         style={{
                             height: "75px",
                             width: "75px",
                             marginTop: 'auto',
                             marginBottom: 'auto'
                         }}
                    />
                </Grid>
                <Grid container xs={2} sm={2} md={2}
                      sx={{
                          px: 4,
                          order: {xs: 4, sm: 4, md: 3}
                      }}
                >
                    <img src={icon1} alt=""
                         style={{
                             height: "75px",
                             width: "75px",
                             marginTop: 'auto',
                             marginBottom: 'auto'
                         }}
                    />
                </Grid>
            </Grid>

            <Grid item xs={12} sm={4} md={1.5}
            sx={{
                order: {xs: 4, sm: 4, md: 3},
                py: 3,
                px: 3,
                textAlign: "center",
                marginTop: "auto",
                marginBottom: 'auto'
            }}
            >
                <img src={leftCurve} alt=""
                style={{
                    width: "55px",
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={3}
                  sx={{
                      order: {xs: 4, sm: 4, md: 3},
                      py: 3,
                      textAlign: "center"
                  }}
            >
                <img src={img1} alt=""
                     style={{
                         width: "105px",
                     }}
                />
                <Typography style={{color: '#5F5F5F', marginTop: "5px"}}>
                    Интерфейс для управления заказами
                </Typography>
            </Grid>

            <Grid item xs={12} sm={4} md={3}
                  sx={{
                      order: {xs: 4, sm: 4, md: 3},
                      py: 3,
                      textAlign: "center"
                  }}
            >
                <img src={img2} alt=""
                     style={{
                         width: "105px",
                     }}
                />
                <Typography style={{color: '#5F5F5F', marginTop: "5px"}}>
                    Инструменты для анализа доходов и расходов
                </Typography>
            </Grid>

            <Grid item xs={12} sm={4} md={3}
                  sx={{
                      order: {xs: 4, sm: 4, md: 3},
                      py: 3,
                      textAlign: "center"
                  }}
            >
                <img src={img3} alt=""
                     style={{
                         width: "105px",
                     }}
                />
                <Typography style={{color: '#5F5F5F', marginTop: "5px"}}>
                    Возможность публикации в блоге
                </Typography>
            </Grid>

            <Grid item xs={12} sm={4} md={1.5}
                  sx={{
                      order: {xs: 4, sm: 4, md: 3},
                      py: 3,
                      textAlign: "center",
                      marginTop: "auto",
                      marginBottom: 'auto'
                  }}
            >
                <img src={rightCurve} alt=""
                     style={{
                         width: "55px",
                     }}
                />
            </Grid>
        </Grid>
    )
}

export default GetStarted;