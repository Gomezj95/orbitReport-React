import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import { useState } from "react";
import satData from "./components/satData";

function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) =>
    data.orbitType))]
  const fitlerByType = (currentTyoe) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbit === currentType;
    });
    setSat(displaySats)
  };
  return (
    <div>
      <Banner />
      <Buttons 
      fitlerByType={fitlerByType}
      setSat={setSat}
      displaySats={displaySats}
      />
      <Table sat={sat}/>
    </div>
  );
}

export default App;
