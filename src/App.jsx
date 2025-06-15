import {Route, Routes} from 'react-router-dom'
import  Body  from './components/Body';


function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Body/>}/>
      
      </Routes>
    </div>
    
  );
}

export default App;