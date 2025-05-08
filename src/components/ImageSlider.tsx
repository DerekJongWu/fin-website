'use client';

import Image from 'next/image';

const images = [
  '/Cherry.png',
  '/DailyPay.png',
  '/Healthee.png',
  '/Liminal.png',
  '/MechanicalOrchard.png',
  '/Poolside.png',
  '/Articul8.png',
  '/chime.png',
  '/Greenlight.png',
];

export default function ImageSlider() {
  // Create two sets of images for the infinite loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden py-8 mt-[40vh]">
      <div className="flex">
        {/* First set of images */}
        <div className="flex animate-scroll">
          {duplicatedImages.map((src, index) => (
            <div key={`first-${src}-${index}`} className="flex">
              <div className="w-[200px] h-[100px]">
                <Image
                  src={src}
                  alt={`Logo ${index + 1}`}
                  width={200}
                  height={100}
                  className="object-contain w-full h-full"
                  priority={true}
                  loading="eager"
                />
              </div>
              <div className="w-[100px]" />
            </div>
          ))}
        </div>
        {/* Second set of images */}
        <div className="flex animate-scroll">
          {duplicatedImages.map((src, index) => (
            <div key={`second-${src}-${index}`} className="flex">
              <div className="w-[200px] h-[100px]">
                <Image
                  src={src}
                  alt={`Logo ${index + 1}`}
                  width={200}
                  height={100}
                  className="object-contain w-full h-full"
                  priority={true}
                  loading="eager"
                />
              </div>
              <div className="w-[100px]" />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 45s linear infinite;
        }
      `}</style>
    </div>
  );
} 