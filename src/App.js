
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
import { useState, useEffect } from 'react';


// firebase import
import { collection, getDocs } from 'firebase/firestore';
import { db } from './Firebase';
import { addDoc } from "firebase/firestore";



function App() {


  //test firebase

  const [todos, setTodos] = useState([]);

  const fetchPost = async () => {

    await getDocs(collection(db, "Rooms"))
      .then((querySnapshot) => {
        const newData = querySnapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        setTodos(newData);
        console.log(todos, newData);
      })

  }

  useEffect(() => {
    fetchPost();
  }, [])


  const addTodo = async (e) => {
    e.preventDefault();  
   
    try {
        const docRef = await addDoc(collection(db, "Rooms"), {
          roomType: 'many type',   
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

  //end test firebase



  return (

    <div className="App">
      <Navigation></Navigation>

    {/* test firebase */}
      <h1>TEST FIREBASE</h1>

      <div className="todo-content">
        {
          todos?.map((todo, i) => (
            <p key={i}>
              {todo.roomType}
            </p>
          ))
        }

        <button onClick={addTodo}>test ADD firebase data</button>
      </div>

      {/* test fire base */}

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

        <Route path='*' element={<>
          <h1>NOT FOUND</h1>
        </>}></Route>
      </Routes>

      <Footer></Footer>
    </div>

  );
}

export default App;
