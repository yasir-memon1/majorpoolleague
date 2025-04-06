import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date('2025-05-05'));
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const [poolClass, setPoolClass] = useState(null);
  const [league, setLeague] = useState(null);
  const [division, setDivision] = useState(null)

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const handlePrevDay = () => {
    const prevDate = new Date(selectedDate);
    prevDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(prevDate);
    onDateChange(prevDate);
  };

  const handleNextDay = () => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(nextDate);
    onDateChange(nextDate);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    onDateChange(date);
    setIsCalendarOpen(false);
  };

  return (
    <div className="flex justify-center items-center gap-6 w-max relative">
      <button
        className="text-lg font-semibold text-gray-400 hover:text-blue transition-colors w-10 h-10 rounded-full hover:bg-gray-100"
        onClick={handlePrevDay}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <button
        className="text-base flex flex-col justify-center items-center font-semibold text-gray-400 hover:text-blue transition-colors px-4 py-2 rounded-md hover:bg-gray-100"
        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
      >
        <span className='leading-3 text-sm'>
        {formatDate(selectedDate).split(",")[0]}
        </span>
        <span>
        {formatDate(selectedDate).split(", ")[1]}
        </span>

        
      </button>

      <button
        className="text-lg font-semibold text-gray-400 hover:text-blue transition-colors w-10 h-10 rounded-full hover:bg-gray-100"
        onClick={handleNextDay}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      

      {isCalendarOpen && (
  <div className="absolute top-14 left-1/2 -translate-x-1/2 z-50">
    <DatePicker
      selected={selectedDate}
      onSelect={handleDateSelect} 
      onChange={handleDateSelect}      
      inline
      calendarClassName="bg-white text-white border border-gray-300 rounded-lg shadow-lg"
      dayClassName={(date) =>
        `text-gray-300 hover:bg-blue hover:text-white transition-colors rounded-full p-1 ${
          date.toDateString() === selectedDate.toDateString()
            ? 'bg-blue text-white'
            : ''
        }`
      }

      showMonthDropdown
      showYearDropdown
      dropdownMode="select" 
      yearDropdownItemNumber={15} 
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        changeMonth,
        changeYear,
      }) => (
        <div className="flex flex-col gap-2 px-2 py-1 bg-white rounded-t-lg">
          <div className="flex justify-between items-center">
            <button
              onClick={decreaseMonth}
              className="text-gray-400 hover:text-blue p-1"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <span className="text-sm font-semibold text-blue">
              {date.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
            </span>
            <button
              onClick={increaseMonth}
              className="text-gray-400 hover:text-blue p-1"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className="flex justify-between items-center gap-2">
            <select
              value={date.getMonth()}
              onChange={(e) => changeMonth(parseInt(e.target.value))}
              className="w-1/2 bg-white text-gray-900 border border-gray-600 rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue"
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i}>
                  {new Date(0, i).toLocaleString('en-US', { month: 'long' })}
                </option>
              ))}
            </select>
            <select
              value={date.getFullYear()}
              onChange={(e) => changeYear(parseInt(e.target.value))}
              className="w-1/2 bg-white text-gray-900 border border-gray-600 rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue"
            >
              {Array.from({ length: 31 }, (_, i) => {
                const year = new Date().getFullYear() - 15 + i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
            
          </div>
        </div>
      )}
    />
  </div>
)}
      
    </div>
  );
};

export default CustomDatePicker;