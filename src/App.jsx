import logo from './assets/img_logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LayoutBanner from "./components/layouts/banner/LayoutBanner";
import LayoutCategory from "./components/layouts/category/LayoutCategory";
import LayoutGame from "./components/layouts/games/LayoutGame";

function App() {
  return (
    <div className="App">
        <Header/>
        <LayoutBanner />
        <div className='container-lg'>
            <LayoutCategory/>
            <LayoutGame/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
