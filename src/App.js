import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import AddContent from "./pages/AddContent";
import SearchResults from "./components/SearchResults";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/add-content" element={<AddContent />} />
                    <Route path="/search" element={<SearchResults />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
