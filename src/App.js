import { Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import FormPage from "./pages/FormPage";
import Home from "./pages/Home"
import BootstrapTable from "./pages/BootstrapTable";

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="container">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<BootstrapTable />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>  
        </div>
    </div>
  );
}

export default App;
