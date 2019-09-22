import React from "react";

//styles
import * as S from "./styles";
import background from "./assets/background.svg";

// custom components

// imports
import Routes from "./config/routes";

function App() {

  return (
    <div className="App">
      <S.Background src={background} />
      <Routes />
    </div>
  );
}

export default App;