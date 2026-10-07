import BookingList from "../components/BookingList";

function MyBookings({ bookings }) {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          My Bookings
        </h1>

        <p className="mb-6 mt-2 text-sm text-gray-600 sm:mb-8 sm:text-base">
          View your submitted study room bookings.
        </p>

        <BookingList bookings={bookings} />
      </div>
    </div>
  );
}

export default MyBookings;
