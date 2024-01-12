import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { Main } from './Main';
import data from './data';

function App() {
  const elements = data.map((item) =>
    {
      return (
        < Main
          item = {item} 
        />
      )
    }
  )

  return (
    <div className="App">
      <Header />
      <section>
        {elements}
      </section>
    </div>
  );
}

export default App;
