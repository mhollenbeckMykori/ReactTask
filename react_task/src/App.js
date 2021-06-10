import './App.css';
import mykorilogo from './mykori_logo.png';

function BigComponent(props) {
    return <div className="BigComponent">
      <h2>Welcome props.name to the mykori React task! :)</h2>
      <div>We are exited to meet you tomorrow! I hope you have a pleasant time solving these tasks!</div>
        <img className="logo"
          src={mykorilogo}
          alt={"logo"}
        />
    </div>
}

function App() {
  return (
    <div className="App">
      <BigComponent name= "Manjunath" />
    </div>
  );
}

export default App;
