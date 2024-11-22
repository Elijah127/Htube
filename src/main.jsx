import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {  createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'
import HtubeVideos from './HtubeVidoes'
import ComingSoon from './ComingSoon';
import VideoSearchPage from './VideoSearchPage';

  

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
