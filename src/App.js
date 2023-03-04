import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main_page from './pages/main_page'
function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main_page/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
