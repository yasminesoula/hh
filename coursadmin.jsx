import React, { useState } from 'react';

// Composant CourseCard pour afficher les informations sur chaque cours avec une image
function CourseCard({ image, title, hours, completedHours, onSelect, selected }) {
  return (
    <div
      onClick={onSelect}
      className={`max-w-[250px] rounded-lg overflow-hidden bg-white cursor-pointer ${
        selected ? 'border-4 border-blue-500' : ''
      }`}
    >
      <img className="w-full h-[300px] object-cover" src={image} alt={title} />
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-blue-700 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{hours} Certifiées</p>
        <p className="text-sm text-gray-600">{completedHours} Déjà achevées</p>
      </div>
    </div>
  );
}

function CoursAd() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      image: './src/yass.jpg',
      title: 'DÉVELOPPEMENT WEB',
      hours: '40H',
      completedHours: '20H',
    },
    {
      id: 2,
      image: './src/as.jpg',
      title: 'REACT JS',
      hours: '48H',
      completedHours: 'Déjà achevé',
    },
    {
      id: 3,
      image: './src/ya.jpg',
      title: 'SOCIAL MEDIA',
      hours: '40H',
      completedHours: 'Déjà achevé',
    },
  ]);

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newHours, setNewHours] = useState('');
  const [newCompletedHours, setNewCompletedHours] = useState('');
  const [newImage, setNewImage] = useState('');

  // Fonction pour sélectionner un cours
  const handleSelectCourse = (id) => {
    if (selectedCourses.includes(id)) {
      setSelectedCourses(selectedCourses.filter((courseId) => courseId !== id));
    } else {
      setSelectedCourses([...selectedCourses, id]);
    }
  };

  // Fonction pour supprimer les cours sélectionnés
  const handleDeleteSelectedCourses = () => {
    const remainingCourses = courses.filter((course) => !selectedCourses.includes(course.id));
    setCourses(remainingCourses);
    setSelectedCourses([]); // Réinitialise la sélection après suppression
  };

  // Fonction pour ajouter un nouveau cours
  const handleAddCourse = () => {
    if (newTitle && newHours && newCompletedHours && newImage) {
      const newCourse = {
        id: courses.length + 1,
        title: newTitle,
        hours: newHours,
        completedHours: newCompletedHours,
        image: newImage,
      };
      setCourses([...courses, newCourse]);
      setShowAddModal(false); // Ferme le modal après ajout
      setNewTitle('');
      setNewHours('');
      setNewCompletedHours('');
      setNewImage('');
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  return (
    <div className="container mx-auto py-12">
      {/* Boutons d'ajout et de suppression */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Nos Cours</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            + Ajouter un cours
          </button>
          <button
            onClick={handleDeleteSelectedCourses}
            className={`bg-red-500 text-white px-6 py-2 rounded ${
              selectedCourses.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
            }`}
            disabled={selectedCourses.length === 0}
          >
            Supprimer les cours sélectionnés
          </button>
        </div>
      </div>

      {/* Section pour les cartes de cours sous forme de grille */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            image={course.image}
            title={course.title}
            hours={course.hours}
            completedHours={course.completedHours}
            selected={selectedCourses.includes(course.id)}
            onSelect={() => handleSelectCourse(course.id)}
          />
        ))}
      </div>

      {/* Modal pour ajouter un nouveau cours */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-[rgb(3,17,54)] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Ajouter un nouveau cours</h2>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="border border-gray-300 p-2 w-full mb-4"
              placeholder="Titre du cours"
            />
             <input
              type="text"
              className="border border-gray-300 p-2 w-full mb-4"
              placeholder="identifiant  "
            />
            <input
              type="text"
              value={newHours}
              onChange={(e) => setNewHours(e.target.value)}
              className="border border-gray-300 p-2 w-full mb-4"
              placeholder="Nombre d'heures"
            />
            <input
              type="text"
              value={newCompletedHours}
              onChange={(e) => setNewCompletedHours(e.target.value)}
              className="border border-gray-300 p-2 w-full mb-4"
              placeholder="Heures déjà achevées"
            />
            <input
              type="text"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
              className="border border-gray-300 p-2 w-full mb-4"
              placeholder="URL de l'image"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowAddModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Annuler
              </button>
              <button
                onClick={handleAddCourse}
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

export default CoursAd;
