import { Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Slider/Sidebar";
import { routes } from "./router";
import { Route } from "react-router-dom";
import { useState } from "react";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const location = useLocation();

  const showHeader = useMemo(
    () => !new RegExp(/^\/items\/[a-zA-Z0-9_-]+$/).test(location.pathname),
    [location.pathname]
  );

  return (
    <div
      style={{
        height: "100dvh",
        width: "100vw",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {showHeader && <Header />}

        <main
          style={{
            flexGrow: 1,
            overflow: "hidden",
          }}
        >
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.component} />
            ))}
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
