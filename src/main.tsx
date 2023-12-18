import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import global_en from "./i18n/en/global.json";
import global_de from './i18n/gr/global.json';

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      global: global_en
    },
    de: {
      global: global_de
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
