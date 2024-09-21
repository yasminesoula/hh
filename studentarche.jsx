import React, { useState } from 'react';
function StudentArchive() {
    return (
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-6 text-center">Cours archivés</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Liste des fichiers PDF archivés */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="./src/pdf.png" alt="HTML Cours" className="mb-4 w-20 h-20 translate-x-20" />
              <h3 className="text-xl font-bold mb-2">HTML</h3>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Exporter</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="./src/pdf.png" alt="CSS Cours" className="mb-4 w-20 h-20 translate-x-20" />
              <h3 className="text-xl font-bold mb-2">CSS</h3>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Exporter</button>
            </div>
            {/* Ajouter plus de fichiers ici */}
          </div>
          </div>
    
    );
        }
export default StudentArchive;