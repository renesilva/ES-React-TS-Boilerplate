import { useAppDispatch, useAppSelector } from '../../../redux/app/hooks';
import { addTask, removeTask, markTaskDone } from '../../../redux/features/tasks/tasks-slice';

import { useState } from 'react';

export default function TodoList() {
  // redux
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const dispatch = useAppDispatch();
  // states
  const [inputTask, setInputTask] = useState('');
  // handlers
  const handleClickAddTask = () => {
    dispatch(addTask({ task: inputTask, done: false }));
    setInputTask('');
  };
  const handleChangeDoneTask = (index: number) => {
    dispatch(markTaskDone(index));
  };
  const handleChangeDeleteTask = (index: number) => {
    dispatch(removeTask(index));
  };
  // render
  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={inputTask}
          onChange={(e) => {
            setInputTask(e.target.value);
          }}
        />
        <button className="btn btn-outline-secondary" onClick={handleClickAddTask}>
          Add
        </button>
      </div>
      <ul className="list-group">
        {tasks.map((item, index) => {
          return (
            <li key={index} className="list-group-item d-flex justify-content-between">
              <span>
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => {
                    handleChangeDoneTask(index);
                  }}
                />{' '}
                &nbsp;
                {item.task}
              </span>
              <button
                className="btn btn-sm btn-outline-secondary"
                onClick={() => {
                  handleChangeDeleteTask(index);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
