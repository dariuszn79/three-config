/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePreset = /* GraphQL */ `
  subscription OnCreatePreset($owner: String) {
    onCreatePreset(owner: $owner) {
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
export const onUpdatePreset = /* GraphQL */ `
  subscription OnUpdatePreset($owner: String) {
    onUpdatePreset(owner: $owner) {
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
export const onDeletePreset = /* GraphQL */ `
  subscription OnDeletePreset($owner: String) {
    onDeletePreset(owner: $owner) {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
