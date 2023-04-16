import Signup from "./components/Signup";
import Home from "./components/Home";
import Books from "./components/Books/Books";
import CreateBook from "./components/Books/CreateBook";
import ViewBook from "./components/Books/ViewBook";
import RootLayout from "./layouts/RootLayout";
import ProtectedRoute from "./components/Redirect/ProtectedRoute";
import RedirectRoute from "./components/Redirect/RedirectRoute";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Navbar from "./components/Headers/Navbar";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar/Sidebar";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='/' element={<UserLayout />}>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/get-started'
          element={
            <RedirectRoute>
              <LandingPage />
            </RedirectRoute>
          }
        />
        <Route
          path='/login'
          element={
            <RedirectRoute>
              <Login />
            </RedirectRoute>
          }
        />
        <Route
          path='/signup'
          element={
            <RedirectRoute>
              <Signup />
            </RedirectRoute>
          }
        />
      </Route>
      <Route path='admin' element={<AdminLayout />}>
        <Route path='books' element={<Books />} />
        <Route path='add-book/:id' element={<CreateBook />} />
        <Route path='view-book/:id' element={<ViewBook />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
