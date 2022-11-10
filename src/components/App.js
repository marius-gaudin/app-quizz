import '../style/app.scss';
import Home from './Home';
import Quizz from './Quizz';
import { Routes, Route } from 'react-router-dom';
import quizzs from '../data/listQuizzs';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home quizzs={quizzs} />} />
        <Route path="/quizz/:id" element={<Quizz quizzs={quizzs} />}/>
      </Routes>
    </div>
  );
}

export default App;
