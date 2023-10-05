// import logo from './logo.svg';
import './App.css';
import FeedPage from './Components/feedPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './Components/profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="instagram-clone" element={<FeedPage />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
