import React from "react";

const name = "Krilin";
const avatar =
  "https://avatars.githubusercontent.com/u/62963282?s=400&u=e12977f94d6d196f67e414b0b78ac48707eeec60&v=4";
const status = true;

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="portrait de la peronne" />
      <div>
        <h4 className="name"> {name} </h4>
        <div className="status">
          <p className="status.text">
            <div className="status-online" /> {status ? "online" : "offline"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
