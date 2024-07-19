import React, { Fragment, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import APPCONTEXT from "../AppContext";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(APPCONTEXT);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    };

    fetch("http://127.0.0.1:5000/signup", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setUser(name);
        navigate("/login");
      })
      .catch((error) => console.error("Error:", error));
  };

  const containerStyle = {
    backgroundImage: "url('https://as1.ftcdn.net/v2/jpg/04/98/02/52/1000_F_498025258_4H1xIgncDvMDsy1o9nJ4Lkpau2ajsGjx.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    margin: "0",
  };

  return (
    <Fragment>
      <div style={containerStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "350px", color: "rgba(202, 143, 115, 0.651)", fontStyle: "italic" }}>
          Let the cards fall in your favor &#x1F609;
        </h2>
        <div>
          <form
            style={{
              width: "240px",
              height: "250px",
              marginTop: "10px",
              justifyContent: "center",
              backgroundColor: "white",
              textAlign: "center",
              borderRadius: "15px",
              marginLeft: "20px",
              padding: "10px",
              marginRight: "120px",
            }}
            onSubmit={handleSubmit}
          >
            <div>
              <h3 style={{ textAlign: "left", marginLeft: "10px", marginRight: "100px", marginTop: "5px" }}>Hi,</h3>
              <h3 style={{ fontSize: "16px", fontWeight: "bold", textDecoration: "none", color: "black", marginBottom: "10px", marginTop: "0px", marginLeft: "10px", marginRight: "10px", cursor: "pointer" }}>
                Sign up with us today..!!
              </h3>
              <input
                style={{
                  justifyContent: "center",
                  display: "block",
                  marginLeft: "40px",
                  border: "0",
                  borderRadius: "60px",
                  backgroundColor: "lightgray",
                  padding: "9px",
                  fontWeight: "lighter",
                  fontSize: "10px",
                  fontStyle: "italic",
                  marginBottom: "10px",
                  width: "150px",
                }}
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                style={{
                  justifyContent: "center",
                  display: "block",
                  marginLeft: "40px",
                  border: "0",
                  borderRadius: "60px",
                  backgroundColor: "lightgray",
                  padding: "9px",
                  fontWeight: "lighter",
                  fontSize: "10px",
                  fontStyle: "italic",
                  marginBottom: "10px",
                  width: "150px",
                }}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                style={{
                  justifyContent: "center",
                  display: "block",
                  marginLeft: "40px",
                  border: "0",
                  borderRadius: "60px",
                  backgroundColor: "lightgray",
                  padding: "9px",
                  fontWeight: "lighter",
                  fontSize: "10px",
                  fontStyle: "italic",
                  marginBottom: "-10px",
                  width: "150px",
                }}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              style={{
                backgroundColor: "blue",
                fontSize: "8px",
                padding: "9px",
                width: "140px",
                borderRadius: "60px",
                border: "0",
                background: "linear-gradient(to right, rgba(0, 0, 255, 1) 30%, rgba(0, 0, 255, 0.3) 70%)",
                marginTop: "20px",
                width: "160px",
              }}
              type="submit"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Signup;


