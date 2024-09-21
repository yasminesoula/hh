import React, { useState } from 'react';

// Composant CourseCard pour afficher les informations sur chaque cours avec une image
function CourseCard({ title, details, price, image, onSelect, selected }) {
  return (
    <div
      onClick={onSelect}
      className={`bg-white shadow-lg rounded-lg p-4 m-2 max-w-sm cursor-pointer ${
        selected ? 'border-4 border-blue-500' : ''
      }`}
    >
      <img src={image} alt={title} className="rounded-lg mb-4 w-full object-cover h-52" />
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <ul className="mb-4 text-gray-600">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <p className="text-gray-700 font-bold mb-4">Pricing: {price}</p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Download Brochure</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Buy Now</button>
      </div>
    </div>
  );
}

// Composant HomePage pour afficher la page complète avec les cours et la section Opus Lab
function HomePageAd() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'DÉVELOPPEMENT WEB',
      details: [
        '40H certifiées',
        '27 hands-on courses',
        'NSE certification',
        '3+ Year Placement Assistance',
        'Skills: Financial Statement Analysis, Modeling, Accounting, Budgeting, Forecasting',
        'Career paths: Investment Banking, Private Equity, FP&A, Corp Dev, and more',
      ],
      price: 'Rs 23,000',
      image: './src/tw.webp', // Remplace par une image réelle
    },
    {
      id: 2,
      title: 'GRAPHIC DESIGN',
      details: [
        '40H certifiées',
        '27 hands-on courses',
        'NSE certification',
        '3+ Year Placement Assistance',
        'Skills: Financial Statement Analysis, Modeling, Accounting, Budgeting, Forecasting',
        'Career paths: Investment Banking, Private Equity, FP&A, Corp Dev, and more',
      ],
      price: 'Rs 23,000',
      image: './src/taw.webp', // Remplace par une image réelle
    },
    {
      id: 3,
      title: 'REACT JS',
      details: [
        '40H certifiées',
        '27 hands-on courses',
        'NSE certification',
        '3+ Year Placement Assistance',
        'Skills: Financial Statement Analysis, Modeling, Accounting, Budgeting, Forecasting',
        'Career paths: Investment Banking, Private Equity, FP&A, Corp Dev, and more',
      ],
      price: 'Rs 23,000',
      image: './src/taaw.webp', // Remplace par une image réelle
    },
  ]);

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDetails, setNewDetails] = useState('');
  const [newPrice, setNewPrice] = useState('');
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
    if (newTitle && newDetails && newPrice && newImage) {
      const newCourse = {
        id: courses.length + 1,
        title: newTitle,
        details: newDetails.split(','),
        price: newPrice,
        image: newImage,
      };
      setCourses([...courses, newCourse]);
      setShowAddModal(false); // Ferme le modal après ajout
      setNewTitle('');
      setNewDetails('');
      setNewPrice('');
      setNewImage('');
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  return (
    <div className="container mx-auto px-6 py-10">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            details={course.details}
            price={course.price}
            image={course.image}
            selected={selectedCourses.includes(course.id)}
            onSelect={() => handleSelectCourse(course.id)}
          />
        ))}
      </div>

      {/* Modal pour ajouter un nouveau cours */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Ajouter un nouveau cours</h2>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="border border-gray-300 p-2 w-full mb-4"
              placeholder="Titre du cours"
            />
            <input
              type="text"
              value={newDetails}
              onChange={(e) => setNewDetails(e.target.value)}
              className="border border-gray-300 p-2 w-full mb-4"
              placeholder="Détails (séparés par des virgules)"
            />
            <input
              type="text"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
              className="border border-gray-300 p-2 w-full mb-4"
              placeholder="Prix"
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

      {/* Section Opus Lab avec une image en arrière-plan */}
      <div className="text-white mt-12 bg-[#031136]">
        <img src="./src/yasmine.png" alt="Opus Lab" className="w-full h-96 object-cover" />
      </div>
    </div>
  );
}



export default HomePageAd;
