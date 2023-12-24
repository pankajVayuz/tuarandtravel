import AdventureExcursionCard from "./AdventureExcursionCard";
import vehicle1 from "./image/vehicle1.jpeg";
import vehicle2 from "./image/vehicle2.jpeg";
import vehicle3 from "./image/vehicle3.jpeg";

function App() {

  const services = [
    {
      title: "Golden Triangle Tour",
      description: "Explore Delhi, Agra, and Jaipur - the most popular tourist destinations in North India. Experience the rich history, culture, and architecture of these cities.",
      image: vehicle1
    },
    {
      title: "Goa Beach Vacation",
      description: "Relax on the beautiful beaches of Goa, indulge in water sports, and experience the vibrant nightlife. A perfect destination for beach lovers.",
      image: vehicle2
    },
    {
      title: "Kerala Backwaters Experience",
      description: "Cruise through the tranquil backwaters of Kerala on a houseboat, explore lush green landscapes, and witness traditional dance forms like Kathakali.",
      image: vehicle3
    }
  ];

  return (
    <div className="bg-gray-100">
      <header className="bg-blue-500 p-4 text-white">
        <h1 className="text-3xl font-semibold">Welcome CNB Tour & Travel</h1>
      </header>
      
      <main className="container mx-auto p-4">
        
        {/* Center the "Our Services" title */}
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AdventureExcursionCard 
              key={index}
              vehicleImage={service.image} 
              title={service.title} 
              description={service.description} 
              // price="Starting at $499"  // Assuming a starting price, adjust as necessary
            />
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Add your AdventureExcursionCard components here */}
        </div>
        
        {/* Vehicle Image Gallery */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">Vehicle Image Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="aspect-w-1 aspect-h-1">
    <img 
      src={vehicle1} 
      alt="Vehicle 1" 
      className="object-cover w-full h-full rounded-md" 
    />
  </div>
  <div className="aspect-w-1 aspect-h-1">
    <img 
      src={vehicle2} 
      alt="Vehicle 2" 
      className="object-cover w-full h-full rounded-md" 
    />
  </div>
  <div className="aspect-w-1 aspect-h-1">
    <img 
      src={vehicle3} 
      alt="Vehicle 3" 
      className="object-cover w-full h-full rounded-md" 
    />
  </div>
</div>

        
        {/* Contact Us */}
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Contact information */}
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
         
        </div>
      </main>
      
      <footer className="bg-blue-500 p-4 text-white text-center">
        &copy; {new Date().getFullYear()} CNB Tour & Travel. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
