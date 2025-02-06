
import {Routes,Route} from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Imagess from './Components/Imagess';
import Loading from './Components/Loading';

const App = () => {
  return (
    <div>
      <Nav/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/SingleImage/:id' element={<Imagess/>}/>

</Routes>


    </div>
  )
}

export default App