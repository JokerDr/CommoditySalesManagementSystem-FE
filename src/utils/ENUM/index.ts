
import EMenu from './EMenu'
import EHttp from './EHttp'
import ERoutes from './ERoutes'

const getEKV = (EParam: any): {key: string, val: string}[]=>{
    return Reflect.ownKeys(EParam).map((elem: any) => {
        return {
            key: elem,
            val: EParam[elem]
        };
    })
}


export {
    getEKV,
    EMenu,
    EHttp,
    ERoutes
}