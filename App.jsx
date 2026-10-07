import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import BookRoom from "./pages/BookRoom";
import MyBookings from "./pages/MyBookings";

function App() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const savedBookings = localStorage.getItem("bookings");

    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/rooms"
          element={<Rooms />}
        />

        <Route
          path="/book"
          element={
            <BookRoom
              bookings={bookings}
              setBookings={setBookings}
            />
          }
        />

        <Route
          path="/bookings"
          element={<MyBookings bookings={bookings} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
