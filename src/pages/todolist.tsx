import { createTodo } from "../graphql/mutations";
import { listTodos } from "../graphql/queries";
import {
  CreateTodoInput,
  CreateTodoMutation,
  ListTodosQuery,
  Todo,
} from "../API";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";

import {
  Amplify,
  API,
  Auth,
  graphqlOperation,
  withSSRContext,
} from "aws-amplify";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import awsExports from "../aws-exports";

// Amplify.configure({ ...awsExports, ssr: true });

function ToDoList({ todos = [] }: { todos: Todo[] }) {
  const router = useRouter();
  async function handleCreateTodo(event) {
    event.preventDefault();
    const form = new FormData(event.target);

    try {
      const createInput: CreateTodoInput = {
        name: form.get("name").toString(),
        description: form.get("description").toString(),
      };
      const request = (await API.graphql({
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        query: createTodo,
        variables: { input: createInput },
      })) as { data: CreateTodoMutation; errors: any[] };
      // const request = (await API.graphql({
      //   // authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      //   query: createTodo,
      //   variables: {
      //     input: createInput,
      //   },
      // })) as { data: CreateTodoMutation; errors: any[] };

      // router.push(`/todo/${request.data.createTodo.id}`);
    } catch ({ errors }) {
      console.error(...errors);
      throw new Error(errors[0].message);
    }
  }
  return (
    <main>
      <div className={styles.container}>
        <h5 className={styles.title}>Create new Project</h5>
        <form className={styles.form} onSubmit={handleCreateTodo}>
          <fieldset className={styles.fieldset}>
            <legend>Title</legend>
            <input
              className={styles.input}
              placeholder="Add title"
              name="name"
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend>Link</legend>
            <input
              className={styles.input}
              placeholder="Add sketchfab link"
              name="description"
            />
          </fieldset>

          <button className={styles.buttonPrimary}>Create</button>
        </form>
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {todos
            .slice(0)
            .reverse()
            .map((todo, index) => (
              <div
                key={index}
                className={styles.card}
                onClick={() => {
                  router.push(`/todo/${todo.id}`);
                }}
              >
                <h4>{todo.name}yhh</h4>
                <p>{todo.description}</p>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  console.log(req);

  const SSR = withSSRContext({ req });

  const response = (await SSR.API.graphql({ query: listTodos })) as {
    data: ListTodosQuery;
  };

  return {
    props: {
      todos: response.data.listTodos.items,
    },
  };
};
export default ToDoList;
const myAppConfig = {
  // ...
  aws_appsync_graphqlEndpoint:
    "https://dwx3n3hh75esvefckxnfqzqipm.appsync-api.eu-west-2.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS", // Before calling API.graphql(...) is required to do Auth.federatedSignIn(...) check authentication guide for details.
  // ...
};

Amplify.configure(myAppConfig);
