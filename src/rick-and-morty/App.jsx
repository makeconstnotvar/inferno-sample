import React from 'react';
import {Provider} from "mobx-react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./Layout";
import {LandingPage} from "./pages/LandingPage";
import {stores} from "stores/stores";
import {createRoot} from "react-dom/client";
import {CharactersPage} from "./pages/CharactersPage";
import {LocationsPage} from "./pages/LocationsPage";
import {EpisodesPage} from "./pages/EpisodsPage";


const App = () => {
  return (
    <Provider {...stores}>
      <BrowserRouter basename='/rick-and-morty'>
        <Layout>
          <Routes>
            <Route path="/" index element={<LandingPage/>}/>
            <Route path="/characters" element={<CharactersPage/>}/>
            <Route path="/locations" element={<LocationsPage/>}/>
            <Route path="/memory" element={<EpisodesPage/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App/>);