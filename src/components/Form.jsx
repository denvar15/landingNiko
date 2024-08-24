import * as React from 'react';
import { FormControl } from '@mui/material';
import { useFormControl} from '@mui/material/FormControl';
import { Input, inputClasses } from '@mui/material';
import { styled } from '@mui/material';
import leftAr from "../assets/leftAr.png";

export default function BasicFormControl() {
    return (
        <div style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: '20px',}}>
            <FormControl
                style={{marginRight: '20px',}}
                defaultValue="" required>
                <StyledInput placeholder="E-MAIL" />
            </FormControl>
            <img src={leftAr} alt=""
                 style={{height: '40px', transform: 'rotate(180deg)',}}
            />
        </div>
    );
}

const StyledInput = styled(Input)(
    ({ theme }) => `
    &:before {
      border-bottom: 0px;
    }
    &:after {
      border-bottom: 0px;
    }
  .${inputClasses.input} {
    width: 220px;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    
    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      outline: 0;
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  }
`,
);

const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};