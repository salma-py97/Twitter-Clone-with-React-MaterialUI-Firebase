import './App.css';

import Sidebar from './components/Sidebar/Sidebar/Sidebar'
import Feed from './components/Feed/Feed/Feed'

function App() {
  return (
    // BEM convention
    <div className="app">
      
      {/* SideBar */}
      <Sidebar />

      {/* Feed */}
      <Feed />
      
      {/* Widgets */}
    
    </div>
  );
}

export default App;
