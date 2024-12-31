import React from 'react';
    import { Link } from 'react-router-dom';

    function Home() {
      return (
        <div>
          <div className="hero">
            <h1>Welcome to Uber Finance Insights</h1>
            <p>Your gateway to Uber's financial growth and revenue details.</p>
            <Link to="/financial-overview">
              <button>Explore Financial Overview</button>
            </Link>
          </div>
          <div className="grid">
            <div className="card">
              <h3>2023 Annual Revenue</h3>
              <p>$37.3 billion</p>
            </div>
            <div className="card">
              <h3>First Operating Profit</h3>
              <p>$1.1 billion in 2023</p>
            </div>
            <div className="card">
              <h3>Gross Bookings Growth</h3>
              <p>16% Year-on-Year</p>
            </div>
          </div>
        </div>
      );
    }

    export default Home;
