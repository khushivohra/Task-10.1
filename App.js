import logo from './logo.svg';
import './App.css';


import Navbar from './navbar';
import Image from './image';
import Course from './course';
import Navbar2 from './navbar2';
import Footer from './footer';

function App() {
  return (<div>
 <Navbar/>
 <Image/>
 <div className='headerName'><h2>Featured Articles</h2></div>
<Course/>
<Navbar2/>

<Footer/>
 </div>  
  )
}

export default App;
