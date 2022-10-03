import React from 'react';
import {Provider} from "mobx-react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Page1} from "./pages/Page1";
import {Page2} from "./pages/Page2";
import {MainLayout} from "./MainLayout";
import {LandingPage} from "./pages/LandingPage";
import {stores} from "./stores/stores";

const App = () => {
  return (
    <Provider {...stores}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" index element={<LandingPage/>}/>
            <Route path="/page1" element={<Page1/>}/>
            <Route path="/page2" element={<Page2/>}/>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export {App};
