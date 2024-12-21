import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MemberSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const members = [
    {
      name: "David Chen",
      role: "Piano & Composition",
      image: "/images/members/member1.jpg",
      bio: "A classically trained pianist with a passion for blending traditional and contemporary styles."
    },
     {
      name: "David Chen",
      role: "Piano & Composition",
      image: "/images/members/member1.jpg",
      bio: "A classically trained pianist with a passion for blending traditional and contemporary styles."
    },
    {
      name: "Sarah Williams",
      role: "Violin",
      image: "/images/members/member2.jpg",
      bio: "Virtuoso violinist bringing emotional depth and technical precision to every performance."
    },
    {
      name: "Marcus Rodriguez",
      role: "Percussion",
      image: "/images/members/member3.jpg",
      bio: "Innovative percussionist exploring rhythmic boundaries and world music influences."
    },
    {
      name: "Emily Zhang",
      role: "Cello",
      image: "/images/members/member4.jpg",
      bio: "Award-winning cellist known for her expressive playing and innovative techniques."
    },
    {
      name: "Michael Brown",
      role: "Bass",
      image: "/images/members/member5.jpg",
      bio: "Versatile bassist bridging classical and contemporary styles with precision."
    },
    {
      name: "Lisa Anderson",
      role: "Flute",
      image: "/images/members/member6.jpg",
      bio: "Renowned flutist bringing ethereal melodies and technical mastery to every performance."
    }
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % members.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);

  return (
    <div className="relative max-w-4xl mx-auto mb-16">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={members[currentIndex].image}
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
