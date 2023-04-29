import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { Login } from "./Components/Login";
function App() {
  const [openHeader, setOpenHeader] = useState(false);
  const addOpen = () => {
    setOpenHeader(true);
  };

  return (
    <div>
      {openHeader ? (
        <Header
          addOpen={addOpen}
          setOpenHeader={setOpenHeader}
          openHeader={openHeader}
        />
      ) : (
        <Login openHeader={openHeader} setOpenHeader={setOpenHeader} />
      )}
    </div>
  );
}

export default App;
