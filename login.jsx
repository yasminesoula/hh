import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleRoleClick = (selectedRole) => {
    setRole(selectedRole);
    if (selectedRole === 'admin') {
      setUserId('admin123');
    } else if (selectedRole === 'teacher') {
      setUserId('teacher123');
    } else if (selectedRole === 'student') {
      setUserId('student123');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let detectedRole;

    if (userId === 'student123') {
      detectedRole = 'student';
    } else if (userId === 'teacher123') {
      detectedRole = 'teacher';
    } else if (userId === 'admin123') {
      detectedRole = 'admin';
    }

    if (detectedRole) {
      navigate('/dashboard', { state: { userRole: detectedRole } });
    } else {
      alert('Invalid login credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/src/1.png')] opacity-75 z-20">
      <div className="relative bg-white shadow-lg rounded-lg p-8 max-w-md w-full z-100">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold">Opus Lab</h2>
          <p className="text-gray-500">Please login to continue</p>
        </div>

        <div className="flex justify-center mb-4 space-x-4">
          <button
            id="student-toggle"
            className={`py-2 px-4 rounded ${role === 'student' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleRoleClick('student')}
          >
            Étudiants
          </button>
          <button
            id="teacher-toggle"
            className={`py-2 px-4 rounded ${role === 'teacher' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleRoleClick('teacher')}
          >
            Enseignants
          </button>
          <button
            id="admin-toggle"
            className={`py-2 px-4 rounded ${role === 'admin' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => handleRoleClick('admin')}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="user-id" className="text-gray-600">ID</label>
            <input
              type="text"
              id="user-id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter your ID"
              required
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-600">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
