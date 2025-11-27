import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

// Clear stale caches on load
const clearStaleCache = () => {
  try {
    // Clear localStorage cache if older than 1 hour
    const cacheTimestamp = localStorage.getItem('app-cache-timestamp');
    const oneHourAgo = Date.now() - (60 * 60 * 1000);
    
    if (!cacheTimestamp || parseInt(cacheTimestamp) < oneHourAgo) {
      localStorage.removeItem('contentstack-cache');
      localStorage.setItem('app-cache-timestamp', Date.now().toString());
      console.log('🧹 Cleared stale cache');
    }
  } catch (e) {
    console.warn('Cache cleanup failed:', e);
  }
};

clearStaleCache();

// Global error handler
window.addEventListener('error', (event) => {
  console.error('🚨 Global Error:', {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    error: event.error
  });
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('🚨 Unhandled Promise Rejection:', event.reason);
  event.preventDefault(); // Prevent default rejection handling
});

// Performance monitoring
console.log('🚀 Application starting...');
const startTime = performance.now();

// HMR for development
if (import.meta.env && import.meta.env.DEV) {
  console.log('🔥 HMR enabled');
}

// Clear service workers (if any) - they can cause caching issues
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister();
      console.log('🧹 Service worker unregistered');
    }
  });
}

try {
  const root = document.getElementById('root');
  if (!root) {
    throw new Error('Root element not found');
  }

  ReactDOM.createRoot(root).render(
    <App />
  );
  
  const endTime = performance.now();
  console.log(`✅ React app mounted successfully in ${(endTime - startTime).toFixed(2)}ms`);
} catch (error) {
  console.error('💥 Failed to mount React app:', error);
  
  // Fallback error display
  document.body.innerHTML = `
    <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      color: #333;
      text-align: center;
      padding: 40px;
    ">
      <div style="font-size: 4em; margin-bottom: 20px;">💥</div>
      <h1 style="color: #d32f2f; margin-bottom: 15px;">Application Failed to Start</h1>
      <p style="color: #666; margin-bottom: 30px; max-width: 600px;">
        The React application failed to initialize. Please check the console for details.
      </p>
      <button onclick="localStorage.clear(); window.location.reload()" style="
        background: linear-gradient(135deg, #6a1b9a 0%, #8e24aa 100%);
        color: white;
        padding: 16px 32px;
        border: none;
        border-radius: 50px;
        font-size: 1.1em;
        cursor: pointer;
        font-weight: bold;
      ">
        🔄 Clear Cache & Reload
      </button>
    </div>
  `;
}


