
import React, { Fragment ,useState,useContext} from "react";
import { useNavigate } from "react-router-dom"
import APPCONTEXT from "../AppContext";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate=useNavigate()
  const { token,setToken} = useContext(APPCONTEXT);

  const handleSubmit = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({ email, password });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        "http://127.0.0.1:5000/login",
        requestOptions
      );
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }

      console.log(result);
      setToken(result[1].token)
      navigate("/home")
    } catch (error) {
      console.error("Login error:", error.message);
      setMessage(error.message); 
    }
  };


  const containerStyle= {
    backgroundImage: "url('https://as1.ftcdn.net/v2/jpg/04/98/02/52/1000_F_498025258_4H1xIgncDvMDsy1o9nJ4Lkpau2ajsGjx.jpg')",
    backgroundSize:'cover', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', 
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100vh',
    width:'100vw',
    margin: '0',
   
  }


  return (
    <Fragment>
    <div style={containerStyle}>
      <h2 style={{
           textAlign: 'center',
           marginBottom: '350px', 
           alignItems: 'flex-end',
           marginRight: '-200px',
           color: 'rgba(202, 143, 115, 0.651)',
           fontStyle: 'italic'
      }}>
        Let's do this... &#x1F609;</h2>
      <div>
      <form style={{
          width: '240px',
          height: '250px',
          marginTop: '10px',
          justifyContent: 'center',
          backgroundColor: 'white',
          textAlign: 'center',
          borderRadius: '15px',
          marginLeft: '20px',
          padding: '5px',
          marginRight: '120px'
      }}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <h3 style={{textAlign:'left', marginLeft:'10px', marginRight:'100px', marginTop:'5px'}}>Hey,</h3>
          <h3 style={{fontSize:'16px', fontWeight:'bold', textDecoration:'none', color:'black', marginBottom:'10px', marginTop:'0px', marginLeft:'10PX', marginRight:'10px', cursor:'pointer'}}>Welcome..!!</h3>
        </div>
          <div>
          <input style={{
                justifyContent: 'center',
                display: 'block',
                marginLeft: '40px',
                border: '0',
                borderRadius: '60px',
                backgroundColor:'lightgray',
                padding: '9px',
                fontWeight: 'lighter',
                fontSize: '10px',
                fontStyle: 'italic',
                marginBottom: '10px',
                width:'150px'
                
          }}

            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
          <div>
          <input style={{
                justifyContent: 'center',
                display: 'block',
                marginLeft: '40px',
                border: '0',
                borderRadius: '60px',
                backgroundColor:'lightgray',
                padding: '9px',
                fontWeight: 'lighter',
                fontSize: '10px',
                fontStyle: 'italic',
                marginBottom: '-20px',
                width:'150px',
                marginTop:'15px'
          }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button style={{
             backgroundColor: 'blue',
             fontSize: '10px',
             padding: '9px',
             width: '140px',
             borderRadius: '60px',
             border: '0',
             background: 'linear-gradient(to right, rgba(0, 0, 255, 1) 30%, rgba(0, 0, 255, 0.3) 70%)',
             marginTop: '45px',
             width:'160px',
             fontWeight:'bold'
        }}
        type="submit">Login</button>
      </form>
      </div>
    </div>
    </Fragment>
  );
}

export default Login;