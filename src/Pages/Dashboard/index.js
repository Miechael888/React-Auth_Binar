import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [login, setLogin] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (res.status == 204) {
          handleClose();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    const deleteToken = localStorage.removeItem("myToken");
    console.log(localStorage.getItem("myToken"));
    if (!deleteToken) {
      setLogin(false);
      navigate("/login");
    } else {
      setLogin(true);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((item) => (
          <div style={{ margin: "10px" }}>
            <p>{item.first_name}</p>
            <img src={item.avatar} />
            <div>
              <Link to={`/detailpage/${item.id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={handleOpen}>Delete</button>
            </div>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {item.first_name}
                </Typography>

                <img src={item.avatar} />

                <button onClick={() => handleDelete(item.id)}>Hapus Data</button>
              </Box>
            </Modal>
          </div>
        ))}
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
