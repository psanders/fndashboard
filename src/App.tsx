import "./App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./lib/auth"
import LoginPage from "./pages/login"
import DashboardPage from "./pages/dashboard"
import OverviewPage from "./pages/overview"
import ApplicationsPage from "./pages/applications"
import TrunksPage from "./pages/trunks"
import StoragePage from "./pages/storage"
import ApiKeysPage from "./pages/api-keys"
import SecretsPage from "./pages/secrets"
import MonitoringPage from "./pages/monitoring"
import DomainsPage from "./pages/domains"
import SipAgentsPage from "./pages/sip-agents"
import NumbersPage from "./pages/numbers"

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
            <Route path="sip-network/domains" element={<DomainsPage />} />
            <Route path="sip-network/agents" element={<SipAgentsPage />} />
            <Route path="sip-network/numbers" element={<NumbersPage />} />
            <Route path="storage" element={<StoragePage />} />
            <Route path="keys" element={<ApiKeysPage />} />
            <Route path="secrets" element={<SecretsPage />} />
            <Route path="monitoring" element={<MonitoringPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
