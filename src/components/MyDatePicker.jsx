import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          marginTop:13,
          color: 'Black', // Change label color globally
          height:18,
        },
      },
    },
  },
});

function MyDatePicker() {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select Date"
        value={selectedDate}
        autoFocus={true}
        defaultValue={new Date()}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
      
        className='w-[99.7%] border-white bg-white h-fit '
        renderInput={(params) => <p>{params}</p>}
      />
    </LocalizationProvider>
    </ThemeProvider>
    
  );
}

export default MyDatePicker;
