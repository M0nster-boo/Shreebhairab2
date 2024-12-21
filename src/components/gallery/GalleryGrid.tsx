import { useState } from 'react';
import Button from '../ui/Button';
import GalleryModal from './GalleryModal';
import Image from '../common/Image';

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const allImages = [
    {
      src: '/images/gallery/1.jpg',
      alt: 'Studio Session'
    },
    {
      src: '/images/gallery/2.jpg',
      alt: 'Live Performance'
    },
    // ... other images
  ];

  const displayedImages = showAll ? allImages : allImages.slice(0, 6);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedImages.map((image, index) => (
          <div 
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(image.src)}
          >
            <Image 
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-xl font-semibold">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button 
          onClick={() => setShowAll(!showAll)}
          variant="secondary"
        >
          {showAll ? 'Show Less' : 'View More Photos'}
        </Button>
      </div>

      {selectedImage && (
        <GalleryModal 
          imageUrl={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </div>
  );
}
