import vehicle1 from "./image/vehicle1.jpg"
import vehicle2 from "./image/vehicle2.webp"
import vehicle3 from "./image/vehicle3.webp"

function App() {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-500 p-4 text-white">
        <h1 className="text-3xl font-semibold">Welcome to our Tour & Travel Website</h1>
      </header>
      
      <main className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Featured Tours</h2>
        {/* Add your tour cards or listings here */}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Vehicle Image Gallery</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Add your vehicle images here */}
          <img src={vehicle1} alt="Vehicle 1" className="w-full h-auto rounded-md" />
          <img src={vehicle2} alt="Vehicle 2" className="w-full h-auto rounded-md" />
          <img src={vehicle3} alt="Vehicle 3" className="w-full h-auto rounded-md" />
          {/* Add more images as needed */}
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p>Your Company Name</p>
            <p>123 Main Street</p>
            <p>City, Country</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>contact@example.com</p>
          </div>
        </div>
      </main>
      
      <footer className="bg-blue-500 p-4 text-white text-center">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
