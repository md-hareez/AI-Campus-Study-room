import BookingForm from "../components/BookingForm";

function BookRoom({ bookings, setBookings }) {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Book a Study Room
        </h1>

        <p className="mb-6 mt-2 text-sm text-gray-600 sm:mb-8 sm:text-base">
          Fill in the details below to submit a room booking request.
        </p>

        <BookingForm
          bookings={bookings}
          setBookings={setBookings}
        />
      </div>
    </div>
  );
}

export default BookRoom;
