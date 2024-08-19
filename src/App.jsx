import './Style.scss'
import './App.css';
import Navbar from'./Navbar'
import PageOne from './Page-1'
import PageTwo from './Page-2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import EndPage from './EndPage';
function App() {
  return (
    <div className="datasi">
      <div className="root">
      <div className="container">
        <Navbar/>
        <PageOne/>
      </div>
    </div>
      <div className="conatiners">
        <PageTwo/>
        <Page3/>
        <Page4/>
        <Page5/>
        
      </div>
      <div className="assalom">
        <div className="container">
          <EndPage/>
        </div>
      </div>
    </div>
  )
}

export default App;
