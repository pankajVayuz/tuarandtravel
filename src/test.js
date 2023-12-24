import vehicle1 from "./image/vehicle1.jpg"
import vehicle2 from "./image/vehicle2.webp"
import vehicle3 from "./image/vehicle3.webp"

function App() {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-500 p-4 text-white">
        <h1 className="text-3xl font-semibold">Welcome to Happu Tour & Travel</h1>
      </header>
      
      <main className="container mx-auto p-4">
       
        {/* Add your tour cards or listings here */}<div className="bg-gray-100">
  {/* ... Header and other sections ... */}
  
  <main className="container mx-auto p-4">
    <h2 className="text-2xl font-semibold mb-4">Featured Tours</h2>
    <div className="flex flex-wrap gap-4 justify-center ">
      {/* Tour Card 1 */}
      <div className="bg-white rounded shadow-md p-4">
        <img src="tour1.jpg" alt="Tour 1" className="w-full h-auto mb-2" />
        <h3 className="text-xl font-semibold mb-1 whitespace-normal ">Adventure Excursion</h3>
        <p className="text-gray-600">Explore thrilling mountains and forests.</p>
        <p className="text-blue-500 font-semibold">$499</p>
      </div>
      
      {/* Tour Card 2 */}
      <div className="bg-white rounded shadow-md p-4">
        <img src="tour2.jpg" alt="Tour 2" className="w-full h-auto mb-2" />
        <h3 className="text-xl font-semibold mb-1">Beach Getaway</h3>
        <p className="text-gray-600">Relax on beautiful sandy beaches.</p>
        <p className="text-blue-500 font-semibold">$299</p>
      </div>
      
      {/* Tour Card 3 */}
      <div className="bg-white rounded shadow-md p-4">
        <img src="tour3.jpg" alt="Tour 3" className="w-full h-auto mb-2" />
        <h3 className="text-xl font-semibold mb-1">Cultural Exploration</h3>
        <p className="text-gray-600">Immerse in rich local traditions.</p>
        <p className="text-blue-500 font-semibold">$399</p>
      </div>
    </div>
  </main>
  
  {/* ... Contact and footer sections ... */}
</div>

        
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
            <p>Happu Tour and Travel</p>
            <p>Noida Sector 5  Gautam Budh Nagar UP</p>
            <p>Delhi, India</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>harishawana33101@gmail.com</p>
            <div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>+919355207253</p>
          </div>
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