import { useState } from 'react';

interface iTask {
  task: string;
  done: boolean;
}

export default function TodoList() {
  // states
  const [list, setList] = useState<iTask[]>([]);
  const [inputTask, setInputTask] = useState('');
  // handlers
  const handleClickAddTask = () => {
    setList([...list, { task: inputTask, done: false }]);
    setInputTask('');
  };
  const handleChangeDoneTask = (index: number) => {
    let newList = [...list];
    newList[index].done = !newList[index].done;
    setList(newList);
  };
  const handleChangeDeleteTask = (index: number) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
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
        {list.map((item, index) => {
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
