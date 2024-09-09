import React from 'react'
import {
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
// img
import figure from '../assets/figure.png';


const Mission = () => {

    const MissionText = styled(Typography) (({ theme }) => ({
        fontWeight: 100,
        fontSize: "65px",
        fontFamily: "Cakra",
        marginLeft: "5px",
        marginRight: "auto",
        marginTop: 'auto',
        marginBottom: 'auto',
        writingMode: 'vertical-lr',
        transform: 'rotate(180deg)',
        [theme.breakpoints.down('sm')]: {
            fontWeight: 100,
            fontSize: "45px",
        }
    }));

    const InfoText = styled(Typography) (({ theme }) => ({
        fontWeight: "400",
        fontSize: "20px",
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

    return (

        <Grid id="mission" container spacing={{ xs: 0, sm: 0, md: 0 }}
              style={{backgroundColor: '#E9C7C4'}}
              sx={{
                  marginTop: "0px"
              }}
        >
            <Grid container xs={12} sm={16} md={12}
                  sx={{
                      order: {xs: 4, sm: 4, md: 3},
                      py: 3,
                  }}
            >
                <Grid container xs={2} sm={3} md={2}
                      sx={{
                          px: 4,
                          order: {xs: 4, sm: 4, md: 3},
                          borderRadius: '0px 25px 25px 0px',
                      }}
                >
                    <MissionText style={{color: '#c70656'}}>
                        НАША МИССИЯ
                    </MissionText>
                </Grid>

                <Grid container xs={7} sm={8} md={7}
                      sx={{
                          px: 2,
                          order: {xs: 4, sm: 4, md: 3},
                      }}
                >
                    <InfoText style={{color: '#5F5F5F'}}>
                        Мы разрабатываем маркетплейс для заказа десертов, который будет приносить радость людям как при личных заказах, так и для особых мероприятий. Наша цель - сделать важные вечера еще более приятными и запоминающимися, позволяя каждому насладиться и получить настоящее удовольствие от вкусных угощений.
                    </InfoText>
                    <InfoText style={{color: '#5F5F5F'}}>
                        Мы также хотим, чтобы талантливые кондитеры всегда могли найти клиентов и получать заслуженную оплату за свой труд, а также могли использовать аналитические инструменты для
                    </InfoText>
                </Grid>
                <Grid container xs={0} sm={1} md={1}
                      sx={{
                          px: 2,
                          order: {xs: 4, sm: 4, md: 3},
                      }}
                >
                    <img src={figure} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Mission;