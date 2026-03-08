import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import NavigationMenu from './components/NavigationMenu';


function App() {

  // vì return chỉ trả ra 1 kết quả nên tất cả phải được bọc bởi 1 thẻ div,
  // và nếu chỉ muốn hiển thị các Element bên trong ra thì bọc bởi thẻ Fragment <></>
  return (
    <>
      <Header />
      <NavigationMenu />
      <div className='main'>
        <Content  text ="Content 1" number = {10} active = {true}/>
        <MainContent />
        <Content text ="Content 2" number = {5} active = {false} />
      </div>

      <Footer />
    </>

  );
}

export default App;


