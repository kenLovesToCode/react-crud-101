import React from "react";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";

import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="app">
      <Router>
        <HomePage />
      </Router>
    </div>
  );
}

export default App;

// import { Outlet, Link } from "react-router-dom";

// export default function App() {
//   return (
//     <div id="root">
//       <h1>Bookkeeper</h1>
//       <nav
//         style={{
//           borderBottom: "solid 1px",
//           paddingBottom: "1rem",
//         }}
//       >
//         <Link to="/invoices">Invoices</Link> |{" "}
//         <Link to="/expenses">Expenses</Link>
//       </nav>
//       <Outlet />
//     </div>
//   );
// }
