import React, { useState } from 'react';
function Calendar() {
    const events = [
      { day: 'Monday', startTime: '09:00', endTime: '10:30', title: 'DÉVELOPPEMENT WEB', color: 'bg-blue-200' },
      { day: 'Tuesday', startTime: '10:00', endTime: '11:30', title: 'Basic à rendre', color: 'bg-green-200' },
      { day: 'Wednesday', startTime: '08:00', endTime: '09:00', title: 'Défi 2', color: 'bg-red-200' },
      { day: 'Thursday', startTime: '10:00', endTime: '11:30', title: 'Social Media', color: 'bg-purple-200' },
      { day: 'Friday', startTime: '09:00', endTime: '10:30', title: 'DÉVELOPPEMENT WEB', color: 'bg-blue-200' },
    ];
  
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const times = Array.from({ length: 16 }, (_, index) => {
      const hour = 8 + Math.floor(index / 2);
      const minutes = index % 2 === 0 ? '00' : '30';
      return `${hour}:${minutes}`;
    });
  
    const timeToRow = (time) => {
      const [hour, minute] = time.split(':').map(Number);
      return (hour - 8) * 2 + (minute === 30 ? 2 : 1);
    };
  
    return (
      <div className="p-4">
        <div className="grid grid-cols-8 gap-0">
          {/* First empty corner block */}
          <div className="border"></div>
  
          {/* Days of the week */}
          {days.map((day, index) => (
            <div key={index} className="border text-center p-2 bg-blue-100 font-bold">
              {day}
            </div>
          ))}
  
          {/* Time column */}
          {times.map((time, index) => (
            <div key={index} className="border p-2 text-right font-bold bg-blue-300">
              {time}
            </div>
          ))}
  
          {/* Calendar grid */}
          {days.map((day, dayIndex) => (
            <div key={dayIndex} className="grid grid-rows-[repeat(16,_minmax(30px,_1fr))]">
              {times.map((_, timeIndex) => (
                <div key={timeIndex} className="border"></div>
              ))}
  
              {/* Render events on the calendar */}
              {events
                .filter((event) => event.day === day)
                .map((event, eventIndex) => {
                  const startRow = timeToRow(event.startTime);
                  const endRow = timeToRow(event.endTime);
                  return (
                    <div
                      key={eventIndex}
                      className={`${event.color} row-start-${startRow} row-end-${endRow} border rounded-lg p-2 m-1 text-center text-sm font-bold`}
                    >
                      {event.title}
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  function AgendaInterface() {
    const [view, setView] = useState('emploi'); // Manage the schedule view (emploi) or canceled courses
  
    return (
      <div className="p-6">
        {/* Buttons to toggle views */}
        <div className="flex space-x-4 mb-4">
          <button
            className={`bg-blue-500 text-white py-2 px-4 rounded ${view === 'emploi' ? 'opacity-50' : ''}`}
            onClick={() => setView('emploi')}
          >
            Emploi
          </button>
          <button
            className={`bg-blue-500 text-white py-2 px-4 rounded ${view === 'annuler' ? 'opacity-50' : ''}`}
            onClick={() => setView('annuler')}
          >
            Annuler
          </button>
        </div>
  
        {/* Conditional rendering based on view */}
        {view === 'emploi' ? (
          <div className=" p-6 rounded-lg mb-16">
            {/* Replace static text with the calendar component */}
            <Calendar />
          </div>
        ) : (
          <div className=" p-6 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <img src="./src/delet.png" alt="Cours annulé" className="mx-auto mb-4 h-5 w-5" />
              <p>Il n'y a pas de cours annulé cette semaine</p>
            </div>
          </div>
        )}
      </div>
    );
  }  
  export default AgendaInterface;
