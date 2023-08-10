import './App.css';
import { Routes,Route } from 'react-router-dom';
import Layout from './component/Layout';
import Public from './component/Public';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Public/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
