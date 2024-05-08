import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ServerLayout from "./layout/ServerLayout";
import { MyProvider } from "./DataContext";

function About() {
  return <div>About</div>;
}

function App() {
  return (
    <MyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<div>Home</div>} />
            <Route path="server/:serverId" element={<ServerLayout />}>
              <Route path="channel/:channelId" element={<h1>channel</h1>} />
              {/* other server routes */}
            </Route>
            {/* more routes to come */}
          </Route>
          <Route path="/login" element={<div>Login Please!</div>} />
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;
