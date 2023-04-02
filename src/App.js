import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Books from "./components/Books/Books";
import CreateBook from "./components/Books/CreateBook";
import ViewBook from "./components/Books/ViewBook";
import RootLayout from "./layouts/RootLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import RedirectRoute from "./components/RedirectRoute";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route
        path='/'
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path='/login'
        element={
          <RedirectRoute>
            <SignIn />
          </RedirectRoute>
        }
      />
      <Route
        path='/signup'
        element={
          <RedirectRoute>
            <SignUp />
          </RedirectRoute>
        }
      />
      <Route path='/books' element={<Books />} />
      <Route path='/add-book/:id' element={<CreateBook />} />
      <Route path='/view-book/:id' element={<ViewBook />} />
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
