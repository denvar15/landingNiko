import React, {useState} from 'react'
import {
    Grid,
    styled,
    Typography,
    Slide,
    Paper
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
import girlRed from '../assets/girlRed.png';
import boyWhite from '../assets/boyWhite.png';

const Info = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlide2, setCurrentSlide2] = useState(0);

    const TextNIKO = styled(Typography) (({ theme }) => ({
        fontWeight: 100,
        fontSize: "55px",
        fontFamily: "Cakra",
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
                  marginTop: "-25px"
              }}
        >
            <Grid id="makers" container xs={12} sm={16} md={12}
                  sx={{
                      order: {xs: 4, sm: 4, md: 3},
                      py: 3,
                  }}
            >
                {!currentSlide ? (
                    <Slide direction="right" in={!currentSlide} mountOnEnter unmountOnExit>
                        <Grid container xs={12} sm={12} md={11}
                              sx={{
                                  px: 4,
                                  backgroundColor: '#c70656',
                                  order: {xs: 4, sm: 4, md: 3},
                                  borderRadius: '0px 25px 25px 0px',
                              }}
                        >
                            <TextNIKO style={{color: '#ffffff', marginLeft: "6.5vw"}}>
                                ДЛЯ ПОТРЕБИТЕЛЕЙ
                            </TextNIKO>
                            <InfoText container style={{color: '#ffffff'}}>
                                <Grid container xs={6} sm={6} md={6}>
                                    <img src={smartSearch} alt=""
                                         style={{height: '12vw', maxHeight: '150px',
                                             marginTop: "auto", marginBottom: "auto"}}
                                    />
                                </Grid>
                                <Grid container xs={6} sm={6} md={6}>
                                    <Title
                                        text={
                                            'Умный поиск и фильтры:'
                                        }
                                        color='white'
                                        textAlign={'start'}
                                    />
                                    <Typography style={{fontWeight: "400"}}>
                                        Возможность найти любой десерт по описанию с фильтрами для уточнения запроса.
                                    </Typography>
                                </Grid>
                            </InfoText>
                            <InfoText container style={{color: '#ffffff'}}>
                                <Grid container xs={6} sm={6} md={6}>
                                    <img src={ratesReviews} alt=""
                                         style={{height: '10vw', marginLeft: '-7vw', maxHeight: '150px',
                                             marginTop: "auto", marginBottom: "auto"}}
                                    />
                                </Grid>
                                <Grid container xs={6} sm={6} md={4}>
                                    <Title
                                        text={
                                            'Отзывы и оценки:'
                                        }
                                        color='white'
                                        textAlign={'start'}
                                    />
                                    <Typography style={{fontWeight: "400"}}>
                                        Доступ к комментариям и оценкам других пользователей.
                                    </Typography>
                                </Grid>
                            </InfoText>
                            <InfoText container style={{color: '#ffffff'}}>
                                <Grid container xs={6} sm={6} md={6}>
                                    <img src={aiConstructor} alt=""
                                         style={{height: '12vw', marginLeft: '5vw', maxHeight: '150px',
                                             marginTop: "auto", marginBottom: "auto"}}
                                    />
                                </Grid>
                                <Grid container xs={6} sm={6} md={6}>
                                    <Title
                                        text={
                                            'AI-конструктор изделий:'
                                        }
                                        color='white'
                                        textAlign={'start'}
                                    />
                                    <Typography style={{fontWeight: "400"}}>
                                        Создание уникального дизайна торта с помощью искусственного интеллекта.
                                    </Typography>
                                </Grid>
                            </InfoText>
                            <MoreText style={{color: '#ffffff', textAlign: 'right', marginTop: "auto",
                                            cursor: "pointer"}}
                                      onClick={setCurrentSlide.bind(this,!currentSlide)}>
                                УЗНАТЬ БОЛЬШЕ
                            </MoreText>
                        </Grid>
                    </Slide>
                ) : null}
                {currentSlide ? (
                    <Slide direction="right" in={currentSlide} mountOnEnter unmountOnExit>
                        <Grid container xs={12} sm={12} md={11}
                              sx={{
                                  px: 4,
                                  py: 2,
                                  backgroundColor: '#c70656',
                                  order: {xs: 4, sm: 4, md: 3},
                                  borderRadius: '0px 25px 25px 0px',
                              }}
                        >
                            <Grid container xs={12} sm={6} md={6}
                            sx={{py: 2}}>
                                <img src={girlRed} alt=""
                                     style={{height: '35vh', maxHeight: '500px',
                                         marginLeft: "auto", marginRight: "auto",
                                         marginTop: "auto", marginBottom: "auto"}}
                                />
                            </Grid>
                            <Grid container xs={0} sm={6} md={6} sx={{py: 2}}>
                                <TextNIKO style={{color: '#ffffff'}}>
                                    ДЛЯ ПОТРЕБИТЕЛЕЙ
                                </TextNIKO>
                                <Typography style={{fontWeight: "300", color: "white",
                                    marginTop: "auto", marginBottom: "auto"}}>
                                    Если вы пришли найти идеальный десерт… либо пытаетесь найти торт, который по-настоящему
                                    сделает незабываемым торжественное мероприятие, то наша платформа создана для вас.

                                    Мы сделали умный поиск, который поможет найти любой десерт по вашему описанию.
                                    При введении описания желаемого изделия маркетплейс выдаст множество вариантов с фотографиями.

                                </Typography>
                            </Grid>
                            <Typography style={{fontWeight: "300", color: "white"}}>
                                Вы можете настроить фильтры, которые помогут уточнить запрос. Более того, при выборе тортика
                                вы можете пользоваться простым конструктором и менять начинки, форму, дизайн, исходя из того,
                                что готов предложить кондитер. Нажав на описание тортов, есть возможность увидеть комментарии
                                других пользователей и оценку, которые они поставили.
                            </Typography>
                            <Typography style={{fontWeight: "300", color: "white"}}>
                                После добавления понравившегося торта в избранное, выберите удобный способ доставки и оплаты,
                                и наслаждайтесь самыми потрясающими кондитерскими изделиями!

                                Если у вас не получилось найти торт мечты для мероприятия, либо вы хотите уникальный дизайн,
                                вы можете воспользоваться AI-конструктором изделий, который за несколько секунд нарисует
                                десерт исходя из вашего описания. Затем кондитер сделает торт в точности по вашему запросу.
                                Сгенерированные дизайны будут храниться в личном кабинете.
                            </Typography>
                            <MoreText style={{color: '#ffffff', textAlign: 'right', marginBottom: "auto",
                                            cursor: "pointer"}}
                                      onClick={setCurrentSlide.bind(this,!currentSlide)}>
                                НАЗАД
                            </MoreText>
                        </Grid>
                    </Slide>
                ) : null}

                    <Grid container xs={3} sm={1} md={1}
                        sx={theme => ({
                        px: 2,
                        order: {xs: 4, sm: 4, md: 3},
                        marginTop: "auto",
                            [theme.breakpoints.down('md')]:{
                                display: 'none'
                            },
                    })}
                        >
                        <img src={rightRedArrow} alt=""
                             style={{height: '4vw', cursor: "pointer"}}
                             onClick={setCurrentSlide.bind(this,!currentSlide)}
                        />
                    </Grid>
            </Grid>

            <Grid id="consumers" container xs={12} sm={16} md={12}
                  sx={{
                      order: {xs: 4, sm: 4, md: 3},
                      py: 3,
                  }}
            >
                <Grid container xs={3} sm={1} md={1}
                      sx={theme => ({
                          px: 2,
                          order: {xs: 4, sm: 4, md: 3},
                          marginTop: "auto",
                              [theme.breakpoints.down('md')]:{
                              display: 'none'
                          },
                      })}
                >
                    <img src={whiteLeftArrow} alt=""
                         style={{height: '4vw', marginLeft: "auto",  cursor: "pointer"}}
                         onClick={setCurrentSlide2.bind(this,!currentSlide2)}
                    />
                </Grid>
                {!currentSlide2 ? (
                    <Slide direction="left" in={!currentSlide2} mountOnEnter unmountOnExit>
                    <Grid container xs={12} sm={12} md={11}
                          sx={{
                              px: 4,
                              backgroundColor: '#ffffff',
                              order: {xs: 4, sm: 4, md: 3},
                              borderRadius: '25px 0px 0px 25px',
                          }}
                    >
                        <TextNIKO style={{color: '#5F5F5F', marginLeft: "6.5vw"}}>
                            ДЛЯ КОНДИТЕРОВ
                        </TextNIKO>
                        <InfoText container style={{color: '#5F5F5F'}}>
                            <Grid container xs={6} sm={6} md={6}>
                                <img src={orderControl} alt=""
                                     style={{height: '12vw', marginLeft: '6vw', maxHeight: '150px',
                                         marginTop: "auto", marginBottom: "auto"}}
                                />
                            </Grid>
                            <Grid container xs={6} sm={6} md={4}>
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
                            <Grid container xs={6} sm={6} md={6}>
                                <img src={analytics} alt=""
                                     style={{height: '12vw', marginLeft: '6vw', maxHeight: '150px',
                                         marginTop: "auto", marginBottom: "auto"}}
                                />
                            </Grid>
                            <Grid container xs={6} sm={6} md={3}>
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
                        <InfoText container style={{color: '#5F5F5F'}}>
                            <Grid container xs={6} sm={6} md={6}>
                                <img src={conversation} alt=""
                                     style={{height: '12vw', marginLeft: '6vw', maxHeight: '150px',
                                         marginTop: "auto", marginBottom: "auto"}}
                                />
                            </Grid>
                            <Grid container xs={6} sm={6} md={3}>
                                <Title
                                    text={
                                        'Общение'
                                    }
                                    color='#5F5F5F'
                                    textAlign={'start'}
                                />
                                <Typography style={{fontWeight: "400"}}>
                                    Общайтесь и сотрудничайте с коллегами.
                                </Typography>
                            </Grid>
                        </InfoText>
                        <InfoText container style={{color: '#5F5F5F'}}>
                            <Grid container xs={6} sm={6} md={6}>
                                <img src={blog} alt=""
                                     style={{height: '12vw', marginLeft: '6vw', maxHeight: '150px',
                                         marginTop: "auto", marginBottom: "auto"}}
                                />
                            </Grid>
                            <Grid container xs={6} sm={6} md={3}>
                                <Title
                                    text={
                                        'Блог'
                                    }
                                    color='#5F5F5F'
                                    textAlign={'start'}
                                />
                                <Typography style={{fontWeight: "400"}}>
                                    Выкладывайте сторис со своими десертами.
                                </Typography>
                            </Grid>
                        </InfoText>
                        <MoreText style={{color: '#5F5F5F', textAlign: 'left', marginTop: "auto",
                                    cursor: "pointer"}}
                                  onClick={setCurrentSlide2.bind(this,!currentSlide2)}>
                            УЗНАТЬ БОЛЬШЕ
                        </MoreText>
                    </Grid>
                    </Slide>
                ) : null}
                {currentSlide2 ? (
                    <Slide direction="left" in={currentSlide2} mountOnEnter unmountOnExit>
                        <Grid container xs={12} sm={12} md={11}
                              sx={{
                                  px: 4,
                                  py: 2,
                                  backgroundColor: 'white',
                                  order: {xs: 4, sm: 4, md: 3},
                                  borderRadius: '25px 0px 0px 25px',
                              }}
                        >
                            <Grid container xs={0} sm={6} md={6} sx={{py: 2}}>
                                <TextNIKO style={{color: '#5F5F5F'}}>
                                    ДЛЯ КОНДИТЕРОВ
                                </TextNIKO>
                                <Typography style={{fontWeight: "300", color: "#5F5F5F",
                                    marginTop: "auto", marginBottom: "auto"}}>
                                    Если вы пришли найти идеальный десерт… либо пытаетесь найти торт, который по-настоящему
                                    сделает незабываемым торжественное мероприятие, то наша платформа создана для вас.

                                    Мы сделали умный поиск, который поможет найти любой десерт по вашему описанию.
                                    При введении описания желаемого изделия маркетплейс выдаст множество вариантов с фотографиями.

                                </Typography>
                            </Grid>
                            <Grid container xs={12} sm={6} md={6}
                                  sx={{py: 2}}>
                                <img src={boyWhite} alt=""
                                     style={{height: '35vh', maxHeight: '500px',
                                         marginLeft: "auto", marginRight: "auto",
                                         marginTop: "auto", marginBottom: "auto"}}
                                />
                            </Grid>
                            <Typography style={{fontWeight: "300", color: "#5F5F5F"}}>
                                Во-вторых, вы сможете сделать персональную страничку с собственными изделиями,
                                приложить фотографии, сделать описание и указать все дополнительные детали.

                                В третьих, вы можете продавать свои рецепты и зарабатывать еще больше, участвовать в
                                совместных чатах с другими кондитерами и выкладывать сторис про свой продукт для клиентов,
                                рассказывать о мастер-классах.

                                Наша платформа - это не просто маркетплейс, это большое комьюнити, где кондитеры могут
                                открывать для себя лучшие техники и создавать новые шедевры.
                            </Typography>
                            <MoreText style={{color: "#5F5F5F", textAlign: 'left', marginBottom: "auto",
                                            cursor: "pointer"}}
                                      onClick={setCurrentSlide2.bind(this,!currentSlide2)}>
                                НАЗАД
                            </MoreText>
                        </Grid>
                    </Slide>
                ) : null}
            </Grid>
        </Grid>
    )
}

export default Info;