import './App.css';
import Header from './components/Header';


function App() {
  let name = "Đặng Văn Minh";
  const css = {
    color: "red",
    backgroundColor: "blue"

  }

  // vì return chỉ trả ra 1 kết quả nên tất cả phải được bọc bởi 1 thẻ div,
  // và nếu chỉ muốn hiển thị các Element bên trong ra thì bọc bởi thẻ Fragment <></>
  return (
    <>
      <Header/>
      <div className='test' style={css}>
        Xin chào {name}!
      </div>
      <div className='test' style={css}>
        Xin chào {name}!
      </div>
    </>
  );
}

export default App;
