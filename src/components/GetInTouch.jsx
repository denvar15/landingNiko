import React from 'react'
import {
    Box,
    Grid,
    styled,
    Typography,
    FormControl
} from '@mui/material'

import BasicFormControl from './Form'
// img
import icon3 from '../assets/Icons3.png';
import icon4 from '../assets/Icons4.png';
import vector from '../assets/VectorContact.png';

const GetInTouch = () => {

    const CustomGridItem = styled(Grid) (({ theme }) => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: "-40px",
        [theme.breakpoints.down('sm')]: {
            marginBottom: "-30px",
        }
    }));

    const TextNIKO = styled(Typography) (({ theme }) => ({
        fontWeight: 100,
        fontSize: "105px",
        color: '#4E449E',
        fontFamily: "Cakra",
        marginTop: 'auto',
        marginBottom: 'auto',
        [theme.breakpoints.down('sm')]: {
            fontWeight: 100,
            fontSize: "75px",
        }
    }));

    const InfoText = styled(Typography) (({ theme }) => ({
        fontSize: "25px",
        marginLeft: "55px",
        marginRight: "auto",
        marginTop: '10px',
        marginBottom: '10px',
        width: "100%",
        padding: '8px',
        [theme.breakpoints.down('sm')]: {
            fontSize: "20px",
        }
    }));

    const ContactText = styled(Typography) (({ theme }) => ({
        fontWeight: 40,
        fontSize: "15px",
        margin: "10px",
        width: "100%",
        whiteSpace: 'nowrap',
        textAlign: 'start',
        [theme.breakpoints.down('sm')]: {
            fontWeight: 20,
            fontSize: "10px",
        }
    }));

    return (

        <Grid id="contact" container spacing={{ xs: 0, sm: 0, md: 0 }}
              style={{backgroundColor: '#E9C7C4'}}
        >
            <CustomGridItem item xs={12} sm={16} md={24}
                            component = 'section'
                            style={{backgroundColor: '#E9C7C4'}}
            >
                <TextNIKO>
                    ДЛЯ СВЯЗИ
                </TextNIKO>
            </CustomGridItem>

            <Grid container xs={12} sm={16} md={24}
                  sx={{
                      order: {xs: 4, sm: 4, md: 3},
                      backgroundColor: '#4E449E',
                      py: 3,
                  }}
            >
                <Grid container xs={12} sm={12} md={12}
                      sx={{
                          px: 4,
                          order: {xs: 4, sm: 4, md: 3}
                      }}
                >
                    <InfoText style={{color: '#ffffff', textAlign: 'end'}}>
                        ПРИГЛАШАЕМ ВАС ПРИСОЕДИНИТЬСЯ К НАШЕЙ ПЛАТФОРМЕ
                    </InfoText>
                </Grid>
                <Grid container xs={10} sm={6} md={6}
                      sx={{
                          px: 4,
                          order: {xs: 4, sm: 4, md: 3}
                      }}
                >
                    <img src={vector} alt=""
                         style={{
                             marginLeft: '-100px',
                             marginTop: 'auto',
                             marginBottom: 'auto',
                             width: '120%'
                         }}
                    />
                    <ContactText style={{color: '#ffffff'}}>
                        Контктная информация: Email, телефон и адрес.
                    </ContactText>
                    <ContactText style={{color: '#ffffff', textDecoration: 'underline'}}>
                        Политика конфиденциальности и условия использования.
                    </ContactText>
                </Grid>
                <Grid container xs={0} sm={2} md={3}
                      sx={{
                          px: 4,
                          order: {xs: 4, sm: 4, md: 3}
                      }}
                >
                </Grid>
                <Grid container xs={3} sm={2} md={1}
                      sx={{
                          px: 4,
                          order: {xs: 4, sm: 4, md: 3}
                      }}
                >
                    <ContactText style={{color: '#ffffff', marginLeft: '-1vw'}}>
                        СОЦИАЛЬНЫЕ СЕТИ:
                    </ContactText>
                    <a href="https://t.me/niko_pastry">
                        <img src={icon3} alt=""
                             style={{
                                 height: "75px",
                                 width: "75px",
                                 margin: '10px'
                             }}
                        />
                    </a>
                    <a href="https://t.me/niko_pastry">
                        <img src={icon4} alt=""
                             style={{
                                 height: "75px",
                                 width: "75px",
                                 margin: '10px'

                             }}
                        />
                    </a>
                </Grid>
            </Grid>
            <Grid container xs={12} sm={16} md={24}
                  sx={{
                      order: {xs: 4, sm: 4, md: 3},
                  }}
            >
                <InfoText style={{color: '#ffffff', textAlign: 'center'}}>
                    МЫ УВЕДОМИМ ВАС О НОВЫХ ФУНКЦИЯХ
                </InfoText>
                <BasicFormControl />
            </Grid>
        </Grid>
    )
}

export default GetInTouch;