import React, { useState } from 'react';

// Composant Sidebar (barre latérale)
function Sidebar() {
  const folders = ['inbox', 'favorite', 'en attente', 'envoyer', 'brouillon', 'spam', 'supprimer'];

  return (
    <div className="w-64 bg-gray-200 h-96 p-4">
        
      <button className="bg-blue-500 text-white w-full py-2 mb-4 rounded-lg">Écrire</button>
      <ul>
        {folders.map((folder, index) => (
          <li key={index} className="p-2 cursor-pointer hover:bg-gray-300 rounded-lg">
            {folder.charAt(0).toUpperCase() + folder.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Composant EmailList (Liste des emails)
function EmailList({ onSelectEmail }) {
  const emails = [
    {
      id: 1,
      subject: 'Email Subject',
      sender: 'Recipient Name',
      snippet: 'Aperçu du message de l\'email...',
      time: '9:14 AM (4 hours ago)',
    },
  ];

  return (
    <div className="flex-1 bg-white h-52 p-4">
      {emails.map((email) => (
        <div
          key={email.id}
          className="border-b py-4 cursor-pointer hover:bg-gray-100"
          onClick={() => onSelectEmail(email)}
        >
          <h3 className="font-bold">{email.subject}</h3>
          <p className="text-gray-500 ">{email.sender} - {email.time}</p>
          <p className="text-sm text-gray-400">{email.snippet}</p>
        </div>
      ))}
    </div>
  );
}

// Composant EmailContent (Contenu de l'email)
function EmailContent({ email }) {
  if (!email) {
    return <div className="flex-1 p-4"></div>;
  }

  
}

// Composant NewMessage (Nouvelle fenêtre de rédaction d'email)
function NewMessage() {
  return (
    <div className="fixed bottom-0 right-4 w-96 bg-white shadow-lg rounded-lg p-4 h-96">
      <h3 className="font-bold mb-4">New Message</h3>
      <div className="mb-2">
        <input
          type="text"
          className="w-full border rounded-lg p-2"
          placeholder="Recipients"
        />
      </div>
      <div className="mb-2">
        <input type="text" className="w-full border rounded-lg p-2" placeholder="Subject" />
      </div>
      <div className="mb-4">
        <textarea className="w-full border rounded-lg p-2" rows="4" placeholder="Body Text"></textarea>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Send</button>
    </div>
  );
}

// Composant principal App
function EmailInterface() {
  const [selectedEmail, setSelectedEmail] = useState(null);

  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <EmailList onSelectEmail={setSelectedEmail} />
        <EmailContent email={selectedEmail} />
      </div>
      <NewMessage />
    </div>
  );
}

export default EmailInterface;