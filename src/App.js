import React, { useState } from "react";

import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import MainTemplate from "./components/MainTempate/MainTemplate";
import ArbitratorSearch from "./components/ArbitratorSearch/ArbitratorSearch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/ProfilePage/Profile";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainTemplate />} />
        <Route path="arbitrator/search/" element={<ArbitratorSearch />} />
        <Route path="/arbitrator/profile/multisearch/" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
