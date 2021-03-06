import React, { useEffect, useState } from "react";

import Axios from "axios";

import "./Header.css";
const Header = () => {
  const [thought, setThought] = useState("");

  useEffect(() => {
    Axios.get(
      "http://backend-env.eba-mzkpazfp.ap-south-1.elasticbeanstalk.com/thought"
    ).then((res) => {
      // console.log(res.data.thought.thought);
      setThought(res.data.thought.thought);
    });
  }, []);
  return (
    <div className="header">
      <div className="quote">
        <p>"{thought}"</p>
      </div>
    </div>
  );
};

export default Header;
