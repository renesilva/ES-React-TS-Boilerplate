import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import { incremented } from '../redux/features/counter/counter-slice';

export default function ReduxExamplePage() {
  // redux
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  // handlers
  const handleClickCount = () => {
    dispatch(incremented());
  };
  // render
  return (
    <div className="container">
      <h2>Hello</h2>
      <button onClick={handleClickCount} className="btn btn-primary">
        count is {count}
      </button>
    </div>
  );
}
