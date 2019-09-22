import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// styles
import * as S from "./styles";

// custom components

export default function Home() {
  const [something, setSomething] = useState('123');

  useEffect(() => {
    // Similar to componentDidMount and componentDidUpdate
  });

  return (
    <>
      <Link className="profile" to={`/profile/${something}`}>
        <span style={{ marginLeft: "8px" }}>profile</span>
      </Link>
    </>
  );
}

