import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes';
import './styles/app.scss';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
