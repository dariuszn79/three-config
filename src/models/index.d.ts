import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PresetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProjectMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Preset {
  readonly id: string;
  readonly name?: string | null;
  readonly number?: number | null;
  readonly variants?: string | null;
  readonly projectID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Preset, PresetMetaData>);
  static copyOf(source: Preset, mutator: (draft: MutableModel<Preset, PresetMetaData>) => MutableModel<Preset, PresetMetaData> | void): Preset;
}

export declare class Project {
  readonly id: string;
  readonly name: string;
  readonly link?: string | null;
  readonly Presets?: (Preset | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Project, ProjectMetaData>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project, ProjectMetaData>) => MutableModel<Project, ProjectMetaData> | void): Project;
}