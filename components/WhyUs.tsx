export default function WhyUs() {
  const stats = [
    {
      number: "50+",
      title: "Events",
      desc: "Successfully completed",
    },
    {
      number: "1000+",
      title: "Happy Guests",
      desc: "Smiles created",
    },
    {
      number: "100%",
      title: "Premium Products",
      desc: "Skin-safe glitter",
    },
    {
      number: "★★★★★",
      title: "Client Love",
      desc: "Highly recommended",
    },
  ];

  return (
    <section className="bg-[#700342] py-32">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <p className="uppercase tracking-[4px] text-[#F9EDF0] mb-4">
          WHY CHOOSE US
        </p>

        <h2 className="text-3xl md:text-6xl text-white font-light mb-12 md:mb-20">
          Creating unforgettable
          <br />
          moments with sparkle.
        </h2>

        <div className="h-4 md:h-6" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (

            <div
              key={item.title}
              className="bg-[#F9EDF0] rounded-[30px] p-8 w-full max-w-[320px] mx-auto sm:mx-0"
            >

              {item.title === "Client Love" ? (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#700342]"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#700342" />
                      </svg>
                    ))}
                  </div>

                  <h4 className="text-xl md:text-2xl text-[#700342] mb-2">
                    {item.title}
                  </h4>

                </>
              ) : (
                <>
                  <h3 className="text-4xl md:text-5xl text-[#700342] mb-4">
                    {item.number}
                  </h3>

                  <h4 className="text-xl md:text-2xl text-[#700342] mb-2">
                    {item.title}
                  </h4>
                </>
              )}

              <p className="text-gray-600">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}