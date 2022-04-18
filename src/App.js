
import './App.css';
import styled from 'styled-components';
import Dropdown from './components/Dropdown';
import Input from './components/Input';
import Slider from './components/Slider';
import Tab from './components/Tab';
import Toggle from './components/Toggle';

function App() {
  return (
    <Wrap>
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <Dropdown />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 50px;
`

export default App;
