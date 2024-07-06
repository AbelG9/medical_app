import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonsView from "./views/PersonsView";
import PersonsDetailView from "./views/PersonsDetailView";
import NewPersonView from "./views/NewPersonView";
import SpecialtiesView from "./views/SpecialtiesView";
import SpecialtiesDetailView from "./views/SpecialtiesDetailView";
import NewSpecialtyView from "./views/NewSpecialtyView";
import SpecialistsView from "./views/SpecialistsView";
import SpecialistsDetailView from "./views/SpecialistsDetailView";
import NewSpecialistView from "./views/NewSpecialistView";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PersonsView />} />
          <Route path="/persons" element={<PersonsView />} />
          <Route path="/persons/:id" element={<PersonsDetailView />}></Route>
          <Route path="/persons/new" element={<NewPersonView />}></Route>
          <Route path="/specialties" element={<SpecialtiesView />}></Route>
          <Route path="/specialties/:id" element={<SpecialtiesDetailView />}></Route>
          <Route path="/specialties/new" element={<NewSpecialtyView />}></Route>
          <Route path="/specialists" element={<SpecialistsView />}></Route>
          <Route path="/specialists/:id" element={<SpecialistsDetailView />}></Route>
          <Route path="/specialists/new" element={<NewSpecialistView />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App