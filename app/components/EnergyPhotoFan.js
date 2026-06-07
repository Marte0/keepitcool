import Image from "next/image";

export default function EnergyPhotoFan({ photos }) {
  return (
    <>
      <div
        className="energy-photo-fan relative mx-auto hidden min-h-[280px] w-full max-w-[1080px] items-end justify-center py-6 md:flex"
        aria-label="Students exploring energy literacy"
      >
        {photos.map((photo, index) => (
          <div
            key={photo.src}
            className="energy-photo-card relative shrink-0 cursor-default border-0 bg-transparent p-0"
            style={{
              "--photo-tilt": `${photo.tilt}deg`,
              marginTop: `${photo.offsetY}px`,
              marginLeft: index === 0 ? 0 : "-3rem",
              zIndex: index + 1,
            }}
          >
            <div className="energy-photo-frame overflow-hidden rounded-[30px] border-6 border-white shadow-card">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="energy-photo-img block object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div
        className="energy-photo-grid mx-auto grid max-w-[360px] grid-cols-2 gap-3 md:hidden"
        aria-label="Students exploring energy literacy"
      >
        {photos.map((photo) => (
          <div
            key={`mobile-${photo.src}`}
            className="energy-photo-grid-item flex justify-center"
            style={{ "--photo-tilt": `${photo.mobileTilt}deg` }}
          >
            <div className="energy-photo-frame overflow-hidden rounded-[20px] border-4 border-white shadow-card">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="energy-photo-img block object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
