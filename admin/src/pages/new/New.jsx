import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const New = ({ inputs, title }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [tag_name, setTagName] = useState("");
  const [guest, setGuest] = useState("");
  const [status, setStatus] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const saveGuest = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/v1/guests", {
        name: name,
        address: address,
        tag_name: tag_name,
        guest: guest,
        status: status,
      });
      navigate("/guests");
    } catch (err) {
      setMsg(err.response.data.msg);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Tambah Daftar Tamu</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={saveGuest}>
              <p>{msg}</p>
              <div className="formInput">
                <label>Nama Tamu</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama Tamu"
                />
              </div>
              <div className="formInput">
                <label>Alamat Tamu</label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Alamat Tamu"
                />
              </div>
              <div className="formInput">
                <label>Nama Tag</label>
                <input
                  type="text"
                  value={tag_name}
                  onChange={(e) => setTagName(e.target.value)}
                  placeholder="Nama Tag Tamu"
                />
              </div>
              <div className="formInput">
                <label>Tamu Dari</label>
                <select
                  value={guest}
                  onChange={(e) => setGuest(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value="Temira">Temira</option>
                  <option value="Adittya">Adittya</option>
                </select>
              </div>
              <div className="formInput">
                <label>Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>Pilih</option>
                  <option value="Hadir">Hadir</option>
                  <option value="Tidak Hadir">Tidak Hadir</option>
                </select>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
