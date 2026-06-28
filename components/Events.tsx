export default function Events() {
  const events = [
    "Weddings",
    "Sangeets",
    "Birthday Parties",
    "Concerts",
    "College Fests",
    "Brand Activations",
    "Photoshoots",
    "Club Nights",
  ];

  return (
    <section className="bg-[#F9EDF0] py-32">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <p className="uppercase tracking-[4px] text-[#C13494] mb-4">
          WHERE WE SHINE
        </p>

        <h2 className="text-3xl md:text-6xl font-light text-[#700342] mb-8 md:mb-20">
          Every celebration deserves
          <br />
          a little sparkle.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {events.map((event) => (

            <div
              key={event}
              className="bg-white rounded-[25px] p-6 sm:p-8 shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-300 cursor-pointer w-full max-w-[360px] mx-auto sm:mx-0"
            >

              <div className="w-12 h-12 rounded-full bg-[#C13494]/20 mb-4"></div>

              <h3 className="text-xl md:text-2xl text-[#700342] mb-3">
                {event}
              </h3>

              <p className="text-gray-600">
                Placeholder description.
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}