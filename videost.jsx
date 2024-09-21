import React, { useState } from 'react';

// Composant principal pour afficher les vidéos
function VideoManagerSt() {
  const [videos] = useState([
    { id: 1, title: 'séance 1: DÉVELOPPEMENT WEB', videoUrl: './video_4n8EcDU.mp4' },
    { id: 2, title: 'séance 2: DÉVELOPPEMENT WEB', videoUrl: './video_T68SaHg.mp4' },
    { id: 3, title: 'séance 3: DÉVELOPPEMENT WEB', videoUrl: './video_TWcMBGB.mp4' },
    { id: 4, title: 'séance 4: DÉVELOPPEMENT WEB', videoUrl: './video_UDcBimW.mp4' },
  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Enregistrements des Cours</h1>
      </div>
      
      {/* Grille pour afficher les vidéos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {videos.map((video, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <video src={video.videoUrl} controls className="w-full h-72 object-cover rounded-lg mb-4"></video>
            <p className="text-gray-600">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoManagerSt;
