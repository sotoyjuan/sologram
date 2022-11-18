import Navigation from './components/navigation/Navigation';
import { Route, Routes } from "react-router-dom";
import MainFeed from './pages/main-feed/MainFeed';
import NewPost from './pages/new-post/NewPost';
import Header from './components/header/Header';

function App() {
  return (
    <>
        <Header />
        <Routes>
            <Route path='/' element={<MainFeed />} />
            <Route path='/new-post' element={<NewPost />} />
        </Routes>
        <Navigation />
    </>
  );
}

export default App;
