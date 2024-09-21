import React, { useState } from 'react';

function TeacherArchivedCoursesInterface() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [recipientId, setRecipientId] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [archivedCourses, setArchivedCourses] = useState([]);  // Liste des cours archivés

  const handleAddCourseClick = () => {
    setShowAddModal(true);
  };

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleConfirmClick = () => {
    if (courseName && pdfFile) {
      // Ajouter un nouveau cours à la liste des cours archivés
      setArchivedCourses((prevCourses) => [
        ...prevCourses,
        { courseName, pdfFile, recipientId },
      ]);

      // Réinitialiser les champs et fermer la modale
      setCourseName('');
      setRecipientId('');
      setPdfFile(null);
      setShowAddModal(false);
    } else {
      alert('Veuillez remplir tous les champs');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Cours archivés</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Affichage dynamique des fichiers PDF archivés */}
        {archivedCourses.map((course, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img src="pdf-icon-url" alt={`${course.courseName} Cours`} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">{course.courseName}</h3>
            <button className="bg-red-500 text-white px-4 py-2 rounded">Exporter</button>
          </div>
        ))}
      </div>

      {/* Bouton pour ajouter un nouveau fichier PDF */}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleAddCourseClick}
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Ajouter vos cours
        </button>
      </div>

      {/* Modal pour ajouter un nouveau fichier PDF */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Ajouter un nouveau cours</h2>
            <input
              type="file"
              onChange={handleFileChange}
              className="border border-gray-300 p-2 w-full mb-4"
              placeholder="Sélectionner un fichier"
            />
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="border border-gray-300 p-2 w-full mb-4"
              placeholder="Ajouter le nom du cours"
            />
            <input
              type="text"
              value={recipientId}
              onChange={(e) => setRecipientId(e.target.value)}
              className="border border-gray-300 p-2 w-full mb-4"
              placeholder="Ajouter l'identifiant des destinataires"
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

export default TeacherArchivedCoursesInterface;