import './App.css';
import Form from './Components/Form/Form';
import 'react-phone-number-input/style.css'
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import UserInformation from './Components/UserInformation/UserInformation';
import Personal from './Components/UserInformation/Personal';
import Bussniess from './Components/UserInformation/Bussniess';
import Loan from './Components/UserInformation/Loan';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<UserInformation />}>
          <Route index element={<Personal />} />
          <Route path='busniess' element={<Bussniess />} />
          <Route path='loan' element={<Loan />} />
        </Route>
        <Route path='/form' element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
