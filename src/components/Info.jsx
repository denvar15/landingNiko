import React from 'react'
import {
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import orderControl from '../assets/orderControl.png';
import analytics from '../assets/analytics.png';
import conversation from '../assets/conversation.png';
import blog from '../assets/blog.png';
import smartSearch from '../assets/smartSearch.png';
import ratesReviews from '../assets/ratesReviews.png';
import aiConstructor from '../assets/aiConstructor.png';
import rightRedArrow from '../assets/rightRedArrow.png';
import whiteLeftArrow from '../assets/whiteLeftArrow.png';

const Info = () => {

    const TextNIKO = styled(Typography) (({ theme }) => ({
        fontWeight: 100,
        fontSize: "55px",
        fontFamily: "Cakra",
        marginLeft: "6.5vw",
        marginRight: "auto",
        marginTop: 'auto',
        marginBottom: 'auto',
        [theme.breakpoints.down('sm')]: {
            fontWeight: 100,
            fontSize: "45px",
        }
    }));

    const InfoText = styled(Grid) (({ theme }) => ({
        fontWeight: 20,
        fontSize: "20px",
        border: "solid 1px",
        borderRadius: "20px",
        marginLeft: "55px",
        marginRight: "auto",
        marginTop: '10px',
        marginBottom: '10px',
        width: "100%",
        padding: '8px',
        [theme.breakpoints.down('sm')]: {
            fontWeight: 20,
            fontSize: "15px",
        }
    }));

    const MoreText = styled(Typography) (({ theme }) => ({
        fontWeight: 10,
        fontSize: "30px",
        fontFamily: "Cakra",
        marginTop: '10px',
        marginBottom: '10px',
        width: "100%",
        [theme.breakpoints.down('sm')]: {
            fontWeight: 10,
            fontSize: "25px",
        }
    }));

    return (

        <Grid container spacing={{ xs: 0, sm: 0, md: 0 }}
              style={{backgroundColor: '#E9C7C4'}}
              sx={{
                  marginTop: "-50px"
              }}
        >
            <Grid container xs={12} sm={16} md={12}
                  sx={{
                      order: {xs: 4, sm: 4, md: 3},
                      py: 3,
                  }}
            >
                <Grid container xs={12} sm={12} md={11}
                      sx={{
                          px: 4,
                          backgroundColor: '#c70656',
                          order: {xs: 4, sm: 4, md: 3},
                          borderRadius: '0px 25px 25px 0px',
                      }}
                >
                    <TextNIKO style={{color: '#ffffff'}}>
                        ДЛЯ ПОТРЕБИТЕЛЕЙ
                    </TextNIKO>
                    <InfoText container style={{color: '#ffffff'}}>
                        <Grid container xs={6} sm={6} md={4}>
                            <img src={smartSearch} alt=""
                                style={{height: '12vw'}}
                            />
                        </Grid>
                        <Grid container xs={6} sm={6} md={7}>
                            <Title
                            text={
                                'Умный поиск и фильтры:'
                            }
                            color='white'
                            textAlign={'start'}
                            />
                            Возможность найти любой десерт по описанию с фильтрами для уточнения запроса.
                        </Grid>
                    </InfoText>
                    <InfoText container style={{color: '#ffffff'}}>
                        <Grid container xs={6} sm={6} md={4}>
                            <img src={ratesReviews} alt=""
                                style={{height: '10vw', marginLeft: '-9vw'}}
                            />
                        </Grid>
                        <Grid container xs={6} sm={6} md={7}>
                            <Title
                            text={
                                'Отзывы и оценки:'
                            }
                            color='white'
                            textAlign={'start'}
                            />
                            Доступ к комментариям и оценкам других пользователей.
                        </Grid>
                    </InfoText>
                    <InfoText container style={{color: '#ffffff'}}>
                        <Grid container xs={6} sm={6} md={4}>
                            <img src={aiConstructor} alt=""
                                style={{height: '12vw', marginLeft: '5vw'}}
                            />
                        </Grid>
                        <Grid container xs={6} sm={6} md={7}>
                            <Title
                            text={
                                'AI-конструктор изделий:'
                            }
                            color='white'
                            textAlign={'start'}
                            />
                            Создание уникального дизайна торта с помощью искусственного интеллекта.
                        </Grid>
                    </InfoText>
                    <MoreText style={{color: '#ffffff', textAlign: 'right'}}>
                        УЗНАТЬ БОЛЬШЕ
                    </MoreText>
                    </Grid>

                    <Grid container xs={3} sm={1} md={1}
                        sx={theme => ({
                        px: 2,
                        order: {xs: 4, sm: 4, md: 3},
                        marginTop: "65%",
                            [theme.breakpoints.down('md')]:{
                                display: 'none'
                            },
                    })}
                        >
                        <img src={rightRedArrow} alt=""
                             style={{height: '50px'}}
                        />
                    </Grid>
            </Grid>

            <Grid container xs={12} sm={16} md={12}
                  sx={{
                      order: {xs: 4, sm: 4, md: 3},
                      py: 3,
                  }}
            >
                <Grid container xs={3} sm={1} md={1}
                      sx={theme => ({
                          px: 2,
                          order: {xs: 4, sm: 4, md: 3},
                          marginTop: "40%",
                              [theme.breakpoints.down('md')]:{
                              display: 'none'
                          },
                      })}
                >
                    <img src={whiteLeftArrow} alt=""
                         style={{height: '50px'}}
                    />
                </Grid>
                <Grid container xs={12} sm={12} md={11}
                      sx={{
                          px: 4,
                          backgroundColor: '#ffffff',
                          order: {xs: 4, sm: 4, md: 3},
                          borderRadius: '25px 0px 0px 25px',
                      }}
                >
                    <TextNIKO style={{color: '#5F5F5F'}}>
                        ДЛЯ КОНДИТЕРОВ
                    </TextNIKO>
                    <InfoText container style={{color: '#5F5F5F'}}>
                        <Grid container xs={6} sm={6} md={4}>
                            <img src={orderControl} alt=""
                                style={{height: '12vw', marginLeft: '6vw'}}
                            />
                        </Grid>
                        <Grid container xs={6} sm={6} md={7}>
                            <Title
                            text={
                                'Управление заказами'
                            }
                            color='#5F5F5F'
                            textAlign={'start'}
                            />
                            <Typography style={{fontWeight: "400"}}>
                                Быстро и легко обновляйте статусы заказов.
                            </Typography>
                        </Grid>
                    </InfoText>
                    <InfoText container style={{color: '#5F5F5F'}}>
                        <Grid container xs={6} sm={6} md={4}>
                            <img src={analytics} alt=""
                                style={{height: '12vw', marginLeft: '6vw'}}
                            />
                        </Grid>
                        <Grid container xs={6} sm={6} md={7}>
                            <Title
                            text={
                                'Аналитика'
                            }
                            color='#5F5F5F'
                            textAlign={'start'}
                            />
                            <Typography style={{fontWeight: "400"}}>
                                Отслеживайте доходы и расходы.
                            </Typography>
                        </Grid>
                    </InfoText>
                    <InfoText style={{color: '#5F5F5F'}}>
                        Общение: "Общайтесь и сотрудничайте с коллегами".
                    </InfoText>
                    <InfoText style={{color: '#5F5F5F'}}>
                        Блог: "Выкладывайте сторис со своими десертами".
                    </InfoText>
                    <MoreText style={{color: '#5F5F5F', textAlign: 'left'}}>
                        УЗНАТЬ БОЛЬШЕ
                    </MoreText>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Info;