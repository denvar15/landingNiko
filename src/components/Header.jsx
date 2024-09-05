import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
//img
import cakeImg1 from '../assets/kandinsky-download-1722457353202 1.png'
import cakeImg2 from '../assets/kandinsky-download-1722630604165 1.png'
import overlay from '../assets/Group 104.png'
import vector from '../assets/Vector.png'

const Header = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        marginTop: "-50px",
        display: 'flex',
        height: "570px",
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(0),
        paddingTop: theme.spacing(0),
        // cor de fundo
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        position: "absolute",
        marginTop: "310px",
        width: "100%",
        textAlign: 'center',
        zIndex: "1",
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            marginTop: "350px",
        }
    }));

    const TextNIKO = styled(Typography) (({ theme }) => ({
        fontWeight: 700,
        fontSize: "220px",
        color: '#fff',
        fontFamily: "GirloSP",
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.down('md')]: {
            fontWeight: 700,
            fontSize: "160px",
        },
        [theme.breakpoints.down('sm')]: {
            fontWeight: 700,
            fontSize: "20vw",
        }
    }));


  return  (
      <div>
          {/*  Box text  */}
          <BoxText
              component='section'
          >
              <TextNIKO>
                  NIKO
              </TextNIKO>
          </BoxText>
          <CustomBox component='header'>
              <img
                  src={overlay}
                  alt="headerImg1"
                  style={{
                      position: "absolute",
                      width: "100vw",
                      height: "640px",
                      marginTop: "-70px",
                      zIndex: "0"
                  }}
              />
              <Box sx={theme => ({
                  zIndex: "-1",
                  [theme.breakpoints.down('lg')]:{
                      flex: '1',
                      alignSelf: 'center',
                      height: "570px",
                  },
                  [theme.breakpoints.up('lg')]:{
                      flex: '2',
                      alignSelf: 'flex-end',
                      height: "642px",
                  },
              })}
              >
                  <img
                      src={cakeImg1}
                      alt="headerImg1"
                      style={{
                          height: "100%",
                          width: "100%",
                          marginBottom: -15,
                      }}
                  />
              </Box>
              <Box sx={theme => ({
                  position: "absolute",
                  marginTop: "150px",
                  zIndex: "0",
                  [theme.breakpoints.down('md')]:{
                      marginTop: "80px",
                      marginRight: "-50vw",
                  },
                  [theme.breakpoints.up('md')]:{
                      marginTop: "90px",
                      marginRight: "-75vw",
                  },
              })}
              >
                  <img
                      src={vector}
                      alt="headerImg1"
                  />
              </Box>
              <Box sx={theme => ({
                  [theme.breakpoints.down('lg')]:{
                      flex: '1',
                      paddingTop: '0px',
                      display: 'none',
                      alignSelf: 'center',
                      height: "595px",
                  },
                  [theme.breakpoints.up('lg')]:{
                      flex: '2',
                      alignSelf: 'flex-end',
                      height: "642px",
                  },
              })}
              >
                  <img
                      src={cakeImg2}
                      alt="headerImg2"
                      style={{
                          height: "100%",
                          width: "50vw",
                          marginBottom: -15,
                      }}
                  />
              </Box>
          </CustomBox>
      </div>
    )
}

export default Header