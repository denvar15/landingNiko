import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
      backgroundColor: '#E9C7C4',
      color: 'white'
    }}
    >
      <StackColumn>
        <FooterTitle text={'АДРЕС'} />
        <FooterLink 
        text={'15th Louis St, london 92382, eng'} 
        />
        <FooterLink 
        text={'25 999-345-10800'} 
        />
        <FooterLink 
        text={'info@niko.com'}
        />
      </StackColumn>
      
      <StackColumn>
        <FooterTitle text={'НАШИ СЕРВИСЫ'} />
        <FooterLink text={'МАРКЕТПЛЕЙС'} />
        <FooterLink text={'AI ГЕНЕРАЦИЯ'} />
        <FooterLink text={'ПАРТНЁРСКАЯ ПРОГРАММА'} />
      </StackColumn>
      <StackColumn>
        <FooterTitle text={'НАША КОМПАНИЯ'} />
        <FooterLink text={'ОТЧЁТЫ'} />
        <FooterLink text={'КОНТАКТЫ'} />
        <FooterLink text={'КАРЬЕРА'} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'hBSales'} />
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
          <Link href="#" variant="body2" 
          sx={{
            color: 'white',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <TelegramIcon />
          </Link> 
          <Link href="#"variant="body2" 
          sx={{
            color: 'white',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <WhatsAppIcon />
          </Link> 
        </Stack>
        <Typography 
        variant='caption'
        component='p' 
        >
          &copy; 2024 NIKO
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer