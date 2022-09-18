import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import { incremented } from '../redux/features/counter/counter-slice';

export default function ReduxExamplePage() {
  // states
  const [count, setCount] = useState(0);
  // handlers
  const handleClickCount = () => {
    setCount(count + 1);
  };
  // render
  return (
    <div>
      <h2>Hello</h2>
      <button onClick={handleClickCount} className="btn btn-primary">
        count is {count}
      </button>
    </div>
  );
}
