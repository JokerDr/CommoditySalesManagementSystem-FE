import * as React from 'react'
import { componentModel } from './componentModel';

interface IComponentExt {
  model: any
  render(): React.ReactNode
}

export abstract class ComponentExt<T = {}, S = {}, SS = any> extends React.Component<S> implements IComponentExt {
  public model: T ;
  constructor(q?: S, p?: T) {
    super(q);
    this.model = p;
  }
  abstract render(): React.ReactNode
}