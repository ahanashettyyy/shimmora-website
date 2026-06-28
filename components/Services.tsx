export default function Services() {
  return (

    <section
      id="services"
      className="bg-[#700342] py-32"
    >

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <h2 className="text-3xl md:text-6xl text-[#F9EDF0] font-light text-center mb-12 md:mb-20">
          What We Do
        </h2>

        <div className="h-4 md:h-6" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {[
            "Face Glitter",
            "Body Glitter Art",
            "Face Painting",
          ].map((service) => (

            <div
              key={service}
              className="bg-[#F9EDF0] rounded-[30px] overflow-hidden w-full max-w-[360px] mx-auto sm:mx-0"
            >

              <div className="h-40 sm:h-52 md:h-64 bg-[#C13494]/20 flex items-center justify-center">

                IMAGE

              </div>

              <div className="p-6 sm:p-8">

                <h3 className="text-xl md:text-2xl text-[#700342] mb-4 text-center sm:text-left">
                  {service}
                </h3>

                <p className="text-gray-700 leading-7 text-center sm:text-left">
                  Short description goes here.
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}