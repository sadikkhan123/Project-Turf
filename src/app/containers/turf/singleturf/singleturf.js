import { Card, CardMedia } from '@mui/material';
import BookButton from '../bookturf/bookTurf'
import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useParams } from 'react-router-dom';

const Singleturf = () => {
const {id} =useParams();
  const a = ["6am-7am", "7am-8am", "8am-9am", "9am-10am", "10am-11am", "11am-12pm", "12pm-1pm", "1pm-2pm", "2pm-3pm", "3pm-4pm", "4pm-5pm", "5pm-6pm", "6pm-7pm", "7pm-8pm", "8pm-9pm", "9pm-10pm"]

  const [values, setValues] = React.useState([]);
  const [date, setDate] = React.useState(dayjs(''));
  const [view, setView] = React.useState(false);
  const updateValues = (e) => {

    if (values.includes(e)) {
      setValues(values.filter((element) => {
        return element !== e
      }))
    } else {
      setValues([...values, e])
    }

  }
  const bookedSlots = ["8am-9am", "9am-10am", "10am-11am"]
  const checkIfBooked = (val) => {
    return bookedSlots.includes(val)
  }


  // console.log(values)
  // console.log(date)
  return (
    <div>


      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: { xs: 140, sm: 200 } }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        /></Card>

      <h1>CITY LAWNS TURF {id} </h1>

      <p> Address: Shivtej Nagar, Bibwewadi, Pune, Maharashtra 411037 </p>
      <p>Hours:
        Closes soon ⋅ 11:30 pm ⋅ Opens 6 am Wed <br />
        Phone: #########</p>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Set date"
            value={dayjs(date)}
            onChange={(newDate) => {
              setDate(newDate.format('DD-MM-YYYY'));setView(true);

            }
          }
            required="true"
            format="DD-MM-YYYY"
            //  value={["year", "month", "day"]}
            disablePast
          />
        </LocalizationProvider>
      </div >
<div style={view ? { display: 'block' } : { display: 'none' }} >
      {a.map((a1) => (<BookButton data={a1} updateValues={updateValues} disabled={checkIfBooked(a1)} />))}
      </div>
    </div>

  )
}

export default Singleturf