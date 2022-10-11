import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../components/table.css";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [guests, setGuests] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);

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
      <Container>
        <br />
        <h1 className="text-center">Daftar Tamu</h1>
        <Form>
          <InputGroup>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari Tamu"
            />
          </InputGroup>
        </Form>
        <br />
        <Table className="table1">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Tamu</th>
              <th>Alamat</th>
              <th>Tamu Dari</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {guests
              .filter((guest) => {
                return search.toLocaleLowerCase() === ""
                  ? guest
                  : guest.name.toLocaleLowerCase().includes(search) ||
                      guest.guest.toLocaleLowerCase().includes(search) ||
                      guest.address.toLocaleLowerCase().includes(search);
              })
              .map((guest, index) => (
                <tr key={guest.id}>
                  <td className="text-center">{index + 1}</td>
                  <td>{guest.name}</td>
                  <td>{guest.address}</td>
                  <td className="text-center">{guest.guest}</td>
                  <td className="text-center">
                    <Link to={`/guest/${guest.slug}`} target="_blank">
                      {guest.slug}
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <br />
      </Container>
    </div>
  );
};

export default HomePage;
