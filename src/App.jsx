import React from 'react';
    import { Routes, Route, Link } from 'react-router-dom';
    import Home from './pages/Home';
    import FinancialOverview from './pages/FinancialOverview';
    import QuarterlyReports from './pages/QuarterlyReports';
    import RevenueModel from './pages/RevenueModel';
    import Contact from './pages/Contact';

    function App() {
      return (
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/financial-overview">Financial Overview</Link>
            <Link to="/quarterly-reports">Quarterly Reports</Link>
            <Link to="/revenue-model">Revenue Model</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/financial-overview" element={<FinancialOverview />} />
              <Route path="/quarterly-reports" element={<QuarterlyReports />} />
              <Route path="/revenue-model" element={<RevenueModel />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <footer>
            <p>Data sourced from public records and investor relations.</p>
            <div>
              <Link to="/">Home</Link>
              <Link to="/financial-overview">Financial Overview</Link>
              <Link to="/quarterly-reports">Quarterly Reports</Link>
              <Link to="/revenue-model">Revenue Model</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </footer>
        </div>
      );
    }

    export default App;
