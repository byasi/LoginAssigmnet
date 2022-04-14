import './App.less';
import './styles/App.css';
import { Row, Col} from 'antd';
import LoginForm from './components/Form';

function App() {

  return (
    <div className="App">
    <Row>
    <Col flex={2} style={{backgroundColor:'#2E4969', height:'600px'}} className="col col-1">
      </Col>
      <Col flex={4} className="bg-img col">
      </Col>
    </Row>
    <LoginForm />
   
    </div>
  );
}

export default App;
