import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Gallery() {
  const images = [
    {
      src: "gallery1.jpg",
      title: "Wedding",
    },
    {
      src: "gallery2.jpg",
      title: "Concert",
    },
    {
      src: "gallery3.jpg",
      title: "Birthday",
    },
    {
      src: "gallery4.jpg",
      title: "Festival",
    },
    {
      src: "gallery5.jpg",
      title: "Corporate Event",
    },
    {
      src: "gallery6.jpg",
      title: "Face Art",
    },
  ];

  return (
    <section
      id="gallery"
      className="bg-[#F9EDF0] py-40"
    >
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">

        <p className="uppercase tracking-[4px] text-[#C13494] mb-4">
          OUR WORK
        </p>

        <h2 className="text-3xl md:text-6xl text-[#700342] mb-12 md:mb-16">
          Gallery
        </h2>

        <div className="h-4 md:h-6" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((image, index) => (

            <div
              key={index}
              className={`relative overflow-hidden rounded-[32px] group cursor-pointer aspect-[4/3]`}
            >

              <Image
                src={`/images/${image.src}`}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

              {/* Text */}
              <div
                className="
                  absolute
                  bottom-8
                  left-8
                  text-white
                  opacity-0
                  translate-y-5
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-500
                "
              >

                <h3 className="text-3xl mb-2">
                  {image.title}
                </h3>

                <p className="flex items-center gap-2 text-lg">
                  View

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}