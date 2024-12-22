import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from '../common/Image';
import { images } from '../../data/images';

export default function MemberSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const members = images.members;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % members.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);

  return (
    <div className="relative max-w-4xl mx-auto mb-16">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Image 
          src={members[currentIndex].url}
          alt={members[currentIndex].name}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{members[currentIndex].name}</h3>
          <p className="text-rose-600 font-semibold mb-4">{members[currentIndex].role}</p>
          <p className="text-gray-600">{members[currentIndex].bio}</p>
        </div>
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
