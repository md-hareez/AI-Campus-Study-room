import { useState } from "react";
import { rooms } from "../data/rooms";
import SearchBar from "../components/Searchbar";
import RoomList from "../components/Roomlist";

function Rooms() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRooms = rooms.filter((room) => {
    const search = searchTerm.toLowerCase();

    return (
      room.name.toLowerCase().includes(search) ||
      room.building.toLowerCase().includes(search)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Study Rooms
        </h1>

        <p className="mt-2 mb-6 text-sm text-gray-600 sm:text-base">
          Search and find a suitable study room.
        </p>

        <SearchBar
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
        />

        <RoomList rooms={filteredRooms} />
      </div>
    </div>
  );
}

export default Rooms;
