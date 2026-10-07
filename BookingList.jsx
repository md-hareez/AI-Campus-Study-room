import BookingCard from "./BookingCard";

function BookingList({ bookings }) {
  if (bookings.length === 0) {
    return (
      <div className="rounded-lg bg-white p-6 text-center shadow-md sm:p-8">
        <p className="text-sm text-gray-500 sm:text-base">
          You have no bookings yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {bookings.map((booking) => (
        <BookingCard
          key={booking.id}
          booking={booking}
        />
      ))}
    </div>
  );
}

export default BookingList;
