 
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyOrders from './components/MyOrders/MyOrders';
import Booking from './components/Booking/Booking';
import Services from './components/Services/Services';
import AddServices from './components/AddServices/AddServices';
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';
import Header from './components/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Contexts/AuthProvider';
import ManageOrder from './components/ManageOrder/ManageOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Cart from './components/Cart/cart';
import Shipping from './components/Shipping/Shipping';
 
 

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
         <Header></Header>
         
         <Routes>
           <Route exact path='/' element={<Home></Home>}></Route>
           <Route exact path='/home' element={<Home></Home>}></Route>
         
           <Route  exact path='/login' element={<Login></Login>}></Route>
           <Route  exact path='/shipping' element={<Shipping></Shipping>}></Route>
           <Route  exact path='/cart' element={ 
            <Cart></Cart>
            }></Route>
            
           
           <Route  exact path='/myOrders' element={<MyOrders></MyOrders>}></Route>
           <Route  exact path='/booking/:serviceId' element={ <Booking></Booking>}></Route>
           <Route  exact path='/services' element={<Services></Services>}></Route>
           {/* <Route  exact path='/manageOrder' element={<ManageOrder></ManageOrder>}></Route> */}
           <Route  exact path='/addServices' element={<AddServices></AddServices>}></Route>
           <Route  exact path='/adminDashboard' element={<AdminDashboard></AdminDashboard>}></Route>
         </Routes>
       </Router>

      </AuthProvider>
       
    </div>
  );
}

export default App;
