import Header from '../widgets/Header';
import Sidebar from '../widgets/Sidebar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
