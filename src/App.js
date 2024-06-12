
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
