import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import JavaScript from "./JavaScript/JavaScript";
import Reacts from "./React/Reacts";
import Node from "./Node/Node";
import Frontend from "./Frontend/Frontend";
import Backend from "./Backend/Backend";
import Fullstack from "./Fullstack/Fullstack";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Gaming from './components/Gaming';
import SavedVideos from './components/SavedVideos'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/home" element={<Home/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/gaming" element={<Gaming/>}/>
        <Route path="/saved-videos" element={<SavedVideos/>}/>
          <Route path="/javascript" element={<JavaScript />} />
          <Route path="/react" element={<Reacts />} />
          <Route path="/node" element={<Node />} />
          <Route path="/frontend" element={<Frontend/>}/>
          <Route path="/backend" element={<Backend/>}/>
          <Route path="/fullstack" element={<Fullstack/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
