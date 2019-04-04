export default {
    path: '*',
    onEnter: (_: any, replaceState: any) => replaceState(null, "/404")
}