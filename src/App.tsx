import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Tooltip from "./component/tooltip";
import Keyhighlights from "./pages/keyhighlights";
import MapComp from "./pages/map";
import store from "./store/store";

function App() {
  return (
    <div className="root  ">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Keyhighlights />} />
          <Route path="/map" element={<MapComp />} />
          <Route
            path="/tooltip"
            element={
              <>
                <Tooltip />
              </>
            }
          />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
