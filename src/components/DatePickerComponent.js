import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Box, FormLabel } from '@chakra-ui/react';

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Box>
      <FormLabel htmlFor="date-picker">Select Date</FormLabel>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        id="date-picker"
        dateFormat="MMMM d, yyyy"
      />
    </Box>
  );
};

export default DatePickerComponent;
