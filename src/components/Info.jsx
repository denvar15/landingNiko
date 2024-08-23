import React from 'react'
import {
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
// img
import rightAr from '../assets/rightAr.png';
import leftAr from '../assets/leftAr.png';


const GetStarted = () => {

    const TextNIKO = styled(Typography) (({ theme }) => ({
        fontWeight: 100,
        fontSize: "55px",
        fontFamily: "Cakra",
        marginLeft: "15px",
        marginRight: "auto",
        marginTop: 'auto',
        marginBottom: 'auto',
        [theme.breakpoints.down('sm')]: {
            fontWeight: 100,
            fontSize: "45px",
        }
    }));

    const InfoText = styled(Typography) (({ theme }) => ({
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
                <Grid container xs={8} sm={11} md={11}
                      sx={{
                          px: 4,
                          backgroundColor: '#C70656',
                          order: {xs: 4, sm: 4, md: 3},
                          borderRadius: '0px 25px 25px 0px',
                      }}
                >
                    <TextNIKO style={{color: '#ffffff'}}>
                        ДЛЯ ПОТРЕБИТЕЛЕЙ
                    </TextNIKO>
                    <InfoText style={{color: '#ffffff'}}>
                        Умный поиск и фильтры: Возможность найти любой десерт по описанию с фильтрами для уточнения запроса.
                    </InfoText>
                    <InfoText style={{color: '#ffffff'}}>
                        Отзывы и оценки: Доступ к комментариям и оценкам других пользователей.
                    </InfoText>
                    <InfoText style={{color: '#ffffff'}}>
                        AI-конструктор изделий: Создание уникального дизайна торта с помощью искусственного интеллекта.
                    </InfoText>
                    <MoreText style={{color: '#ffffff', textAlign: 'right'}}>
                        УЗНАТЬ БОЛЬШЕ
                    </MoreText>
                    </Grid>

                    <Grid container xs={3} sm={1} md={1}
                        sx={{
                        px: 2,
                        order: {xs: 4, sm: 4, md: 3},
                        marginTop: "40%"
                    }}
                        >
                        <img src={rightAr} alt=""
                             style={{height: '30px'}}
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
                      sx={{
                          px: 2,
                          order: {xs: 4, sm: 4, md: 3},
                          marginTop: "40%"
                      }}
                >
                    <img src={leftAr} alt=""
                         style={{height: '30px'}}
                    />
                </Grid>
                <Grid container xs={8} sm={11} md={11}
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
                    <InfoText style={{color: '#5F5F5F'}}>
                        Управление заказами: “Быстро и легко обновляйте статусы заказов".
                    </InfoText>
                    <InfoText style={{color: '#5F5F5F'}}>
                        Аналитика: "Отслеживайте доходы и расходы".
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

export default GetStarted;