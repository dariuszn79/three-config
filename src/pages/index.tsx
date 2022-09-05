import { Authenticator } from "@aws-amplify/ui-react";

import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
import Head from "next/head";
import awsExports from "../aws-exports";
import { createTodo } from "../graphql/mutations";
import { listTodos } from "../graphql/queries";
import {
  CreateTodoInput,
  CreateTodoMutation,
  ListTodosQuery,
  Todo,
} from "../API";

import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import styles from "../styles/Home.module.css";

import { HomePage } from "./home";
Amplify.configure({ ...awsExports, ssr: true });

export default function App() {
  return (
    <Authenticator.Provider>
      <HomePage />
    </Authenticator.Provider>
  );
}
