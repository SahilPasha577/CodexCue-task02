import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { BlogList } from './MyComp/BlogList';

function App() {
  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<BlogList />} />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
