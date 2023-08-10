
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import RoomList from './pages/RoomList/RoomList';
import RoomDetail from './pages/RoomDetail/RoomDetail';
import { BlogList } from './pages/BlogList/BlogList';
import AddData from './pages/Admin/AddData';
import Booking from './pages/Booking/Booking';

function App() {

  return (

    <>
        <div className="App">
          <Navigation></Navigation>

          <Routes>
            <Route path='/' element={<Home></Home>}>
            </Route>

            <Route path='/about' element={<About></About>}>
            </Route>

            <Route path='/gallery' element={<Gallery></Gallery>}>
            </Route>

            <Route path='/roomlist/roomDT/:roomID' element={<RoomDetail></RoomDetail>}>
            </Route>

            <Route path='/roomlist' element={<RoomList></RoomList>}>
            </Route>

            <Route path='/bloglist' element={<BlogList></BlogList>}>
            </Route>

            <Route path='/booking' element={<Booking></Booking>}>
            </Route>

            <Route path='/edit' element={<AddData></AddData>}>
            </Route>

            <Route path='*' element={<>
              <h1>NOT FOUND</h1>
            </>}></Route>
          </Routes>

          <Footer></Footer>
        </div>

    </>

  );
}

export default App;
