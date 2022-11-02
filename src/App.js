import pics from './pics.svg';
import logo1 from './logo1.png';
import logo2 from './logo2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pics} className="App-logo" alt="pics" id='profile_img'/>
        <p id='twitter' className='twitter_username'>
          Samuel Egwu
        </p>
        <span id='slack' className='slack_username'></span>
        
          <a
            className="twitter-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            id='btn__zuri'
          >
            Twitter Link
          </a>
          <a
            className="zuribook-link"
            href="https://training.zuri.team/"
            target="_blank"
            rel="noopener noreferrer"
            id='pitch'
          >
            zuri Team
            <sub className='subtext'>pitch a service for doing background checks on coders</sub>
          </a>

          <a
            className="zuribook-link"
            href="https://books.zuri.team/"
            target="_blank"
            rel="noopener noreferrer"
            id='books'
          >
            Zuri books 
            <sub className='subtext'>this is where you find books about design and coding</sub>
          </a>

          <a
            className="zuribook-link"
            href="https://books.zuri.team/python-for-beginners?2100=<samuel Egwu>"
            target="_blank"
            rel="noopener noreferrer"
            id='book__python'
          >
            Python Books 
            <sub className='subtext'>this is where you find books about coding in python</sub>
          </a>

          <a
            className="zuribook-link"
            href="https://background.zuri.team"
            target="_blank"
            rel="noopener noreferrer"
            id='pitch'
          >
            Background Check for Coders  
            <sub className='subtext'>pitch a service for doing background checks on coders</sub>
          </a>

          <a
            className="zuribook-link"
            href="https://books.zuri.team/design-rules "
            target="_blank"
            rel="noopener noreferrer"
            id='book_design'
          >
            Design Books 
            <sub className='subtext'>where you pitch the free design book offered by Zuri.</sub>
          </a>

          <p  className="zuri-slack-git">

              <a
                className="zuri-slack-git"
                href="https://background.zuri.team"
                target="_blank"
                rel="noopener noreferrer"
                id='pitch'
              >
                <img src={logo1} className="App-logo1" alt="logo" id='logo_img'/>
              </a>
              <a
                className="zuri-slack-git"
                href="https://background.zuri.team"
                target="_blank"
                rel="noopener noreferrer"
                id='pitch'
              >
                <img src={logo2} className="App-logo1" alt="pics" id='logo_img'/>
              </a>
          </p>
        
      </header>
    </div>
  );
}

export default App;
