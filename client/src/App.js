import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ReceivableView from './views/ReceivableView';
import PayableView from './views/PayableView';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Your App Name</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/receivables" element={<ReceivableView />} />
            <Route path="/payables" element={<PayableView />} />
            {/* Add other routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <ul>
        <li>
          <Link to="/receivables">Go to Receivables</Link>
        </li>
        <li>
          <Link to="/payables">Go to Payables</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
