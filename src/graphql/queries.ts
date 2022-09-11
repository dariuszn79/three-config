/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPreset = /* GraphQL */ `
  query GetPreset($id: ID!) {
    getPreset(id: $id) {
      id
      name
      number
      variants
      projectID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPresets = /* GraphQL */ `
  query ListPresets(
    $filter: ModelPresetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPresets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        number
        variants
        projectID
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      link
      Presets {
        items {
          id
          name
          number
          variants
          projectID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        link
        Presets {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
