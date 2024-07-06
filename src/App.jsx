import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonsView from "./views/PersonsView";
import PersonsDetailView from "./views/PersonsDetailView";
import NewPersonView from "./views/NewPersonView";
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
        </Routes>
      </Router>
    </>
  )
}

export default App