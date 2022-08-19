import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [data, setData] = useState({});
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const param = useParams();
  const id = param.id;

  const payload = {
    firstName: firstName,
    email: email,
  };

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleEdit = (e) => {
    e.preventDefault();

    const payload = {
      firstName: firstName,
      email: email,
    };

    axios
      .put(`https://reqres.in/api/users/${id}`, payload)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Halaman Detail</h1>
      {!!Object.keys(data).length && (
        <div style={{ width: "100%" }}>
          <div style={{ width: "400px", margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>{data.first_name}</p>
              <div style={{ width: "100px" }}>
                <img src={data.avatar} />
              </div>
              <label>Name</label>
              <input onChange={handleFirstName} type="text" placeholder={data.first_name} />
              <label>Email</label>
              <input onChange={handleEmail} type="text" placeholder={data.email} />
            </div>
            <div style={{ display: "flex", paddingTop: "10px" }}>
              <button onClick={(e) => handleEdit(e)}>Edit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
