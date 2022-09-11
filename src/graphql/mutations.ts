/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPreset = /* GraphQL */ `
  mutation CreatePreset(
    $input: CreatePresetInput!
    $condition: ModelPresetConditionInput
  ) {
    createPreset(input: $input, condition: $condition) {
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
export const updatePreset = /* GraphQL */ `
  mutation UpdatePreset(
    $input: UpdatePresetInput!
    $condition: ModelPresetConditionInput
  ) {
    updatePreset(input: $input, condition: $condition) {
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
export const deletePreset = /* GraphQL */ `
  mutation DeletePreset(
    $input: DeletePresetInput!
    $condition: ModelPresetConditionInput
  ) {
    deletePreset(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
