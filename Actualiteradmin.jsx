import React, { useState } from 'react';
function ActualitesInterfaceAd() {
  const [newsItems, setNewsItems] = useState([
    {
      id: 1,
      title: "OUVERTURE DES INSCRIPTIONS POUR LA SESSION DE JANVIER 2024",
      image: "./src/act2.jpg",
      description: "Les inscriptions pour la session de formation de janvier 2024 sont désormais ouvertes...",
    },
    {
      id: 2,
      title: "WEBINAIRE SUR LES TENDANCES TECHNOLOGIQUES DE 2024",
      image: "./src/act3.jpg",
      description: "Rejoignez-nous pour un webinaire exclusif sur les dernières tendances technologiques...",
    },
    {
      id: 3,
      title: "TOUS LES CHEMINS MÈNENT À OPUS LAB",
      image: "./src/act1.jpg",
      description: "NB: Aide pour vous demain lors de la journée mondiale sans voiture...",
    },
    {
      id: 4,
      title: "RENCONTRE AVEC DES PROFESSIONNELS DE L'INDUSTRIE DU NUMÉRIQUE",
      image: "./src/act4.jpg",
      description: "Le mois prochain, le centre organise une rencontre avec des professionnels du secteur numérique...",
    },
    {
      id: 5,
      title: "JOURNÉE PORTES OUVERTES",
      image: "./src/act.jpg",
      description: "Le centre de formation organise une journée portes ouvertes le samedi 12 novembre 2024...",
    },
    {
      id: 6,
      title: "ATELIERS PRATIQUES SUR LE DÉVELOPPEMENT D'APPLICATIONS MOBILES",
      image: "./src/act5.jpg",
      description: "Le centre de formation propose une série d'ateliers pratiques sur le développement d'applications mobiles...",
    },
  ]);

  const [selectedItems, setSelectedItems] = useState([]); // Pour stocker les éléments sélectionnés
  const [showAddModal, setShowAddModal] = useState(false); // Pour gérer l'affichage du modal d'ajout
  const [newTitle, setNewTitle] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newDescription, setNewDescription] = useState('');

  // Fonction pour sélectionner un élément
  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  // Fonction pour supprimer les éléments sélectionnés
  const handleDeleteItems = () => {
    const remainingItems = newsItems.filter((item) => !selectedItems.includes(item.id));
    setNewsItems(remainingItems);
    setSelectedItems([]); // Réinitialise la sélection après suppression
  };

  // Fonction pour ajouter un nouvel élément
  const handleAddItem = () => {
    if (newTitle && newImage && newDescription) {
      const newItem = {
        id: newsItems.length + 1,
        title: newTitle,
        image: newImage,
        description: newDescription,
      };
      setNewsItems([...newsItems, newItem]);
      setShowAddModal(false); // Ferme le modal après ajout
      setNewTitle('');
      setNewImage('');
      setNewDescription('');
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  return (
    <div className="container mx-auto px-6 py-10 mb-11">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Actualités</h1>

        {/* Boutons d'ajout et de suppression */}
        <div className="flex space-x-4">
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-500 text-white px-6 py-2 rounded"
          >
            + Ajouter une actualité
          </button>

          <button
            onClick={handleDeleteItems}
            className={`bg-red-500 text-white px-6 py-2 rounded ${selectedItems.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
            disabled={selectedItems.length === 0}
          >
            Supprimer les actualités
          </button>
        </div>
      </div>

      {/* Grille pour afficher les actualités */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-lg p-4 ${selectedItems.includes(item.id) ? 'border-4 border-blue-500' : ''}`}
            onClick={() => handleSelectItem(item.id)}
          >
            <img src={item.image} alt={item.title} className="rounded-lg mb-4 w-full h-40 object-cover" />
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
            {selectedItems.includes(item.id) && (
              <p className="text-red-500 font-bold">Sélectionné</p>
            )}
          </div>
        ))}
      </div>

      {/* Modal pour ajouter une nouvelle actualité */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Ajouter une nouvelle actualité</h2>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="border border-gray-300 p-2 w-full mb-4"
              placeholder="Titre de l'actualité"
            />
            <input
              type="text"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
              className="border border-gray-300 p-2 w-full mb-4"
              placeholder="URL de l'image"
            />
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="border border-gray-300 p-2 w-full mb-4"
              placeholder="Description de l'actualité"
            ></textarea>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowAddModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Annuler
              </button>
              <button
                onClick={handleAddItem}
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


export default ActualitesInterfaceAd;
