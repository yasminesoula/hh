const Navbar = () => {
    return (
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10" />
            <nav className="ml-10 space-x-4">
              <a href="#" className="hover:underline">A propos</a>
              <a href="#" className="hover:underline">Nous contacter</a>
              <button className="bg-white text-blue-900 py-2 px-4 rounded-lg ml-6">Logout</button>
            </nav>
          </div>
        </div>
      </header>
    );
  };
  