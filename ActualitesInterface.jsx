import React from 'react';

function ActualitesInterface() {
      const newsItems = [
        {
          title: "OUVERTURE DES INSCRIPTIONS POUR LA SESSION DE JANVIER 2024",
          image: "./src/act2.jpg",
          description: "Les inscriptions pour la session de formation de janvier 2024 sont désormais ouvertes...",
        },
        {
          title: "WEBINAIRE SUR LES TENDANCES TECHNOLOGIQUES DE 2024",
          image: "./src/act3.jpg",
          description: "Rejoignez-nous pour un webinaire exclusif sur les dernières tendances technologiques...",
        },
        {
          title: "TOUS LES CHEMINS MÈNENT À OPUS LAB",
          image: "./src/act1.jpg",
          description: "NB: Aide pour vous demain lors de la journée mondiale sans voiture...",
        },
        {
          title: "RENCONTRE AVEC DES PROFESSIONNELS DE L'INDUSTRIE DU NUMÉRIQUE",
          image: "./src/act4.jpg",
          description: "Le mois prochain, le centre organise une rencontre avec des professionnels du secteur numérique...",
        },
        {
          title: "JOURNÉE PORTES OUVERTES",
          image: "./src/act.jpg",
          description: "Le centre de formation organise une journée portes ouvertes le samedi 12 novembre 2024...",
        },
        {
          title: "ATELIERS PRATIQUES SUR LE DÉVELOPPEMENT D'APPLICATIONS MOBILES",
          image: "./src/act5.jpg",
          description: "Le centre de formation propose une série d'ateliers pratiques sur le développement d'applications mobiles...",
        },
      ];
    
      return (
        <div className="container mx-auto px-6 py-10 mb-11">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                <img src={item.image} alt={item.title} className="rounded-lg mb-4 w-full h-40 object-cover" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
    

export default ActualitesInterface;
