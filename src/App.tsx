import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import Platform from './pages/Platform';
import Company from './pages/Company';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import Academy from './pages/Academy';
import Plans from './pages/Plans';
import Partners from './pages/Partners';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Talk from './pages/Talk';
import Start from './pages/Start';
import { ContentstackProvider } from './context/ContentstackContext';
import './styles/global.css';

function App() {
  console.log('App component rendering...');
  console.log('NEW VERSION 2.0 LOADED!');
  
  try {
    return (
      <ErrorBoundary>
        <HelmetProvider>
          <ContentstackProvider>
            <Router>
              <ErrorBoundary>
                <ScrollToTop />
                <ErrorBoundary>
                  <Layout>
                    <ErrorBoundary>
                      <Routes>
                        <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>} />
                        <Route path="/platform" element={<ErrorBoundary><Platform /></ErrorBoundary>} />
                        <Route path="/company" element={<ErrorBoundary><Company /></ErrorBoundary>} />
                        <Route path="/blogs" element={<ErrorBoundary><Blogs /></ErrorBoundary>} />
                        <Route path="/blog/*" element={<ErrorBoundary><BlogPost /></ErrorBoundary>} />
                        <Route path="/academy" element={<ErrorBoundary><Academy /></ErrorBoundary>} />
                        <Route path="/plans" element={<ErrorBoundary><Plans /></ErrorBoundary>} />
                        <Route path="/partners" element={<ErrorBoundary><Partners /></ErrorBoundary>} />
                        <Route path="/careers" element={<ErrorBoundary><Careers /></ErrorBoundary>} />
                        <Route path="/contact" element={<ErrorBoundary><Contact /></ErrorBoundary>} />
                        <Route path="/talk" element={<ErrorBoundary><Talk /></ErrorBoundary>} />
                        <Route path="/start" element={<ErrorBoundary><Start /></ErrorBoundary>} />
                      </Routes>
                    </ErrorBoundary>
                  </Layout>
                </ErrorBoundary>
              </ErrorBoundary>
            </Router>
          </ContentstackProvider>
        </HelmetProvider>
      </ErrorBoundary>
    );
  } catch (error: any) {
    console.error('🚨 CRITICAL App error:', error);
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '40px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)'
      }}>
        <div style={{ fontSize: '4em', marginBottom: '20px' }}>⚠️</div>
        <h1 style={{ fontSize: '2.5em', marginBottom: '15px', color: '#6a1b9a' }}>
          Critical Error Detected
        </h1>
        <p style={{ fontSize: '1.2em', color: '#666', marginBottom: '30px', maxWidth: '600px' }}>
          The application encountered a critical error during initialization. Please reload the page.
        </p>
        <button
          onClick={() => window.location.reload()}
          style={{
            background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%)',
            color: 'white',
            padding: '14px 28px',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1.1em',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(106, 27, 154, 0.3)'
          }}
        >
          🔄 Reload Application
        </button>
      </div>
    );
  }
}

export default App;


