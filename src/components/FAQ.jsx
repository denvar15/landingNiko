import React from 'react'
import {
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// img
import accordIcon from '../assets/accordIcon.png'
import greyDownArrow from '../assets/greyDownArrow.png'


const Cakes = () => {

    const TextNIKO = styled(Typography) (({ theme }) => ({
        fontWeight: 100,
        fontSize: "105px",
        color: "white",
        fontFamily: "Cakra",
        marginRight: "auto",
        marginTop: 'auto',
        marginBottom: 'auto',
        [theme.breakpoints.down('sm')]: {
            fontWeight: 100,
            fontSize: "75px",
        }
    }));

    const InfoText = styled(Typography) (({ theme }) => ({
        fontSize: "20px",
        fontWeight: 400,
        marginRight: "auto",
        marginTop: '10px',
        marginBottom: '10px',
        width: "100%",
        color: '#717070',
        padding: '8px',
        [theme.breakpoints.down('sm')]: {
            fontSize: "15px",
        }
    }));

    return (

        <Grid container spacing={{ xs: 0, sm: 0, md: 0 }}
              style={{backgroundColor: '#E9C7C4'}}

        >
            <Grid container xs={12} sm={16} md={1}
                  sx={{
                      order: {xs: 4, sm: 4, md: 3},
                  }}
            >
            </Grid>
            <Grid container xs={12} sm={16} md={10}
                  sx={{
                      order: {xs: 4, sm: 4, md: 3},
                  }}
            >
                <TextNIKO style={{width: '100%'}}>
                    FAQ
                </TextNIKO>
                <Accordion style={{borderRadius: "15px", margin: '10px'}}>
                    <AccordionSummary
                        expandIcon={<img src={greyDownArrow}/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <InfoText>ВОПРОСИК ВОПРОСИК ВОПРОСИК</InfoText>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{borderRadius: "15px", margin: '10px'}}>
                    <AccordionSummary
                        expandIcon={<img src={greyDownArrow}/>}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <InfoText>ВОПРОСИК ВОПРОСИК ВОПРОСИК</InfoText>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{borderRadius: "15px", margin: '10px'}}>
                    <AccordionSummary
                        expandIcon={<img src={greyDownArrow}/>}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <InfoText>ВОПРОСИК ВОПРОСИК ВОПРОСИК</InfoText>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid container xs={12} sm={16} md={1}
                  sx={{
                      order: {xs: 4, sm: 4, md: 3},
                  }}
            >
            </Grid>
        </Grid>
    )
}

export default Cakes;