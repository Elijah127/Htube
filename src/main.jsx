import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {  createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'
import HtubeVideos from './Pages/HtubeVidoes.jsx'
import ComingSoon from '../src/Pages/ComingSoon.jsx';
import VideoSearchPage from './Pages/VideoSearchPage.jsx';

  

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/HtubeVideos/:videoId/",
    element: <HtubeVideos />
  },
  {
    path: "/ComingSoon",
    element: <ComingSoon/>
  },
  {
    path: "/VideoSearchPage",
    element: <VideoSearchPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />

    </ChakraProvider>
  </React.StrictMode>,
)
