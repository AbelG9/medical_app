import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonsView from "./views/PersonsView";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PersonsView />} />
        </Routes>
      </Router>
    </>
  )
}

export default App