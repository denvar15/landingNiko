import React from 'react'
import {
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
// img
import Group97 from '../assets/Group 97.png';
import Group98 from '../assets/Group 98.png';


const Cakes = () => {

    const TextNIKO = styled(Typography) (({ theme }) => ({
        fontWeight: 100,
        fontSize: "105px",
        color: "white",
        fontFamily: "Cakra",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 'auto',
        marginBottom: 'auto',
        [theme.breakpoints.down('sm')]: {
            fontWeight: 100,
            fontSize: "75px",
        }
    }));

    return (

        <Grid container spacing={{ xs: 0, sm: 0, md: 0 }}
              style={{backgroundColor: '#E9C7C4'}}

        >
            <Grid container xs={12} sm={16} md={18}
                  sx={{
                      order: {xs: 4, sm: 4, md: 3},
                      py: 3,
                  }}
            >
                <Grid container xs={8} sm={11} md={16}
                      sx={{
                          order: {xs: 4, sm: 4, md: 3},
                          borderRadius: '0px 25px 25px 0px',
                          textAlign: 'center'
                      }}
                >
                    <img src={Group98} alt=""
                         style={{width: '100vw'}}
                    />
                </Grid>
            </Grid>
            <Grid container xs={12} sm={16} md={12}
                  sx={{
                      order: {xs: 4, sm: 4, md: 3},
                  }}
            >
                <TextNIKO>
                    AI ТОРТЫ
                </TextNIKO>
            </Grid>
            <Grid container xs={12} sm={16} md={12}
                  sx={{
                      order: {xs: 4, sm: 4, md: 3},
                  }}
            >
                <img src={Group97} alt=""
                     style={{width: '100vw'}}
                />
            </Grid>
        </Grid>
    )
}

export default Cakes;