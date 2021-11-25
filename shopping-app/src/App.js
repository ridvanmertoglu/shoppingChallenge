import './App.scss';
import {  useDispatch } from 'react-redux';
import { itemsActions } from './redux/actions';

const App = () => {

  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(itemsActions.setItems(["item"]))
  }

  return (
    <div className="App">
      <button onClick={addItem}>click</button>
    </div>
  );
}

export default App;
