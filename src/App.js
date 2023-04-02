import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Books from "./components/Books/Books";
import CreateBook from "./components/Books/CreateBook";
import ViewBook from "./components/Books/ViewBook";
import RootLayout from "./layouts/RootLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route
        path='/'
        element={
          <ProtectedRoute user={null}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path='/login' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/books' element={<Books />} />
      <Route path='/add-book/:id' element={<CreateBook />} />
      <Route path='/view-book/:id' element={<ViewBook />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
