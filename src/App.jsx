import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../src/cssFiles/App.css'
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects.jsx"
function App() {
    return (
        <div className="main">
            <BrowserRouter>
                <NavBar />
                <Home/>
                <Skills/>
                <Projects/>
                {/*<Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/projects' element={<Projects />} />
                </Routes>*/}
            </BrowserRouter>
        </div>
    )
}

export default App
