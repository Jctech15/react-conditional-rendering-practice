import React, { useState } from 'react';
import './style.css';
import LoadingButton from './LoadingButton.js';

function App() {
  const [loading, setLoading] = useState(false);

  function onClick() {
    setLoading(!loading);
  }

  return <LoadingButton loading={loading} onClick={onClick} label="imlabel" />;
}
export default App;
