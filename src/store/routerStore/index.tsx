import { observable, action, computed } from "mobx";
// import { RouterProps, Router } from "react-router";
import * as H from 'history'


export class RouterStore {
         @observable public queryParams: any = null;
         @observable public curtRoute: string = "";
         @observable private history: H.History = H.createHashHistory();

         constructor(param?: any) {
           this.locationObj;
         }

         @action
         public push(path: string, query?: {}) {
           this.history.push(path, query);
         }

         @action
         public replace(path: string, query?: {}) {
           this.history.replace(path, query);
         }

         @computed
         public get locationObj(): H.LocationState {
           return this.history.location;
         }
    public set locationObj(locationObj: H.LocationState) {
           const qsItems: [] =
             locationObj.search.length > 0
               ? this.locationObj.search.substring(1).split("&") //search 的字符串格式类似是 ‘?1=b&n=2’
               : [];
           qsItems.forEach((elem: string) => {
             const [name, value] = elem.split("=");
             name.length && (this.queryParams[name] = value);
           });
         }
       }