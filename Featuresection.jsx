function FeatureSection() {
  const features = [
    {
      title: "Find Rooms",
      description:
        "View available study rooms across campus.",
    },
    {
      title: "Search Easily",
      description:
        "Search rooms by name or building.",
    },
    {
      title: "Book a Room",
      description:
        "Submit a booking request for your study session.",
    },
    {
      title: "Track Bookings",
      description:
        "View all your submitted room bookings.",
    },
  ];

  return (
    <section className="mt-8 sm:mt-10">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 sm:text-3xl">
        What You Can Do
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-lg bg-white p-5 text-center shadow-md sm:p-6"
          >
            <h3 className="text-lg font-bold text-blue-700">
              {feature.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
