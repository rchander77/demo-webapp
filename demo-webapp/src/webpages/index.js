import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
} from "react-router-dom";
import Home from './home';
import User from './user';
import Restaurant from "./restaurant";
import Organization from "./organization";
const Webpages = () => {
    return(
         <Router>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/restaurants" element={<Restaurant />} />
                <Route path="/organizations" element={<Organization />} />
                <Route path="/user" element={<User />} />

        </Routes>

            </Router>
    );
};
export default Webpages;