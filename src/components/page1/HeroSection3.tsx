import Image from 'next/image';
import pic61 from "../../public/Frame 61.png"
import pic62 from "../../public/Frame 62.png"
import pic63 from "../../public/Frame 63.png"
import pic64 from "../../public/Frame 64.png"


export default function BrowseDressStyle() {
  return (
    <section className="max-w-5xl w-full rounded-lg shadow-md p-4 mx-auto my-4 bg-[#F0F0F0]">
      <h2 className="text-2xl font-bold text-center mb-4 font-integral">BROWSE BY DRESS STYLE</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {/* Casual */}
        <div className="relative group rounded-lg overflow-hidden bg-gray-100 col-span-2 md:col-span-1 h-[150px] md:h-[200px]">
          <Image 
            src={pic61}
            alt="Casual" 
            className="w-full h-full object-cover" 
            width={400} 
            height={400} 
          />
          <div className="absolute inset-0  group-hover:bg-opacity-50 transition"></div>
          <p className="absolute bottom-2 left-2 text-white font-semibold">Casual</p>
        </div>

        {/* Formal */}
        <div className="relative group rounded-lg overflow-hidden bg-gray-100 col-span-2 h-[150px] md:h-[200px]">
          <Image 
            src={pic62}
            alt="Formal" 
            className="w-full h-full object-cover" 
            width={400} 
            height={400} 
          />
          <div className="absolute inset-0  group-hover:bg-opacity-50 transition"></div>
          <p className="absolute bottom-2 left-2 text-white font-semibold">Formal</p>
        </div>

        {/* Party */}
        <div className="relative group rounded-lg overflow-hidden bg-gray-100 col-span-2 h-[150px] md:h-[200px]">
          <Image 
            src={pic64}
            alt="Party" 
            className="w-full h-full object-cover" 
            width={400} 
            height={400} 
          />
          <div className="absolute inset-0   group-hover:bg-opacity-50 transition"></div>
          <p className="absolute bottom-2 left-2 text-white font-semibold">Party</p>
        </div>

        {/* Gym */}
        <div className="relative group rounded-lg overflow-hidden bg-gray-100 col-span-2 md:col-span-1 h-[150px] md:h-[200px]">
          <Image 
            src={pic63}
            alt="Gym" 
            className="w-full h-full object-cover" 
            width={400} 
            height={400} 
          />
          <div className="absolute inset-0  group-hover:bg-opacity-50 transition"></div>
          <p className="absolute bottom-2 left-2 text-white font-semibold">Gym</p>
        </div>
      </div>
    </section>
  );
}
