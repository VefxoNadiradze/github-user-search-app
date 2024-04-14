import { useState } from "react";
import Header from "./Components/Header";
import User from "./Components/User";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";

function App() {
  const [theme, setTheme] = useState<boolean>(true);
  const [user, setUser] = useState<UserData | null>(null);
  const [userSearch, setUserSearch] = useState<string>("");
  const [error, setError] = useState<string>("");
  return (
    <>
      <GlobalStyles themes={theme} />
      <Header
        setTheme={setTheme}
        theme={theme}
        setUserSearch={setUserSearch}
        userSearch={userSearch}
        setUser={setUser}
        error={error}
        setError={setError}
      />
      <User theme={theme} user={user} setUser={setUser} setError={setError} />
    </>
  );
}

export default App;
