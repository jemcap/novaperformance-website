import Image from "next/image";

const Carousel = () => {
  const heroImages: string[] = [
    "/carousel_img_1.png",
    "/carousel_img_2.png",
    "/carousel_img_3.png",
    "/nova_group.jpg",
    "/carousel_img_4.png",
    "/carousel_img_5.png",
    "/carousel_img_6.png",
    "/carousel_img_7.png",
    "/carousel_img_8.png",
    "/carousel_img_9.png",
    "/carousel_img_10.png",
    "/carousel_img_11.png",
    "/carousel_img_14.png",
  ];
  return (
    <div className="hidden lg:block columns-2 md:columns-3 gap-5 space-y-5">
      {heroImages.map((image, i) => (
        <Image
          key={i}
          src={image}
          alt={`Gallery Image ${i + 1}`}
          width={240}
          height={240}
          priority
          className="w-60 mb-4 rounded-lg break-inside-avoid h-auto relative z-0 transition-all duration-300 hover:scale-110"
          aria-label="images of furnitures"
        />
      ))}
    </div>
  );
};

export default Carousel;
