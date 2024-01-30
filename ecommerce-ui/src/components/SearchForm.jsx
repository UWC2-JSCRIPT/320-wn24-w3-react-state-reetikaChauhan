import { useState } from 'react'
import '../App.css'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns';
function SearchForm(){
    const [openCalendar, setopenCalendar] = useState(false)
    const [date,setDate] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      })
    const handleChange = (ranges) =>{
        setDate(ranges.selection)
    }
    const handleClick = () =>{setopenCalendar((prev) =>!prev)}

    return(
        <>
        <div className='calendar-input'>
            <form >
                <input
                className='input-field'
                id="booking-input"
                type="text"
                onClick={handleClick}
                value = {
                    `${format(date.startDate,'MMM.dd,yyyy')} to ${format(date.endDate,'MMM.dd,yyyy')} `
                }
                />
                <button className='book-rental' type="submit">Book Rental</button>
            </form>
       { openCalendar && <DateRangePicker
        className='data-range'
        ranges={[date]}
        onChange={handleChange}
        minDate={new Date()}
        />}
        </div>
        </>
    )
}
export default SearchForm