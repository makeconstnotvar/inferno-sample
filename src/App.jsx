import {Provider} from "inferno-mobx";
import {BrowserRouter, Route} from "inferno-router";
import {Page1} from "./pages/Page1";
import {Page2} from "./pages/Page2";

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <MainLayout>
          <Route component={Page1}/>
          <Route component={Page2}/>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
