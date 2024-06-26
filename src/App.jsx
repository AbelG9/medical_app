import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonsView from "./views/PersonsView";
import PersonsDetailView from "./views/PersonsDetailView";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/persons" element={<PersonsView />} />
          <Route path="/persons/:id" element={<PersonsDetailView />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App