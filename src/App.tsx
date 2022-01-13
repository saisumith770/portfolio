import {
    BrowserRouter,
    Route,
    Routes,
    Link
} from 'react-router-dom'

import { useWindowSize } from './hooks/useWindowSize';

import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Resume from './pages/Resume'
import Nav from './components/general/nav'

export default function App() {
    const { width } = useWindowSize()
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work width={width} />} />
                <Route path="/about" element={<About width={width} />} />
                <Route path="/resume" element={<Resume width={width} />} />
            </Routes>
            <Nav horizontal={width < 850}>
                <Link to="/" style={{ textDecoration: "none" }}><h4 style={{ marginTop: width < 850 ? "" : "50px" }}>HOME</h4></Link>
                <Link to="/work" style={{ textDecoration: "none" }}><h4>WORK</h4></Link>
                <Link to="/about" style={{ textDecoration: "none" }}><h4>ABOUT</h4></Link>
                <Link to="/resume" style={{ textDecoration: "none" }}><h4>RESUME</h4></Link>
            </Nav>
        </BrowserRouter>
    )
}