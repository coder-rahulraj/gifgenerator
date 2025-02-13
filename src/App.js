
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
   <div className='container'>
    <h1 className='heading'>Random GIFS</h1>
    <div className='inner-container'>
      <Random/>
      <Tag/>
    </div>
   </div>
  );
}

export default App;
