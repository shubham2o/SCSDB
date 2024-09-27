import Home from './pages/Home';
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#1F1E24] flex">
      <Home />
      <Outlet />
    </div>
  )
}

export default App;