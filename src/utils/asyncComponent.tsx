import React from 'react'
export const asyncComponent = ( loadComponent: Promise<React.ReactNode> ) => class AsyncComponent extends React.Component {
         public state: any = {
             Component: null
           };

           componentWillMount() {
             if (this.hasLoadedComponent()) {
               return;
             }

             loadComponent
                 .then((module: any) => module.default)
                 .then((Component: React.ReactNode) => {
                 this.setState({ Component });
               })
               .catch((err: string) => {
                 console.error(
                   `Cannot load component in <AsyncComponent />`
                 );
                 throw err;
               });
           }

           hasLoadedComponent() {
             return this.state.Component !== null;
           }

           render() {
             const { Component } = this.state;
             return Component ? <Component {...this.props} /> : null;
           }
         };
