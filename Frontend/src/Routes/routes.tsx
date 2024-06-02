import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BooksList, BooksCreate, BooksUpdate, BooksDetail } from '../Pages/Books';

// import Home from "../Pages/Home";
import Login from "../Pages/Login";

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BooksList />} />
                    <Route path="/create" element={<BooksCreate />} />
                    <Route path="/update/:id" element={<BooksUpdate />} />
                    <Route path="/detail/:id" element={<BooksDetail />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default Router;