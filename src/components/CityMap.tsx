
import { MapPin, Pin } from 'lucide-react';

interface City {
  name: string;
  status: 'live' | 'upcoming';
}

const cities: City[] = [
  { name: 'Bangalore', status: 'live' },
  { name: 'Hyderabad', status: 'live' },
  { name: 'Chennai', status: 'live' },
  { name: 'Pune', status: 'live' },
  { name: 'Mumbai', status: 'live' },
  { name: 'Mysore', status: 'upcoming' },
  { name: 'Coimbatore', status: 'upcoming' },
  { name: 'Vellore', status: 'upcoming' },
  { name: 'Visakhapatnam', status: 'upcoming' },
  { name: 'Vijayawada', status: 'upcoming' },
  { name: 'Ahmedabad', status: 'upcoming' },
  { name: 'Nagpur', status: 'upcoming' },
  { name: 'Vadodara', status: 'upcoming' },
  { name: 'Surat', status: 'upcoming' },
];

const CityMap = () => {
  const liveCities = cities.filter((city) => city.status === 'live');
  const upcomingCities = cities.filter((city) => city.status === 'upcoming');

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Live Cities */}
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-dil-purple flex items-center">
          <MapPin className="text-green-500 mr-2" size={22} /> 
          Live Cities
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {liveCities.map((city) => (
            <div key={city.name} className="flex items-center">
              <MapPin className="text-green-500 mr-2" size={18} />
              <span className="font-medium">{city.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Upcoming Cities */}
      <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm opacity-75">
        <h3 className="text-xl font-semibold mb-4 text-dil-red flex items-center">
          <Pin className="text-red-500/80 mr-2" size={22} />
          Upcoming Cities
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {upcomingCities.map((city) => (
            <div key={city.name} className="flex items-center">
              <Pin className="text-red-500/80 mr-2" size={18} strokeDasharray="2,2" />
              <span className="text-gray-700">{city.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityMap;
