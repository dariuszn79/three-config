/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePresetInput = {
  id?: string | null,
  name?: string | null,
  number?: number | null,
  variants?: string | null,
  projectID: string,
};

export type ModelPresetConditionInput = {
  name?: ModelStringInput | null,
  number?: ModelIntInput | null,
  variants?: ModelStringInput | null,
  projectID?: ModelIDInput | null,
  and?: Array< ModelPresetConditionInput | null > | null,
  or?: Array< ModelPresetConditionInput | null > | null,
  not?: ModelPresetConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Preset = {
  __typename: "Preset",
  id: string,
  name?: string | null,
  number?: number | null,
  variants?: string | null,
  projectID: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdatePresetInput = {
  id: string,
  name?: string | null,
  number?: number | null,
  variants?: string | null,
  projectID?: string | null,
};

export type DeletePresetInput = {
  id: string,
};

export type CreateProjectInput = {
  id?: string | null,
  name: string,
  link?: string | null,
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null,
  link?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  name: string,
  link?: string | null,
  Presets?: ModelPresetConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPresetConnection = {
  __typename: "ModelPresetConnection",
  items:  Array<Preset | null >,
  nextToken?: string | null,
};

export type UpdateProjectInput = {
  id: string,
  name?: string | null,
  link?: string | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type ModelPresetFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  number?: ModelIntInput | null,
  variants?: ModelStringInput | null,
  projectID?: ModelIDInput | null,
  and?: Array< ModelPresetFilterInput | null > | null,
  or?: Array< ModelPresetFilterInput | null > | null,
  not?: ModelPresetFilterInput | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  link?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type CreatePresetMutationVariables = {
  input: CreatePresetInput,
  condition?: ModelPresetConditionInput | null,
};

export type CreatePresetMutation = {
  createPreset?:  {
    __typename: "Preset",
    id: string,
    name?: string | null,
    number?: number | null,
    variants?: string | null,
    projectID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePresetMutationVariables = {
  input: UpdatePresetInput,
  condition?: ModelPresetConditionInput | null,
};

export type UpdatePresetMutation = {
  updatePreset?:  {
    __typename: "Preset",
    id: string,
    name?: string | null,
    number?: number | null,
    variants?: string | null,
    projectID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePresetMutationVariables = {
  input: DeletePresetInput,
  condition?: ModelPresetConditionInput | null,
};

export type DeletePresetMutation = {
  deletePreset?:  {
    __typename: "Preset",
    id: string,
    name?: string | null,
    number?: number | null,
    variants?: string | null,
    projectID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    link?: string | null,
    Presets?:  {
      __typename: "ModelPresetConnection",
      items:  Array< {
        __typename: "Preset",
        id: string,
        name?: string | null,
        number?: number | null,
        variants?: string | null,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    link?: string | null,
    Presets?:  {
      __typename: "ModelPresetConnection",
      items:  Array< {
        __typename: "Preset",
        id: string,
        name?: string | null,
        number?: number | null,
        variants?: string | null,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    link?: string | null,
    Presets?:  {
      __typename: "ModelPresetConnection",
      items:  Array< {
        __typename: "Preset",
        id: string,
        name?: string | null,
        number?: number | null,
        variants?: string | null,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPresetQueryVariables = {
  id: string,
};

export type GetPresetQuery = {
  getPreset?:  {
    __typename: "Preset",
    id: string,
    name?: string | null,
    number?: number | null,
    variants?: string | null,
    projectID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPresetsQueryVariables = {
  filter?: ModelPresetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPresetsQuery = {
  listPresets?:  {
    __typename: "ModelPresetConnection",
    items:  Array< {
      __typename: "Preset",
      id: string,
      name?: string | null,
      number?: number | null,
      variants?: string | null,
      projectID: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    link?: string | null,
    Presets?:  {
      __typename: "ModelPresetConnection",
      items:  Array< {
        __typename: "Preset",
        id: string,
        name?: string | null,
        number?: number | null,
        variants?: string | null,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      link?: string | null,
      Presets?:  {
        __typename: "ModelPresetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePresetSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePresetSubscription = {
  onCreatePreset?:  {
    __typename: "Preset",
    id: string,
    name?: string | null,
    number?: number | null,
    variants?: string | null,
    projectID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePresetSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePresetSubscription = {
  onUpdatePreset?:  {
    __typename: "Preset",
    id: string,
    name?: string | null,
    number?: number | null,
    variants?: string | null,
    projectID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePresetSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePresetSubscription = {
  onDeletePreset?:  {
    __typename: "Preset",
    id: string,
    name?: string | null,
    number?: number | null,
    variants?: string | null,
    projectID: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    link?: string | null,
    Presets?:  {
      __typename: "ModelPresetConnection",
      items:  Array< {
        __typename: "Preset",
        id: string,
        name?: string | null,
        number?: number | null,
        variants?: string | null,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    link?: string | null,
    Presets?:  {
      __typename: "ModelPresetConnection",
      items:  Array< {
        __typename: "Preset",
        id: string,
        name?: string | null,
        number?: number | null,
        variants?: string | null,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    link?: string | null,
    Presets?:  {
      __typename: "ModelPresetConnection",
      items:  Array< {
        __typename: "Preset",
        id: string,
        name?: string | null,
        number?: number | null,
        variants?: string | null,
        projectID: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
