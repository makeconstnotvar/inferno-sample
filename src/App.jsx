import React from 'react';
import {Provider} from "mobx-react";
import {Router, Route} from "wouter";
import {Layout} from "./Layout";
import {LandingPage} from "./pages/LandingPage";
import {stores} from "stores/stores";
import {createRoot} from "react-dom/client";
import {CharactersPage} from "./pages/CharactersPage";
import {LocationsPage} from "./pages/LocationsPage";
import {EpisodesPage} from "./pages/EpisodesPage";
import {LettersPage} from "./pages/Letters";

const App = () => {
  return (
    <Provider {...stores}>
      <Router>
        <Layout>
          <Route path="/" index element={<LandingPage/>}/>
          <Route path="/characters" element={<CharactersPage/>}/>
          <Route path="/locations" element={<LocationsPage/>}/>
          <Route path="/episodes" element={<EpisodesPage/>}/>
          <Route path="/letters" element={<LettersPage/>}/>
        </Layout>
      </Router>
    </Provider>
  );
}

const container = document.getElementById('root')
const root = createRoot(container);
root.render(<App/>);
