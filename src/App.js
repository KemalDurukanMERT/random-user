import './App.css';
import userIcon from "./assets/free-user.png"
import man from "./assets/man.svg"
import mail from "./assets/mail.svg"
import age from "./assets/growing-up-man.svg"
import map from "./assets/map.svg"
import phone from "./assets/phone.svg"
import password from "./assets/padlock.svg"
import Footer from "./components/Footer"
import axios from "axios";
import { useEffect, useState } from 'react';

const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
 
function App() {

  const [person, setPerson] = useState()

  const getUser = async () => {
    const response = await axios.get("https://randomuser.me/api/")
    console.log(response.data.results[0])
    setPerson(response.data.results[0])
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <main>
      <div className="block bcg-orange">
        <img src={userIcon} alt="user-icon" id="user-icon" />
      </div>
      <div className="block">
        <div className="container">
          <img src={defaultImage} alt="random user" className="user-img" />
          <p className="user-title">My ... is</p>
          <p className="user-value"></p>
          <div className="values-list">
            <button className="icon" data-label="name">
              <img src={man} alt="user" id="iconImg" />
            </button>
            <button className="icon" data-label="email">
              <img src={mail} alt="mail" id="iconImg" />
            </button>
            <button className="icon" data-label="age">
              <img src={age} alt="age" id="iconImg" />
            </button>
            <button className="icon" data-label="street">
              <img src={map} alt="map" id="iconImg" />
            </button>
            <button className="icon" data-label="phone">
              <img src={phone} alt="phone" id="iconImg" />
            </button>
            <button className="icon" data-label="password">
              <img src={password} alt="lock" id="iconImg" />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" type="button">
              new user
            </button>
            <button className="btn" type="button">
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              <tr className="body-tr"></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style={{display: "flex", justifyContent:'center'}}>
        <Footer />
      </div>
    </main>
  );
}

export default App;

{/* <div style={{ display: "flex", justifyContent: "center" }}>
  <Footer />
</div> */}