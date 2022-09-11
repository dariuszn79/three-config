import Head from "next/head";
import { useRouter } from "next/router";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import styles from "../../styles/Home.module.css";

import { Amplify, API } from "aws-amplify";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { GetProjectQuery, ListProjectsQuery, Project } from "../../API";
import { getProject, listProjects } from "../../graphql/queries";
import awsExports from "../../aws-exports";
import * as React from "react";
Amplify.configure(awsExports);

interface IProps {
  name: string;
  id: string;
}
const ProjectPage: NextPage = () => {
  const router = useRouter();
  const [projectState, setProjectState] = React.useState<IProps | null>(null);
  const project = router.query;
  console.log(project.name);
  React.useEffect(() => {
    setProjectState({ name: "dd", id: "2" });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{project.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{project.name} </h1>
    </div>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const projectQuery = (await API.graphql({
//     query: listProjects,
//   })) as { data: ListProjectsQuery; errors: any[] };

//   const paths = projectQuery.data.listProjects.items.map(
//     (project: Project) => ({
//       params: { id: project.id },
//     })
//   );

//   return {
//     fallback: true,
//     paths,
//   };
// };
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const response = (await API.graphql({
//     query: getProject,
//     variables: {
//       id: params.id,
//     },
//   })) as { data: GetProjectQuery };

//   return {
//     props: {
//       todo: response.data.getProject,
//     },
//   };
// };
export default ProjectPage;
