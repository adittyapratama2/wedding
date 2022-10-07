import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [guests, setGuests] = useState([]);

  const getGuests = async () => {
    const response = await axios.get(
      "https://backend.temira-adittya.my.id/api/v1/guests/"
    );
    setGuests(response.data);
  };

  useEffect(() => {
    getGuests();
  }, []);

  return (
    <div>
      <h1>Daftar Tamu</h1>

      <ul>
        {guests.map((guest) => (
          <li>
            <Link to={`/guest/${guest.slug}`}>{guest.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
