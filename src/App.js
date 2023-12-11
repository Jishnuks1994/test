import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ViewProduct from "./components/ViewProduct";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        
      <Route path='' element={<Home></Home>}></Route>
      <Route path='/view/:id' element={<ViewProduct></ViewProduct>}></Route>

    
      </Routes>
     
      <Footer></Footer>
    </div>
  );
}

export default App;
