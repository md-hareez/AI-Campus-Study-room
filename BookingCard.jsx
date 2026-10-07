function BookingCard({ booking }) {
  return (
    <div className="rounded-lg bg-white p-5 shadow-md sm:p-6">
      <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
        {booking.room}
      </h2>

      <div className="mt-4 space-y-2 text-sm text-gray-600 sm:text-base">
        <p>
          <span className="font-medium">Student:</span>{" "}
          {booking.studentName}
        </p>

        <p>
          <span className="font-medium">Date:</span>{" "}
          {booking.date}
        </p>

        <p>
          <span className="font-medium">Time:</span>{" "}
          {booking.time}
        </p>

        <p>
          <span className="font-medium">Students:</span>{" "}
          {booking.students}
        </p>
      </div>

      <div className="mt-4 inline-block rounded-full bg-green-100 px-3 py-1 text-xs text-green-700 sm:text-sm">
        Booking Submitted
      </div>
    </div>
  );
}

export default BookingCard;
