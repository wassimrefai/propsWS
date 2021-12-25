
import './App.css';
import Profile from './profile/Profile.js';
import Mind from './Mind.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const handleName = fullName => alert(fullName)
  return (
    <div className="App">
      <Profile fullName="Wassim Refai" bio="Welcome To Go My Code" profession="Software Developper" handleName ={handleName} age = "21" > 
      <img src={Mind} alt="myimage" />
      </Profile>
      
      </div>
  );
}

 export default App;