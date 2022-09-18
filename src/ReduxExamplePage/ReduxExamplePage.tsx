import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import { incremented, amountAdded } from '../redux/features/counter/counter-slice';

export default function ReduxExamplePage() {
  // redux
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  // handlers
  const handleClickAddBy1 = () => {
    dispatch(incremented());
  };
  const handleClickAddByX = () => {
    dispatch(amountAdded(3));
  };
  // render
  return (
    <div className="container">
      <h2>Hello</h2>
      <p>count is {count}</p>
      <button onClick={handleClickAddBy1} className="btn btn-primary">
        Add by 1
      </button>{' '}
      <button onClick={handleClickAddByX} className="btn btn-primary">
        Add by 3
      </button>
    </div>
  );
}
