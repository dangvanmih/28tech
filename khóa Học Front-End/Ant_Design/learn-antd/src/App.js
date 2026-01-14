import { useState } from 'react';
import './App.css';
import {Button} from "antd";
import {GithubOutlined} from "@ant-design/icons"
function App() {
  const [loading, setLoading] = useState(false)
  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      const results = {
        code:200,
        data: []
      }
      if(results && results.code === 200) {
        setLoading(false)
      }
    }, 3000);
  }
  return (
    <>
      <Button type='primary' loading={loading} onClick={handleClick} disabled={loading} size='large'>Nội dung</Button>
      <Button icon={<GithubOutlined  rotate={45} spin={true} />}>GitHub</Button>
    </>
  );
}

export default App;
// 1:16