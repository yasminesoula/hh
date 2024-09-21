const Footer = () => {
    return (
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto flex justify-between">
          <div>
            <h3 className="text-lg font-bold">Explore</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Email</a></li>
              <li><a href="#" className="hover:underline">Courses</a></li>
              <li><a href="#" className="hover:underline">A propos</a></li>
              <li><a href="#" className="hover:underline">Actualité</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Get in touch</h3>
            <p className="mt-4">https://opuslab.tv/</p>
            <p>+216 2594712</p>
            <p>opuslab@gmail.com</p>
          </div>
        </div>
      </footer>
    );
  };
  