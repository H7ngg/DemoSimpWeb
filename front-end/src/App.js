import React from 'react';
import Layout from "./Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Scientist from './pages/Scientist';
import Achievement from './pages/Achievement';
import NobelPrize from './pages/NobelPrize';
import ScientistDetail from './pages/ScientistDetail'; // Import trang chi tiết
import axios from 'axios';
import AdminScientistList from './pages/admin/AdminScientistList';
import Category from './pages/Category';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/scientist" element={<Scientist />} />
                        <Route path="/achievement" element={<Achievement />} />
                        <Route path="/category" element={<Category />} />
                        <Route path="/nobelprize" element={<NobelPrize />} />
                        <Route path="/scientist/:id" element={<ScientistDetail />} /> {/* Thêm route chi tiết */}
                    </Route>
                    <Route path="admin">
                        <Route path="scientist" />
                        <Route index element={<AdminScientistList />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
