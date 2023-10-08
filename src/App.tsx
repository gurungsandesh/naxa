import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FileUploadForm from "./pages/form";
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
            path="/form"
            element={
              <>
                <FileUploadForm />
              </>
            }
          />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
