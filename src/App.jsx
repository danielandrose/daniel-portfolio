import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
function App() {
    return (
        <div className="main">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/skills' element={<Skills />} />
                </Routes>
            </BrowserRouter>


        </div>
    )
}

export default App
