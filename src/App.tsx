import { useState } from 'react'
import useNotification from 'react-zaptoast'
import './index.css'

function App() {
  const [message, setMessage] = useState('')
  const { NotificationContainer, toast } = useNotification()

  const handleShowToast = () => {
    if (message) {
      toast(message)
      setMessage('')
    }
  }

  return (
    <div className="container">
      <div className="App">
        {NotificationContainer}
        <header>
          <h1>React ZapToast</h1>
          <p className="tagline">Sleek, customizable toast notifications for React</p>
        </header>

        <nav className="toc">
          <h2>Table of Contents</h2>
          <ul>
            <li><a href="#installation">Installation</a></li>
            <li><a href="#basic-usage">Basic Usage</a></li>
            <li><a href="#toast-types">Toast Types</a></li>
            <li><a href="#custom-options">Custom Options</a></li>
          </ul>
        </nav>

        <main>
          <section id="installation">
            <h2>Installation</h2>
            <div className="code-block">
              <pre><code>{`npm install react-zaptoast`}</code></pre>
            </div>
          </section>

          <section id="basic-usage">
            <h2>Basic Usage</h2>
            <p>Import the hook and use it in your component:</p>
            <div className="code-block">
              <pre><code>{`import React from 'react';
import useNotification from 'react-zaptoast';

function App() {
  const { NotificationContainer, toast } = useNotification();

  return (
    <div>
      {NotificationContainer}
      <button onClick={() => toast('Hello, ZapToast!')}>
        Show Toast
      </button>
    </div>
  );
}`}</code></pre>
            </div>
            <div className="demo-block">
              <h3>Live Demo</h3>
              <div className="input-group">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter toast message"
                />
                <button onClick={handleShowToast}>Show Toast</button>
              </div>
            </div>
          </section>

          <section id="toast-types">
            <h2>Toast Types</h2>
            <p>ZapToast supports various types of notifications:</p>
            <div className="demo-block">
              <button onClick={() => toast.success('Success message')}>Success</button>
              <button onClick={() => toast.error('Error message')}>Error</button>
              <button onClick={() => toast.info('Info message')}>Info</button>
              <button onClick={() => toast.warning('Warning message')}>Warning</button>
            </div>
            <div className="code-block">
              <pre><code>{`toast.success('Success message');
toast.error('Error message');
toast.info('Info message');
toast.warning('Warning message');`}</code></pre>
            </div>
          </section>

          <section id="custom-options">
            <h2>Custom Options</h2>
            <p>Customize your toasts with various options:</p>
            <div className="demo-block">
              <button onClick={() => toast('Custom toast', {
                position: 'top-left',
                duration: 5000,
                animation: 'pop'
              })}>
                Custom Toast
              </button>
            </div>
            <div className="code-block">
              <pre><code>{`toast('Custom toast', {
  position: 'top-left',
  duration: 5000,
  animation: 'pop'
});`}</code></pre>
            </div>
          </section>
        </main>

        <footer>
          <p>© 2023 React ZapToast. MIT Licensed.</p>
        </footer>
      </div>
    </div>
  )
}

export default App