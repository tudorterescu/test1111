import { ThemeProvider } from "@/components/theme-provider"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import Authentication from "./pages/Authentication"
import Dashboard from "./pages/Dashboard"

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route
          path="/"
          element={
            <div className="max-w-7xl mx-auto min-h-screen">
              <Home />
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div className="w-full min-h-screen">
              <Authentication />
            </div>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
