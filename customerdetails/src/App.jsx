import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CustomerForm from './components/CustomerForm'
import CustomerList from './components/CustomerList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="p-4">
      <nav className="mb-4 space-x-4">
        <Link to="/" className="text-blue-600 hover:underline">Add Customer</Link>
        <Link to="/list" className="text-blue-600 hover:underline">View Customers</Link>
      </nav>

      <Routes>
        <Route path="/" element={<CustomerForm />} />
        <Route path="/list" element={<CustomerList />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
