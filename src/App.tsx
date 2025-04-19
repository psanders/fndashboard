import "./App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./lib/auth"
import LoginPage from "./pages/login"
import DashboardPage from "./pages/dashboard"
import OverviewPage from "./pages/overview"
import ApplicationsPage from "./pages/applications"
import TrunksPage from "./pages/trunks"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<DashboardPage />}>
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<OverviewPage />} />
            <Route path="applications" element={<ApplicationsPage />} />
            <Route path="sip-network/trunks" element={<TrunksPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
