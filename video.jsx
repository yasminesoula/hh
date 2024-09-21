import React, { useState } from 'react';

// Composant principal pour la gestion des enregistrements
function VideoManager() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [videos, setVideos] = useState([
    { id: 1, title: 'séance 1: DÉVELOPPEMENT WEB', videoUrl: './video_4n8EcDU.mp4' },
    { id: 2, title: 'séance 2: DÉVELOPPEMENT WEB', videoUrl: './video_T68SaHg.mp4' },
    { id: 3, title: 'séance 3: DÉVELOPPEMENT WEB', videoUrl: './video_TWcMBGB.mp4' },
    { id: 4, title: 'séance 4: DÉVELOPPEMENT WEB', videoUrl: './video_UDcBimW.mp4' },
  ]);
  const [selectedVideos, setSelectedVideos] = useState([]); // Stocker les vidéos sélectionnées
  const [newVideoUrl, setNewVideoUrl] = useState('');
  const [newVideoTitle, setNewVideoTitle] = useState('');
  const [newVideoRecipient, setNewVideoRecipient] = useState('');

  const handleAddVideoClick = () => {
    setShowAddModal(true);
  };

  const handleConfirmClick = () => {
    if (newVideoUrl && newVideoTitle && newVideoRecipient) {
      const newVideo = {
        id: videos.length + 1,
        title: newVideoTitle,
        videoUrl: newVideoUrl,
      };
      setVideos([...videos, newVideo]);
      setShowAddModal(false);
      setNewVideoUrl('');
      setNewVideoTitle('');
      setNewVideoRecipient('');
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  };

  // Fonction pour sélectionner une vidéo
  const handleSelectVideo = (id) => {
    if (selectedVideos.includes(id)) {
      setSelectedVideos(selectedVideos.filter((videoId) => videoId !== id));
    } else {
      setSelectedVideos([...selectedVideos, id]);
    }
  };

  // Fonction pour supprimer les vidéos sélectionnées
  const handleDeleteVideos = () => {
    const remainingVideos = videos.filter((video) => !selectedVideos.includes(video.id));
    setVideos(remainingVideos);
    setSelectedVideos([]); // Réinitialise les vidéos sélectionnées après la suppression
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold ">Enregistrements des Cours</h1>

        {/* Boutons d'ajout et de suppression */}
        <div className="flex space-x-4 translate-y-16">
          <button
            onClick={handleAddVideoClick}
            className="bg-red-500 text-white px-6 py-2 rounded"
          >
            + Ajouter vos enregistrements
          </button>

          {/* Bouton de suppression, activé si des vidéos sont sélectionnées */}
          <button
            onClick={handleDeleteVideos}
            className={`bg-gray-500 text-white px-6 py-2 rounded ${selectedVideos.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
            disabled={selectedVideos.length === 0}
          >
            Supprimer les enregistrements
          </button>
        </div>
      </div>
      
      {/* Grille pour afficher les vidéos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 translate-y-11 mb-52">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-lg shadow-lg ${selectedVideos.includes(video.id) ? 'border-4 border-blue-500' : ''}`}
            onClick={() => handleSelectVideo(video.id)}
          >
            <video src={video.videoUrl} controls className="w-full h-72 object-cover rounded-lg mb-4"></video>
            <p className="text-gray-600">{video.title}</p>
            {selectedVideos.includes(video.id) && (
              <p className="text-red-500 font-bold">Sélectionné</p>
            )}
          </div>
        ))}
      </div>

      {/* Modal pour ajouter une nouvelle vidéo */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Ajouter un nouvel enregistrement</h2>
            <input
              type="text"
              value={newVideoUrl}
              onChange={(e) => setNewVideoUrl(e.target.value)}
              className="border border-gray-300 p-2 w-full mb-4"
              placeholder="Sélectionner une vidéo (URL)"
            />
            <input
              type="text"
              value={newVideoTitle}
              onChange={(e) => setNewVideoTitle(e.target.value)}
              className="border border-gray-300 p-2 w-full mb-4"
              placeholder="Ajouter le nom du cours"
            />
            <input
              type="text"
              value={newVideoRecipient}
              onChange={(e) => setNewVideoRecipient(e.target.value)}
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

export default VideoManager;