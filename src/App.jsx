import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Films from "./pages/Films";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Vehicles from "./pages/Vehicles";
import Species from "./pages/Species";
import Starships from "./pages/Starships";

const App = () => {
  return (
    <>
      <Routes>
         <Route path="/" element={<MainLayout />}>
           <Route index element={<Home/>} />
           <Route path="films" element={<Films />} />
           <Route path="people" element={<People />} />
           <Route path="planets" element={<Planets />} />
           <Route path="vehicles" element={<Vehicles />} />
           <Route path="species" element={<Species />} />
           <Route path="starships" element={<Starships />} />


         </Route>
      </Routes>

      



    </>
  );
};

export default App;
