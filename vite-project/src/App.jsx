
 

import { BrowserRouter, Routes,Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Add from "./add";
import Delete from "./Delete";
import Update from "./Update";
function App() {
  

  return (
  <>

<BrowserRouter>
  <Nav/>
<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/add' element={<Add/>}/>
<Route path='/delete' element={<Delete/>}/>
<Route path='/update' element={<Update/>}/>
</Routes>

</BrowserRouter>
  
  </>
  )
}

export default App
