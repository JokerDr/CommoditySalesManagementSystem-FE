import * as React from 'react'
import { componentModel } from './componentModel';

interface IComponentExt {
  model: any
  render(): React.ReactNode
}

export abstract class ComponentExt<T extends componentModel, S = {}> extends React.Component<S> implements IComponentExt {
  public model: T;
  abstract render(): React.ReactNode
}