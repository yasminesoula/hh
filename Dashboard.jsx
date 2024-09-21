import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HomePage from './DefaultInterface';  // Interface par défaut
import ActualitesInterface from './ActualitesInterface';  // Interface des actualités
import StudentCoursesInterface from './StudentCoursesInterface';  // Interface des cours étudiants
import EmailInterface from './EmailInterface';  // Interface des emails
import TeacherCoursesInterface from './teacherCoursesInterface';
import TeacherArchivedCoursesInterface from './Coursteacher';
import StudentArchive from './studentarche';
import TeacherNoteInterface from './teachernote';
import StudentNote from './studiantnote';
import VideoManager from './video';
import VideoManagerSt from './videost';
import ActualitesInterfaceAd from './Actualiteradmin';
import HomePageAd from './defaultadmin';
import CoursAd from './coursadmin';
import AgendaInterface from './agenda';
import AgendaAd from './agendaAd';
import { Helmet } from 'react-helmet';
function Dashboard() {
     const [activePage, setActivePage] = useState('default');  // Par défaut, on affiche l'interface par défaut
    const [lightMode, setLightMode] = useState(true); // Pour le mode clair/sombre
    const location = useLocation();  // Récupérer les données de navigation depuis Login
    const navigate = useNavigate();
    const { userRole } = location.state || {};  // Extraire le rôle de l'utilisateur

    const handleLogout = () => {
        navigate('/login');  // Rediriger vers la page de connexion
    };

    const handlePageChange = (page) => {
        setActivePage(page);
    };

    const handleLightModeToggle = () => {
        setLightMode(!lightMode);
    };

    return (
        <div>
        <Helmet>
          <title>OpusLabApp</title>
        </Helmet>  
        <div className={`${lightMode ? 'bg-gray-100 text-black' : 'bg-black text-white'} flex flex-col min-h-screen`}>
            <header className="bg-[rgb(3,17,54)] text-white p-4 flex justify-between items-center w-full">
                <div className="flex items-center">
                    <img src="/opus_logo.webp" alt="Opus Lab Logo" className="h-12" />
                    <nav className="translate-y-20 flex space-x-8 bg-[#031136] text-white py-2 px-4 rounded-lg ml-2">
                        <button
                          className={`hover:text-gray-300 ${activePage === 'actualites' ? 'text-blue-400' : ''}`}
                          onClick={() => handlePageChange('actualites')}
                        >
                          Actualités
                        </button>
                        <button
                          className={`hover:text-gray-300 ${activePage === 'cours' ? 'text-blue-400' : ''}`}
                          onClick={() => handlePageChange('cours')}
                        >
                          Cours
                        </button>
                        <button 
                          className={`hover:text-gray-300 ${activePage === 'email' ? 'text-blue-400' : ''}`} 
                          onClick={() => handlePageChange('email')}
                        >
                          Email
                        </button>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#about"  className="hover:text-gray-300">À propos</a>
                    <a href="#contact" className="hover:text-gray-300">Nous contacter</a>
                    <button
                      onClick={handleLogout}
                      className="bg-cyan-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                    >
                      Logout
                    </button>
                </div>
            </header>

            <div className="flex flex-1 translate-y-20">
                {(activePage === 'cours' || activePage === 'agenda' || activePage === 'email' || activePage === 'archived' || activePage === 'note' || activePage === 'Enregistrement') && (
                  <aside className="w-64 bg-[#031136] text-white min-h-screen p-6">
                      <nav className="space-y-4">
                          <img src="/opus_logo.webp" alt="Logo" className="h-10 translate-x-20" />
                          <button 
                                className={`hover:bg-blue-800 text-white w-full py-2 px-4 rounded-lg flex gap-3 ${activePage === 'cours' ? 'bg-blue-700' : ''}`}
                                onClick={() => handlePageChange('cours')}
                              >
                                <img src="./cours.png" alt="Cours" className="h-6 w-6" />
                                Cours
                              </button>
                              <button 
                                className={`hover:bg-blue-800 text-white w-full py-2 px-4 rounded-lg flex gap-3 ${activePage === 'agenda' ? 'bg-blue-700' : ''}`}
                                onClick={() => handlePageChange('agenda')}
                              >
                                 <img src="./agenda.png" alt="Agenda" className="h-6 w-6" />
                                Agenda
                              </button>
                              <button 
                                className={`hover:bg-blue-800 text-white w-full py-2 px-4 rounded-lg flex gap-3 ${activePage === 'email' ? 'bg-blue-700' : ''}`}
                                onClick={() => handlePageChange('email')}
                              >
                              <img src="./email.png" alt="Email" className="h-6 w-6" />
                                Email
                              </button>
                              <button 
                                className={`hover:bg-blue-800 text-white w-full py-2 px-4 rounded-lg flex gap-3 ${activePage === 'archived' ? 'bg-blue-700' : ''}`}
                                onClick={() => handlePageChange('archived')}
                              >
                                <img src="./archiver.png" alt="Cours Archive" className="h-6 w-6" />
                                Cours archivé
                              </button>
                              <button 
                                className={`hover:bg-blue-800 text-white w-full py-2 px-4 rounded-lg flex gap-3 ${activePage === 'note' ? 'bg-blue-700' : ''}`}
                                onClick={() => handlePageChange('note')}
                              >
                               <img src="./note.png" alt="Note" className="h-6 w-6" />
                                Note
                              </button>
                              <button 
                                className={`hover:bg-blue-800 text-white w-full py-2 px-4 rounded-lg flex gap-3 ${activePage === 'Enregistrement' ? 'bg-blue-700' : ''}`}
                                onClick={() => handlePageChange('Enregistrement')}
                              >
                                 <img src="./enreg.png" alt="Enregistrement" className="h-6 w-6" />
                                Enregistrement
                              </button>
                      </nav>
                      <div className="mt-6 translate-y-20">
                          <label className="flex items-center space-x-2">
                              <img src="./time.png" alt="Light Mode" className="h-6 w-6" />
                              <span>Light Mode</span>
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="sr-only peer"
                                  checked={lightMode}
                                  onChange={handleLightModeToggle}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                              </label>
                          </label>
                          <button
                            onClick={handleLogout}
                            className="bg-cyan-600 hover:bg-red-700 text-white w-full py-2 px-4 rounded-lg mt-6"
                          >
                            Logout
                          </button>
                      </div>
                  </aside>
                )}

                <main className="flex-1 p-6">
                    {activePage === 'default' && (userRole === 'admin' ? <HomePageAd /> : <HomePage />)}
                    {activePage === 'actualites' && (userRole === 'admin' ? <ActualitesInterfaceAd /> : <ActualitesInterface />)}
                    {activePage === 'cours' && userRole === 'student' && <StudentCoursesInterface />}
                 {activePage === 'cours' && (userRole === 'admin' ? <CoursAd /> : userRole==='teacher'&& <TeacherCoursesInterface />)}
                 {activePage === 'agenda' && (userRole === 'admin' ? <AgendaAd /> : <AgendaInterface />)}

                    {activePage === 'email' && <EmailInterface />} 
                    {activePage === 'archived' &&  userRole === 'teacher' && <TeacherArchivedCoursesInterface />}
                    {activePage === 'archived' &&  userRole === 'student' && <StudentArchive />} 
                    {activePage === 'note' && userRole === 'teacher' && <TeacherNoteInterface />} 
                    {activePage === 'note' && userRole === 'student' && <StudentNote />} 
                    {activePage === 'Enregistrement' && userRole === 'teacher' && <VideoManager />} 
                    {activePage === 'Enregistrement' && userRole === 'student' && <VideoManagerSt />} 

                </main>
            </div>

            {/* Footer */}
            <footer className="bg-[rgb(3,17,54)] text-white h-80">
                <div className="container mx-auto flex justify-between">
                    <div>
                        <img src="/opus_logo.webp" alt="Opus Lab Logo" className="h-36 w-36 translate-x-24 translate-y-16" />
                    </div>
                    <div className="translate-y-20">
                        <h3 className="text-lg font-bold">Explore</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:underline">Email</a></li>
                            <li><a href="#" className="hover:underline">Courses</a></li>
                            <li><a href="#" className="hover:underline">A propos</a></li>
                            <li><a href="#" className="hover:underline">Actualité</a></li>
                        </ul>
                    </div>
                    <div className="translate-y-20">
                        <h3 className="text-lg font-bold">Get in touch</h3>
                        <p className="mt-4">https://opuslab.tv/</p>
                        <p>+216 2594712</p>
                        <p>opuslab@gmail.com</p>
                    </div>
                </div>
            </footer>
        </div>
              </div>

    );
}

export default Dashboard;
