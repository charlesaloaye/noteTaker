import "./App.css";

import {
  createBrowserRouter as Router,
  createRoutesFromElements as Elements,
  RouterProvider,
  Route,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import AddPage from "./pages/AddPage";
import NotePage from "./pages/NotePage";
import { NoteContextProvider } from "./context/NoteContext";

const App = () => {
  const router = Router(
    Elements(
      <>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route exact='/new-note' path='/new-note' element={<AddPage />} />
        <Route path='/note/:id' element={<NotePage />} />
      </>
    )
  );
  return (
    <NoteContextProvider>
      <RouterProvider router={router} />
    </NoteContextProvider>
  );
};

export default App;
