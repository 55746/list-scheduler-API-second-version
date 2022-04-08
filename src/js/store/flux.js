const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      list: [],
    },
    actions: {
      getData: () => {
        fetch("https://assets.breatheco.de/apis/fake/todos/user/createdname", {
          method: "GET",
          redirect: "follow",
        })
          .then((response) => response.json())
          .then((result) => setStore({ list: result }))
          .catch((error) => console.log("error", error));
      },

      addItem: (list) => {
        fetch("https://assets.breatheco.de/apis/fake/todos/user/createdname", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(list),
          redirect: "follow",
        })
          .then((response) => {
            response.status === 200 ? setStore({ list: list }) : "";
          })
          .catch((error) => console.log("error", error));
      },
      removeItem: (index) => {
        const par = getStore().list.filter((list, i) => index !== i);
        console.log(par);
        fetch("https://assets.breatheco.de/apis/fake/todos/user/createdname", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(par),
          redirect: "follow",
        })
          .then((response) => {
            response.status === 200 ? setStore({ list: par }) : "";
          })
          .catch((error) => console.log("error", error));
      },
    },
  };
};

export default getState;
