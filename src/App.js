import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from './Pages/Landingpage'
import Request from './Pages/Request'
import Register from './Pages/Register'
import Transaction from './Pages/Transaction'
import Signin from './Pages/Signin'
import './App.css';


function App() {
  return (
<>
       <BrowserRouter>
         <Routes>
             <Route path="/" element={<Landingpage/>}/>
             <Route path="/signin" element={<Signin/>}/>
             <Route path="/register" element={<Register/>}/>
             <Route path="/request" element={<Request/>}/>
             <Route path="/transaction" element={<Transaction/>}/>
         </Routes>
       </BrowserRouter>


</>


  );
}

export default App;
