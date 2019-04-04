
// true => object
const isObject = (x: any) : Boolean => typeof x === 'object' && x !== null;

export default function cloneDeep(source: any, hash = new WeakMap()) {
    if(!isObject(source)) { return source; }
    if(hash.has(source)) { return hash.get(source); }

    let target  = Array.isArray(source) ? [...source] : {...source};
    hash.set(source, target);

    Reflect.ownKeys(source).forEach( key => {
        if(isObject(source[key])) {
            target[key] = cloneDeep(source[key], hash);
        } else {
            target[key] = source[key];
        }
    })
}