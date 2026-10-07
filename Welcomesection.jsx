import { Link } from "react-router-dom";

function WelcomeSection() {
  return (
    <section className="rounded-2xl bg-blue-700 px-5 py-12 text-center text-white sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
        Welcome to Campus Study Rooms
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
        Find a suitable study room for group discussions,
        project work, and study sessions.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
        <Link
          to="/rooms"
          className="rounded-lg bg-white px-6 py-3 font-medium text-blue-700 hover:bg-blue-50"
        >
          View Rooms
        </Link>

        <Link
          to="/book"
          className="rounded-lg border border-white px-6 py-3 font-medium text-white hover:bg-blue-600"
        >
          Book a Room
        </Link>
      </div>
    </section>
  );
}

export default WelcomeSection;
