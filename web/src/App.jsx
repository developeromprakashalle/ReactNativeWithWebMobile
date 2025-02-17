import React from 'react';
// import { useFetch } from '../common/hooks/useFetch';
import logo from '../../common/assets/images/logo.png';

function App() {
//   const { data } = useFetch('https://api.example.com');

  return (
    <div>
      <img src={logo} alt="Logo" />
      <h1>{data?.message}</h1>
    </div>
  );
}

export default App;