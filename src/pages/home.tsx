import React, { useEffect, useState } from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import {
  Amplify,
  API,
  Auth,
  withSSRContext,
  graphqlOperation,
} from "aws-amplify";

import { createTodo, deleteTodo } from "../graphql/mutations";
import { listTodos } from "../graphql/queries";
import "@aws-amplify/ui-react/styles.css"; // default theme
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import awsExports from "../aws-exports";
import { CreateTodoInput, DeleteTodoInput, ListTodosQuery } from "../API";
Amplify.configure(awsExports);

const initialState = { name: "", description: "" };
export const HomePage = () => {
  const router = useRouter();
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  let userGroup;

  useEffect(() => {
    fetchTodos();
  }, []);
  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (authStatus == "authenticated") {
      // the array of groups that the user belongs to
      const userAuth = user.getSignInUserSession();
      const acessToken = userAuth.getAccessToken();
      const payload = acessToken.payload;
      // userGroup = payload ? payload["cognito:groups"][0] : "guest";
    }
  }, [authStatus]);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  // async function fetchTodos() {
  //   try {
  //     const todoData = await API.graphql(graphqlOperation(listTodos))
  //     const todos = todoData.data.listTodos.items
  //     setTodos(todos)
  //   } catch (err) { console.log('error fetching todos') }
  // }

  async function fetchTodos() {
    try {
      const todoData = (await API.graphql(
        graphqlOperation(listTodos)
      )) as Promise<ListTodosQuery>;
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
      console.log(todoData);
    } catch (err) {
      console.log("error fetching todos");
    }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      (await API.graphql(
        graphqlOperation(createTodo, { input: todo })
      )) as Promise<CreateTodoInput>;
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }

  async function deleted(id) {
    try {
      console.log(id);
      console.log(todos);
      var array = todos; // make a separate copy of the array
      var index = array.indexOf(id);
      if (index !== -1) {
        array.splice(index, 1);
        setTodos(array);
      }
      const todoDetails = {
        id: id,
      };
      (await API.graphql(
        graphqlOperation(deleteTodo, { input: todoDetails })
      )) as Promise<DeleteTodoInput>;
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }

  return (
    <>
      {authStatus === "configuring" && "Loading..."}
      {authStatus !== "authenticated" ? (
        <Authenticator />
      ) : (
        <div className={styles.container}>
          <h1>Welcome {userGroup} </h1>
          <button className={styles.buttonPrimary} onClick={signOut}>
            Sign Out
          </button>
          <div className={styles.grid}>
            <input
              onChange={(event) => setInput("name", event.target.value)}
              className={styles.input}
              value={formState.name}
              placeholder="Enter title"
            />
            <input
              onChange={(event) => setInput("description", event.target.value)}
              className={styles.input}
              value={formState.description}
              placeholder="Enter link"
            />
            <button className={styles.buttonPrimary} onClick={addTodo}>
              Create project
            </button>
          </div>

          <div className={styles.grid}>
            {todos.map((todo, index) => (
              <div key={todo.id ? todo.id : index} className={styles.card}>
                <div
                // onClick={() => router.push(`/todo/${todo.id}`)}
                >
                  <p>{todo.name}</p>
                  <p>{todo.description}</p>
                </div>
                <button
                  className={styles.buttonClose}
                  onClick={() => {
                    deleted(todo.id);
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>

        // <div className={styles.container}>
        //   <div className={styles.grid}>
        //     <h1>Welcome {userGroup} </h1>
        //   </div>
        //   <div className={styles.grid}>
        //     <button className={styles.buttonPrimary} onClick={signOut}>
        //       Sign Out
        //     </button>
        //     <button
        //       className={styles.buttonPrimary}
        //       onClick={() => router.push("/todolist")}
        //     >
        //       List
        //     </button>
        //   </div>
        // </div>
      )}
    </>
  );
};
// const styles = {
//   container: {
//     width: 400,
//     margin: "0 auto",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     padding: 20,
//   },
//   todo: { marginBottom: 15 },
//   input: {
//     border: "none",
//     backgroundColor: "#ddd",
//     marginBottom: 10,
//     padding: 8,
//     fontSize: 18,
//   },
//   todoName: { fontSize: 20, fontWeight: "bold" },
//   todoDescription: { marginBottom: 0 },
//   button: {
//     backgroundColor: "black",
//     color: "white",
//     outline: "none",
//     fontSize: 18,
//     padding: "12px 0px",
//   },
// };
