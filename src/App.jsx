import "./components/styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main_Content from "./components/Main_Content/Main_content";
import CardContent from "./components/Card/CardContent";
import Footer from "./components/Footer/Footer";
import Missing from "./components/Missing/Missing";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Main_Content />} />
          <Route path="/game" element={<CardContent />} />
          <Route path="/*" element={<Missing />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
