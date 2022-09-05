import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/header/Header";
import Home from './pages/HomePage/Home'
import { store } from './redux'
import GamePage from './components/gamePage/GamePage'
import OrderPage from "./pages/OrderPage/OrderPage";
 
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app/:title" element={<GamePage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
