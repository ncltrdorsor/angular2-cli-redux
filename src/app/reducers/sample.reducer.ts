export const sampleData = (state: any = [], {type, payload}) => {
    switch(type){
        case 'init':
            return payload;
        case 'plusOne':
            return Object.assign({}, state, {
                value: state.value + 1
            })
        case 'minusOne':
            return Object.assign({}, state, {
                value: state.value - 1
            });
        default:
            return state;
    }
}