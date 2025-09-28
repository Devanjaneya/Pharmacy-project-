// App.jsx
// import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';
import Login from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
const App = () => {
  return (
  
     <Provider store={appStore}>
         <Header/>
         <Outlet/>
         {/* <Footer/> */}
     </Provider>
   
   

  );
};

export default App;
