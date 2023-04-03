import Header from './components/Header.js';
import Page from './components/Page.js';

function App() {
  return(
    <div className="container-fluid bg-dark" id='mainDiv'>
      <div className=" text-center framed primary" >
      < Header/>
      </div>
      <div>
      <Page />  
      </div>
    </div>  
  );
}

export default App;
