import { RouterStore as RouterStoreModel } from "./index";
import { RouterProps, RouteProps } from "react-router";

//将这个命名空间作为全局变量的形式来访问
export as namespace IRouterStore

//同时导出这个命名空间的接口，该接口以类作为数据类型校验
export interface RouterStore extends RouterStoreModel { }
