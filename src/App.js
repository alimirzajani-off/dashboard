import "./App.sass";
import SideBar from "./components/Sidebar/sidebar";
import Dashboard from "./components/Dashboard/dashboard";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default App;
