import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Story from './pages/Story';
import Team from './pages/Team';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/QuantClub'} element={<Home/>}/>
        {/* <Route path={'/story'} element={<Story/>}/> */}
        <Route path={'/QuantClub/team'} element={<Team/>}/>
        <Route path={'/QuantClub/projects'} element={<Projects/>}/>
        <Route path={'/QuantClub/blog'} element={<Blog/>}/>
        {/* <Route path={'/contacts'} element={<Contacts/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
