import {
    BrowserRouter,
    Route,
    Routes,
    Link
} from 'react-router-dom'

import { useWindowSize } from './hooks/useWindowSize';

import Home from './pages/Home'
import About from './pages/About'
import Nav from './components/general/nav'

export default function () {
    const { width } = useWindowSize()
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About width={width} />} />
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