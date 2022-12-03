import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CalendarRow, CalendarContainer, TextCenter, Bold} from "./calendar.styled";


function CalenderDate() {
  const [date, setDate] = useState(new Date());

  return (
    <CalendarContainer component="div">
      <CalendarRow component="div">
        <Calendar onChange={setDate} value={date} />
      </CalendarRow>
      <TextCenter as="p">
        <Bold component="span">Selected Date:</Bold>{' '}
        {date.toDateString()}
      </TextCenter>
    </CalendarContainer>
  );
}

export default CalenderDate;
