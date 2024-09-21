import React, { useState } from 'react';

// The Calendar component with Add and Delete functionality for events
function Calendar() { 
  const [events, setEvents] = useState([
    { id: 1, day: 'Monday', startTime: '09:00', endTime: '10:30', title: 'DÉVELOPPEMENT WEB', color: 'bg-blue-200' },
    { id: 2, day: 'Tuesday', startTime: '10:00', endTime: '11:30', title: 'Basic à rendre', color: 'bg-green-200' },
    { id: 3, day: 'Wednesday', startTime: '08:00', endTime: '09:00', title: 'Défi 2', color: 'bg-red-200' },
    { id: 4, day: 'Thursday', startTime: '10:00', endTime: '11:30', title: 'Social Media', color: 'bg-purple-200' },
    { id: 5, day: 'Friday', startTime: '09:00', endTime: '10:30', title: 'DÉVELOPPEMENT WEB', color: 'bg-blue-200' },
  ]);

  const [selectedEvents, setSelectedEvents] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    day: '',
    startTime: '',
    endTime: '',
    title: '',
    color: '', // Default color
  });

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

  // Function to handle event selection
  const handleSelectEvent = (id) => {
    if (selectedEvents.includes(id)) {
      setSelectedEvents(selectedEvents.filter((eventId) => eventId !== id));
    } else {
      setSelectedEvents([...selectedEvents, id]);
    }
  };

  // Function to delete selected events
  const handleDeleteSelectedEvents = () => {
    const remainingEvents = events.filter((event) => !selectedEvents.includes(event.id));
    setEvents(remainingEvents);
    setSelectedEvents([]); // Clear selected events after deletion
  };

  // Function to handle adding a new event
  const handleAddEvent = () => {
    if (newEvent.day && newEvent.startTime && newEvent.endTime && newEvent.title) {
      const newEventId = events.length + 1;
      setEvents([...events, { id: newEventId, ...newEvent }]);
      setNewEvent({ day: '', startTime: '', endTime: '', title: '', color: 'bg-white' });
      setShowAddModal(false); // Close modal after adding event
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="p-4 ">
      <div className="flex justify-between mb-4">
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          + Add Event
        </button>

        <button
          onClick={handleDeleteSelectedEvents}
          className={`bg-red-500 text-white px-4 py-2 rounded ${selectedEvents.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
          disabled={selectedEvents.length === 0}
        >
          Delete Selected
        </button>
      </div>

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
          <div key={index} className="border p-2 text-right font-bold bg-blue-50">
            {time}
          </div>
        ))}

        {/* Calendar grid */}
        {days.map((day, dayIndex) => (
          <div key={dayIndex} className="grid grid-rows-[repeat(16,_minmax(30px,_1fr))] bg-slate-800">
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
                    className={`${event.color} row-start-${startRow} row-end-${endRow} border rounded-lg p-2 m-1 text-center text-sm font-bold ${selectedEvents.includes(event.id) ? 'border-4 border-blue-500' : ''}`}
                    onClick={() => handleSelectEvent(event.id)}
                  >
                    {event.title}
                  </div>
                );
              })}
          </div>
        ))}
      </div>

      {/* Modal to add a new event */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-[rgb(3,17,54)] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Add New Event</h2>
            <input
              type="text"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              className="border border-gray-800 p-2 w-full mb-4"
              placeholder="Event Title"
            />
            <select
              value={newEvent.day}
              onChange={(e) => setNewEvent({ ...newEvent, day: e.target.value })}
              className="border border-gray-800 p-2 w-full mb-4"
            >
              <option value="">Select Day</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <input
              type="time"
              value={newEvent.startTime}
              onChange={(e) => setNewEvent({ ...newEvent, startTime: e.target.value })}
              className="border border-gray-800 p-2 w-full mb-4"
              placeholder="Start Time"
            />
            <input
              type="time"
              value={newEvent.endTime}
              onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
              className="border border-gray-800 p-2 w-full mb-4"
              placeholder="End Time"
            />
            <input
              type="text"
              className="border border-gray-800 p-2 w-full mb-4"
              placeholder="identifiant de la classe "
            />
            
            <div className="flex justify-end space-x-4">
              <button onClick={() => setShowAddModal(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
                Cancel
              </button>
              <button onClick={handleAddEvent} className="bg-blue-500 text-white px-4 py-2 rounded w-96">
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CanceledCourses() {
  const [canceledCourses, setCanceledCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCourse, setNewCourse] = useState('');

  // Handle selecting/deselecting courses
  const handleSelectCourse = (id) => {
    if (selectedCourses.includes(id)) {
      setSelectedCourses(selectedCourses.filter((courseId) => courseId !== id));
    } else {
      setSelectedCourses([...selectedCourses, id]);
    }
  };

  // Handle adding a new canceled course
  const handleAddCanceledCourse = () => {
    if (newCourse) {
      const newCourseId = canceledCourses.length + 1;
      setCanceledCourses([...canceledCourses, { id: newCourseId, title: newCourse }]);
      setNewCourse('');
      setShowAddModal(false);
    } else {
      alert('Please enter a course title.');
    }
  };

  // Handle deleting selected canceled courses
  const handleDeleteSelectedCourses = () => {
    const remainingCourses = canceledCourses.filter(
      (course) => !selectedCourses.includes(course.id)
    );
    setCanceledCourses(remainingCourses);
    setSelectedCourses([]);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          + Add Canceled Course
        </button>

        <button
          onClick={handleDeleteSelectedCourses}
          className={`bg-red-500 text-white px-4 py-2 rounded ${selectedCourses.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
          disabled={selectedCourses.length === 0}
        >
          Delete Selected
        </button>
      </div>

      {/* List of canceled courses */}
      <ul className="space-y-4">
        {canceledCourses.map((course) => (
          <li
            key={course.id}
            className={`p-4 bg-white rounded-lg shadow-lg cursor-pointer ${selectedCourses.includes(course.id) ? 'border-4 border-blue-500' : ''}`}
            onClick={() => handleSelectCourse(course.id)}
          >
            {course.title}
          </li>
        ))}
      </ul>

      {/* Modal to add a new canceled course */}
      {showAddModal && (
        <div className="fixed inset-0 bg-cyan-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Add New Canceled Course</h2>
            <input
              type="text"
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
              className="border border-gray-800 p-2 w-full mb-4"
              placeholder="Course Title"
            />
             <input
              type="text"
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
              className="border border-gray-800 p-2 w-full mb-4"
              placeholder="identifiant de la classe "
            />
            <div className="flex justify-end space-x-4">
              <button onClick={() => setShowAddModal(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
                Cancel
              </button>
              <button onClick={handleAddCanceledCourse} className="bg-blue-500 text-white px-4 py-2 rounded w-96">
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AgendaAd() {
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
          <Calendar />
        </div>
      ) : (
        <div className="bg-gray-200 p-6 rounded-lg">
          <CanceledCourses />
        </div>
      )}
    </div>
  );
}

export default AgendaAd;
