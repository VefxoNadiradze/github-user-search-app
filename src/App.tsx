import { useState } from "react";
import Header from "./Components/Header";
import User from "./Components/User";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";

function App() {
  const [theme, setTheme] = useState<boolean>(true);
  return (
    <>
      <GlobalStyles themes={theme} />
      <Header setTheme={setTheme} theme={theme} />
      <User />
    </>
  );
}

export default App;
