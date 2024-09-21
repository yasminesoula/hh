import React from 'react';

function Index() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-[#031136] text-white p-4 flex justify-between items-center shadow-lg">
                <div className="flex items-center">
                    <img src="opus_logo.webp" alt="Training Center Logo" className="h-12" />
                </div>
                <nav>
                    <a href="/login" className="bg-cyan-600 hover:bg-red-700 text-white w-full py-2 px-4 rounded-lg mt-6 ">Login</a>
                </nav>
            </header>

            {/* Video Gallery Section */}
            <section className="flex-grow bg-gray-100 p-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Opus Lab</h1>
                    <a href="/login" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">Get Started</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Video Items */}
                    <div className="relative h-64 bg-gray-300">
                        <video className="w-full h-full object-cover" src="video_4n8EcDU.mp4" autoPlay muted loop></video>
                    </div>
                    <div className="relative h-64 bg-gray-300">
                        <video className="w-full h-full object-cover" src="video_T68SaHg.mp4" autoPlay muted loop></video>
                    </div>
                    <div className="relative h-64 bg-gray-300">
                        <video className="w-full h-full object-cover" src="video_TWcMBGB.mp4" autoPlay muted loop></video>
                    </div>
                    <div className="relative h-64 bg-gray-300">
                        <video className="w-full h-full object-cover" src="video_UDcBimW.mp4" autoPlay muted loop></video>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#031136] text-white text-center p-4">
                <p>&copy; 2024 Yasmine Soula</p>
            </footer>
        </div>
    );
}

export default Index;
