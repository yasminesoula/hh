import React from 'react';

// Composant ProgressCard pour un bloc individuel
function ProgressCard({ courseId, courseName, status, progress }) {
  return (
    <div className="bg-cyan-600 text-white rounded-lg shadow-lg p-4 max-w-sm mx-auto">
      {/* Informations */}
      <div className="mb-4 space-y-2">
        <div className="bg-white text-purple-600 rounded-lg p-2">
          <span className="text-sm">{courseId}</span>
        </div>
        <div className="bg-white text-purple-600 rounded-lg p-2">
          <span className="text-sm">{courseName}</span>
        </div>
        <div className="bg-white text-blue-500 rounded-lg p-2">
          <span className="text-sm">{status}</span>
        </div>
      </div>

      {/* Diagramme en demi-cercle */}
      <div className="flex justify-center items-center mt-4">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-8 border-black border-b-transparent"></div>
          <span className="absolute inset-0 flex items-center justify-center text-black text-xl font-bold">
            {progress}
          </span>
        </div>
      </div>
    </div>
  );
}

// Composant HomePage pour afficher trois blocs de ProgressCard
function StudentNote() {
  const cards = [
    {
      courseId: '2230241',
      courseName: 'HTML',
      status: 'Homework submissions',
      progress: '73.5',
    },
    {
      courseId: '2230242',
      courseName: 'CSS',
      status: 'Homework submissions',
      progress: '80.0',
    },
    {
      courseId: '2230243',
      courseName: 'JavaScript',
      status: 'Homework submissions',
      progress: '90.0',
    },
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-center mb-8">Course Progress</h1>
      
      {/* Grille pour afficher trois cartes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <ProgressCard
            key={index}
            courseId={card.courseId}
            courseName={card.courseName}
            status={card.status}
            progress={card.progress}
          />
        ))}
      </div>
    </div>
  );
}


export default StudentNote;