import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonsView from "./views/PersonsView";
import PersonsDetailView from "./views/PersonsDetailView";
import NewPersonDetailView from "./views/NewPersonDetailView";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PersonsView />} />
          <Route path="/persons/:id" element={<PersonsDetailView />}></Route>
          <Route path="/persons/new" element={<NewPersonDetailView />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App