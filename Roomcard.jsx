function RoomCard({ room }) {
  return (
    <div className="flex h-full flex-col rounded-lg bg-white p-5 shadow-md transition hover:shadow-lg sm:p-6">
      <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
        {room.name}
      </h2>

      <div className="mt-3 space-y-1">
        <p className="text-sm text-gray-600 sm:text-base">
          Building: {room.building}
        </p>

        <p className="text-sm text-gray-600 sm:text-base">
          Capacity: {room.capacity} students
        </p>
      </div>

      <div className="mt-auto pt-4">
        <span
          className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
            room.available
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {room.available ? "Available" : "Unavailable"}
        </span>
      </div>
    </div>
  );
}

export default RoomCard;
