import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import AddSong from './components/AddSong';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addSong' element={<AddSong />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
