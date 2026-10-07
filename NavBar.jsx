import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-700 px-4 py-4 text-white sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        
        <Link
          to="/"
          className="text-center text-xl font-bold sm:text-left"
        >
          Campus Study Rooms
        </Link>

        <div className="flex flex-wrap justify-center gap-3 text-sm sm:gap-5 sm:text-base">
          <Link
            to="/"
            className="rounded px-2 py-1 hover:bg-blue-600"
          >
            Home
          </Link>

          <Link
            to="/rooms"
            className="rounded px-2 py-1 hover:bg-blue-600"
          >
            Rooms
          </Link>

          <Link
            to="/book"
            className="rounded px-2 py-1 hover:bg-blue-600"
          >
            Book Room
          </Link>

          <Link
            to="/bookings"
            className="rounded px-2 py-1 hover:bg-blue-600"
          >
            My Bookings
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
