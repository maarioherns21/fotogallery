import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import FotoGallery from "../FotoGallery/FotoGallery";
import PictureGallery from "../PictureGallery/PictureGallery";
import DetailPage from "../DetailPage/DetailPage";

export default function App() {
  return (
    <Routes>
     <Route path="/" element={ <Home />} />
     <Route path="/Gallery" element={<FotoGallery/>} />
     <Route path="/Pictures" element={<PictureGallery />} />
     <Route path="/Detail" element={<DetailPage />} />
    </Routes>
     
  );
}
