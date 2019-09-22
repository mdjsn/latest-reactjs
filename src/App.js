import React, { useState, useEffect } from "react";

//styles
import * as S from "./styles";
import background from "./assets/background.svg";

// custom components

// imports

function App() {
  const [something, setSomething] = useState('');

  useEffect(() => {
    // Similar to componentDidMount and componentDidUpdate
  });

  return (
    <div className="App">
      <S.Background src={background} />
    </div>
  );
}

export default App;