import React from 'react';
import AuthForm from './components/AuthForm/AuthForm';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <AuthForm />
      <ToastContainer />
    </>
  );
}

export default App;
