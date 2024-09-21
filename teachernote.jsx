import React, { useState } from 'react';

function TeacherNoteInterface() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [notes, setNotes] = useState([
    { studentId: '2330241', course: 'HTML', grade: 73.5 },
    { studentId: '2330216', course: 'HTML', grade: 60.5 },
    { studentId: '2330244', course: 'HTML', grade: 100 },
    { studentId: '2330215', course: 'React JS', grade: 40.5 },
    { studentId: '2330275', course: 'React JS', grade: 80.5 },
    { studentId: '2330245', course: 'React JS', grade: 60.5 },
  ]);
  const [newStudentId, setNewStudentId] = useState('');
  const [newCourse, setNewCourse] = useState('');
  const [newGrade, setNewGrade] = useState('');

  const handleAddNoteClick = () => {
    setShowAddModal(true);
  };

  const handleConfirmClick = () => {
    if (newStudentId && newCourse && newGrade) {
      const newNote = {
        studentId: newStudentId,
        course: newCourse,
        grade: parseFloat(newGrade),
      };
      setNotes([...notes, newNote]);
      setShowAddModal(false);
      setNewStudentId('');
      setNewCourse('');
      setNewGrade('');
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  return (
    <div className="pb-20">
      <h1 className="text-4xl font-bold mb-6 text-center">Notes des étudiants</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {notes.map((note, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 mb-2">ID Étudiant: {note.studentId}</p>
            <p className="text-gray-600 mb-2">Cours: {note.course}</p>
            
            {/* Diagramme en demi-cercle */}
            <div className="flex justify-center items-center mt-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-8 border-black border-b-transparent"></div>
                <span className="absolute inset-0 flex items-center justify-center text-black text-xl font-bold">
                  {note.grade}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton pour ajouter une nouvelle note */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleAddNoteClick}
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Ajouter une note
        </button>
      </div>

      {/* Modal pour ajouter une nouvelle note */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Ajouter une nouvelle note</h2>
            <input
              type="text"
              value={newStudentId}
              onChange={(e) => setNewStudentId(e.target.value)}
              className="border border-gray-300 p-2 w-full mb-4"
              placeholder="Ajouter l'identifiant du destinataire"
            />
            <input
              type="text"
              value={newCourse}
              onChange={(e) => setNewCourse(e.target.value)}
              className="border border-gray-300 p-2 w-full mb-4"
              placeholder="Ajouter le nom du cours"
            />
            <input
              type="text"
              value={newGrade}
              onChange={(e) => setNewGrade(e.target.value)}
              className="border border-gray-300 p-2 w-full mb-4"
              placeholder="Ajouter la note obtenue"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowAddModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Annuler
              </button>
              <button
                onClick={handleConfirmClick}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeacherNoteInterface;
