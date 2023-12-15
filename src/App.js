import Bypriority from "./components/DisplayBody/Bypriority";
import Bystatus from "./components/DisplayBody/Bystatus";
import Byuser from "./components/DisplayBody/Byuser";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import './index.css';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="maincontainer" className="mainc">
        <Routes>
          <Route path="/" element={<Bystatus />} />
          <Route path="/user" element={<Byuser />} />
          <Route path="/priority" element={<Bypriority />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
