import Signup from "./components/Signup";
import Books from "./components/Books/Books";
import CreateBook from "./components/Books/CreateBook";
import ViewBook from "./components/Books/ViewBook";
import FilterBook from "./components/Books/FilterBook";
import FilterResultBook from "./components/Books/FilterResultBook";
import Pinjam from "./components/Pinjam/Pinjam";
import UserPinjam from "./components/Pinjam/UserPinjam";
import RootLayout from "./layouts/RootLayout";
import ProtectedRoute from "./components/Redirect/ProtectedRoute";
import ProtectedRouteAdmin from "./components/Redirect/ProtectedRouteAdmin";
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
import Homepage from "./components/Homepage";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import EditProfile from "./components/EditProfile";
import BookListComponent from "./components/Pinjam/BookListComponent";
import ListBookComponent from "./components/Books/ListBookComponent";

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
          path='/editprofile'
          element={
            <ProtectedRoute>
              <EditProfile />
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
        <Route
          path='/books'
          element={
            <RedirectRoute>
              <Books />
            </RedirectRoute>
          }
        />
        <Route
          path='/books/filter'
          element={
            <RedirectRoute>
              <FilterBook />
            </RedirectRoute>
          }
        />
        <Route
          path='/books/filter/result'
          element={
            <RedirectRoute>
              <FilterResultBook />
            </RedirectRoute>
          }
        />
      </Route>
      <Route path='admin' element={<AdminLayout/>}>
        <Route path='books' element={<ProtectedRouteAdmin><ListBookComponent /></ProtectedRouteAdmin>} />
        <Route path='add-book/:id' element={<ProtectedRouteAdmin><CreateBook/></ProtectedRouteAdmin>} />
        <Route path='view-book/:id' element={<ProtectedRouteAdmin><ViewBook /></ProtectedRouteAdmin>} />
        <Route path='pinjam/book/:id' element={<BookListComponent/>}/>
        <Route path='pinjam' element={<Pinjam />} />
      </Route>
      <Route path='pinjam' element={<AdminLayout />}>
        <Route path='me' element={<UserPinjam />} />
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
