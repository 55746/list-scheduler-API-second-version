import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const Home = () => {
  const [item, setItem] = useState("");
  const { store, actions } = useContext(Context);

  //   const addItem = (newItem) => {
  //     let list = [...todolist, { label: newItem, done: false }];
  //   };

  // const deletes = (index) => {
  //   const par = todolist.filter((list, i) => index !== i);
  //   settodolist(par);
  //   fetch("https://assets.breatheco.de/apis/fake/todos/user/createdname", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(par),
  //     redirect: "follow",
  //   })
  //     .then((response) => {
  //       response.status === 200 ? settodolist(par) : "";
  //     })
  //     .catch((error) => console.log("error", error));

  //   const completeTodo = (index) => {
  //     const todosArray = [...todolist];
  //     todosArray[index].done = !todosArray[index].done;
  //     setItem(todosArray);
  //   };
  //   console.log(todolist);

  return (
    <>
      <div className="outsideBorder">
        <div className="container">
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="What needs to be done?"
              onChange={(e) => setItem(e.target.value)}
            />
            <a
              onClick={() => {
                if (item === "") return alert("you cant do that Jimbo");
                setItem("");
                actions.addItem([...store.list, { label: item, done: false }]);
              }}
              type="btn btn-primary"
              className="input-group-text"
              id="basic-addon1"
            >
              Button
            </a>
          </div>
          <ul>
            {store.list.map((list, index) => {
              return (
                <li key={index} className="boxtype">
                  {list.label}
                  <button
                    className="strikethrough"
                    onClick={() => completeTodo(index)}
                  >
                    Finished
                    {list.done}
                  </button>
                  <span className="deletekey">
                    <a
                      className="deletekey btn "
                      onClick={() => {
                        actions.removeItem(index);
                      }}
                    >
                      X
                    </a>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
