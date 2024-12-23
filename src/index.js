import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RouterSite from '../src/components/RouterSite';
//import form from '../src/components/form';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* apenas inicia mi sitio renderiza segun indique el ruteo */}
    <RouterSite />
  </React.StrictMode>
);


