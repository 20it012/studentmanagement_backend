import Navigationbar from './component/Navigationbar'
import Addstudent from './component/Addstudent'
import './App.css';

function App() {
  return (
    <div className="App">
      <container>
      <Navigationbar />
      <Addstudent />
      </container>
    </div>
  );
}

export default App;
