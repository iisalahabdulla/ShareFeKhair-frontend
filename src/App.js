import React from 'react';
import { ChakraProvider, theme, Box } from '@chakra-ui/react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import { AuthProvider } from './context/AuthContext';
import RequireAuth from './components/RequireAuth';
import MyClasses from './pages/MyClasses';
import MyClass from './pages/MyClass';
import Session from './pages/Session';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Box h="100vh">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route element={<RequireAuth />}>
                <Route path="/myclasses" element={<MyClasses />} />
                <Route path="/myclass/:id" element={<MyClass />} />
                <Route path="/session/:id" element={<Session />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </Box>
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
