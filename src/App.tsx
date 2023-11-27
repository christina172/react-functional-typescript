import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Navbar } from "components/Navbar";
import { Characters } from "app/characters/Characters";
import { Locations } from "app/locations/Locations";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
