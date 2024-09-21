import React from 'react';

// Composant CourseCard pour afficher les informations sur chaque cours avec une image
function CourseCard({ title, details, price, image }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-2 max-w-sm">
      <img src={image} alt={title} className="rounded-lg mb-4 w-full  object-cover h-52" />
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <ul className="mb-4 text-gray-600">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <p className="text-gray-700 font-bold mb-4">Pricing: {price}</p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Download Brochure
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          Buy Now
        </button>
      </div>
    </div>
  );
}

// Composant HomePage pour afficher la page complète avec les cours et la section Opus Lab
function HomePage() {
  const courses = [
    {
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
  ];

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Section pour les cartes de cours sous forme de grille */}
      <h1 className="text-4xl font-bold text-center mb-8">Nos Cours</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            details={course.details}
            price={course.price}
            image={course.image}
          />
        ))}
      </div>

      {/* Section Opus Lab avec une image en arrière-plan */}
      <div className="text-white mt-12 bg-[#031136]">
        <img src="./src/yasmine.png" alt="Opus Lab" className="w-full h-96 object-cover" />
      </div>
    </div>
  );
}

export default HomePage;
