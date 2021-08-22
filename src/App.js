import './App.css';

import Sidebar from './components/Sidebar/Sidebar/Sidebar'
import Feed from './components/Feed/Feed/Feed'
// import Widgets from './components/Widgets/Widgets/Widgets'

import Widgets from './components/Widgets/Widgets/Widgets'

function App() {
  return (
    // BEM convention
    <div className="app">
      
      {/* SideBar */}
      <Sidebar />

      {/* Feed */}
      <Feed />
      
      {/* Widgets */}
      <Widgets />
    
    </div>
  );
}

export default App;
