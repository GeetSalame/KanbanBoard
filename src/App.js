import Bypriority from "./components/DisplayBody/Bypriority";
import Bystatus from "./components/DisplayBody/Bystatus";
import Byuser from "./components/DisplayBody/Byuser";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="maincontainer">
        <Routes>
          <Route path="/" element={<Bystatus />} />
          <Route path="/user" element={<Byuser />} />
          <Route path="/priority" element={<Bypriority />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
