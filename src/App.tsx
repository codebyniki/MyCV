import React from 'react'
import './App.css'
import {Navbar} from "./components/Navigation/Navbar.tsx";
import {Route, Routes } from 'react-router-dom';
import {Home} from "./pages/Home.tsx";
import { ThemeProvider } from './context/ThemeContext';
import { CookieProvider } from './context/CookieContext';
import { AuthProvider } from './context/AuthContext';

export const App: React.FC = () => {
  return (
      <ThemeProvider>
          <CookieProvider>
              <AuthProvider>
                  <div className="min-h-screen bg-gray-100 dark:bg-dark-900 text-dark-900 dark:text-gray-100 transition-colors duration-300">
                      <Navbar />
                      <main className="flex-grow">
                          <Routes>
                              <Route path="/" element={<Home />} />
                          </Routes>
                      </main>
                  </div>
              </AuthProvider>
          </CookieProvider>
      </ThemeProvider>
  );
}

export default App
