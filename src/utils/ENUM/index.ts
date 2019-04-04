
import * as ERootMap from "./ERootMap";
import * as EHomeSider from './EHomeSider'


const getEKV = (EParam: any): {}[]=>{
    return Reflect.ownKeys(EParam).map((elem: any) => {
        return {
            key: elem,
            val: EParam[elem]
        };
    })
}


export {
    getEKV,
    ERootMap,
    EHomeSider
}