import React, { useState } from 'react';
import CustomDatePicker from '../Components/DatePicker';
import Dropdown from '../UI/Dropdown';
import PageHeader from '../UI/PageHeader';
import Page from '../UI/Page';

const games = [
  {
    id: 1,
    awayTeam: 'AZPL Phoenix Rookies',
    homeTeam: 'AZPL Tucson Rookies',
    time: '6:00 PM MST',
    status: 'Scheduled',
  },
  {
    id: 2,
    awayTeam: 'AZPL Mesa Rookies',
    homeTeam: 'AZPL Flagstaff Rookies',
    time: '7:00 PM MST',
    status: 'Scheduled',
  },
  {
    id: 3,
    awayTeam: 'AZPL Yuma Rookies',
    homeTeam: 'AZPL Prescott Rookies',
    time: '7:30 PM MST',
    status: 'Scheduled',
  },
];

const CalenderPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date('2025-05-05'));
    const [selectedClass, setSelectedClass] = useState(null)
    const [selectedLeague, setSelectedLeague] = useState(null)
    const [openDropdown, setOpenDropdown] = useState(null); 

    const handleToggle = (dropdownName) => {
        setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
      };
 
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log('Selected Date:', date); 
  };
  const handleClassChange = (value) => {
    if (openDropdown === 'Class') {
      setSelectedClass(value);
    } else if (openDropdown === 'Leagues') {
      setSelectedLeague(value);
    }
    setOpenDropdown(null); 
  };
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };
  return (
    <Page>
        <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900">
        <div className='flex flex-col w-full gap-4'>
            <PageHeader heading="Calendar of Events"/>
        <CustomDatePicker/>
        <div className='flex justify-start items-center gap-2'>
           <Dropdown onChange={handleClassChange} name="Class" values={['All', 'AZPL', 'AZPL Rookies']} isOpen={openDropdown === 'Class'}
        onToggle={() => handleToggle('Class')} selectedValue={selectedClass}/>
           <Dropdown onChange={handleClassChange} name="Leagues" values={['All', 'AZPL', 'AZPL Rookies']} isOpen={openDropdown === 'Leagues'}
        onToggle={() => handleToggle('Leagues')} selectedValue={selectedLeague}/>

        </div>
        </div>


        
    </div>
    <div className='w-screen bg-gray-100 py-12 flex justify-center items-center flex-col '>
        <div className='w-full max-w-7xl mb-5 text-lg font-semibold text-gray-600'><h3>{formatDate(selectedDate)}</h3></div>
        <div className='max-w-7xl w-full flex flex-col gap-5 font-semibold  mx-auto p-4 bg-white text-slate-900 border-[1px] rounded-sm border-gray-400'>
            <ul className='flex justify-center items-center lg:px-12'>
                <li className='flex-[2]'>Tournament 1</li>
                <li className='flex-[1] text-gray-500' >12:00 ET</li>
                <li className='text-gray-500'>Some Club</li>
            </ul>
            <ul className='flex justify-center items-center lg:px-12'>
                <li className='flex-[2]'>Tournament 1</li>
                <li className='flex-[1] text-gray-600' >12:00 ET</li>
                <li className='text-gray-500'>Some Club</li>
            </ul>
            <ul className='flex justify-center items-center lg:px-12'>
                <li className='flex-[2]'>Tournament 1</li>
                <li className='flex-[1] text-gray-500' >12:00 ET</li>
                <li className='text-gray-500'>Some Club</li>
            </ul>
            <ul className='flex justify-center items-center lg:px-12'>
                <li className='flex-[2]'>Tournament 1</li>
                <li className='flex-[1] text-gray-500' >12:00 ET</li>
                <li className='text-gray-500'>Some Club</li>
            </ul>
            <ul className='flex justify-center items-center lg:px-12'>
                <li className='flex-[2]'>Tournament 1</li>
                <li className='flex-[1] text-gray-500' >12:00 ET</li>
                <li className='text-gray-500'>Some Club</li>
            </ul>
            <ul className='flex justify-center items-center lg:px-12'>
                <li className='flex-[2]'>Tournament 1</li>
                <li className='flex-[1] text-gray-500' >12:00 ET</li>
                <li className='text-gray-500'>Some Club</li>
            </ul>
        </div>

    </div>
    </Page>
  );
};

export default CalenderPage;