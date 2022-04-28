import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";


function MovieApp() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Detail/>} />
        </Routes>
    </Router>
    )
}

export default MovieApp;
