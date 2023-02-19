import './App.scss';
import Header from './components/header/Header';
import Main from './pages/Main/Main';
import Contacts from './pages/Contacts/Contacts'
import Gallery from './pages/Gallery/Gallery'
import News from './pages/News/News'
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import data from './components/data/data'
import Person from './pages/Person/Person';
import Error from './pages/Error/Error';

function App() {
  return (
    <div className="App">
      <Header navigation={data.navList}/>
      <Routes>
        <Route exact path="/" element={<Main/>}></Route>
        <Route path="/news" element={<News posts={data.newsList}/>}></Route>
        <Route path="/gallery" element={<Gallery gallary={data.gallaryImage}/>}></Route>
        <Route exact path="/contacts" element={<Contacts contacts={data.contacts}/>}></Route>
        <Route path="/contacts/:person" element={<Person contacts={data.contacts} message={data.messagePersons}/>}></Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
