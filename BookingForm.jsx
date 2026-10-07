import { useState } from "react";
import { rooms } from "../data/rooms";

function BookingForm({ bookings, setBookings }) {
  const [formData, setFormData] = useState({
    studentName: "",
    room: "",
    date: "",
    time: "",
    students: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = {
      id: Date.now(),
      ...formData,
    };

    setBookings([...bookings, newBooking]);

    setFormData({
      studentName: "",
      room: "",
      date: "",
      time: "",
      students: "",
    });

    alert("Booking submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg bg-white p-6 shadow-md"
    >
      <div className="mb-4">
        <label className="mb-2 block font-medium text-gray-700">
          Student Name
        </label>

        <input
          type="text"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-medium text-gray-700">
          Study Room
        </label>

        <select
          name="room"
          value={formData.room}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2"
        >
          <option value="">Select a room</option>

          {rooms
            .filter((room) => room.available)
            .map((room) => (
              <option key={room.id} value={room.name}>
                {room.name} - {room.building}
              </option>
            ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-medium text-gray-700">
          Date
        </label>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-medium text-gray-700">
          Time
        </label>

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 block font-medium text-gray-700">
          Number of Students
        </label>

        <input
          type="number"
          name="students"
          value={formData.students}
          onChange={handleChange}
          min="1"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2"
          placeholder="Enter number of students"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
      >
        Submit Booking
      </button>
    </form>
  );
}

export default BookingForm;
