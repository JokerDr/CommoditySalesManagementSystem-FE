import * as React from 'react'
import { componentModel } from './componentModel'

interface IComponentExt {
    model: any
    render(): React.ReactNode
}

export abstract class ComponentExt<T extends componentModel, S = any> extends React.Component<T> implements IComponentExt {
  public model: S;
  constructor(params: T) {
    super(params);
  }
  componentWillReceiveProps(){
    
  }
  abstract render(): React.ReactNode;
}