import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: '',
//         element: <AboutPage />
//       },
//       {
//         path: 'portfolio',
//         element: <PortfolioPage />,
//       },
//       {
//         path: 'contact',
//         element: <ContactPage />
//       },
//       {
//         path: 'resume',
//         element: <ResumePage />
//       }
//     ]
//   },
// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
