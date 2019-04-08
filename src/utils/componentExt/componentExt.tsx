import * as React from 'react'
import { componentModel } from './componentModel';

interface IComponentExt {
  model: any
  render(): React.ReactNode
}

export abstract class ComponentExt<T extends componentModel, S = {}, SS = any> extends React.Component<S> implements IComponentExt {
  public model: typeof componentModel ;
  // constructor(p?: typeof componentModel, q?: S) {
  //   super(q);
  //   this.model = p;
  // }
  abstract render(): React.ReactNode
}