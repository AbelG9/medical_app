import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import PersonsView from "./views/PersonsView";
import PersonsDetailView from "./views/PersonsDetailView";
import NewPersonView from "./views/NewPersonView";
import SpecialtiesView from "./views/SpecialtiesView";
import SpecialtiesDetailView from "./views/SpecialtiesDetailView";
import NewSpecialtyView from "./views/NewSpecialtyView";
import SpecialistsView from "./views/SpecialistsView";
import SpecialistsDetailView from "./views/SpecialistsDetailView";
import NewSpecialistView from "./views/NewSpecialistView";
import AppointmentsView from "./views/AppointmentsView";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginView from "./views/LoginView";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<AppointmentsView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/persons" element={<PersonsView />} />
            <Route
              path="/persons/:id"
              element={
                <ProtectedRoute>
                  <PersonsDetailView />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/persons/new"
              element={
                <ProtectedRoute>
                  <NewPersonView />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/specialties" element={<SpecialtiesView />}></Route>
            <Route
              path="/specialties/:id"
              element={
                <ProtectedRoute>
                  <SpecialtiesDetailView />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/specialties/new"
              element={
                <ProtectedRoute>
                  <NewSpecialtyView />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/specialists" element={<SpecialistsView />}></Route>
            <Route
              path="/specialists/:id"
              element={
                <ProtectedRoute>
                  <SpecialistsDetailView />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/specialists/new"
              element={
                <ProtectedRoute>
                  <NewSpecialistView />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/appointments" element={<AppointmentsView />}></Route>
          </Routes>
          <ToastContainer />
        </AuthContextProvider>
      </Router>
    </>
  );
};

export default App;
