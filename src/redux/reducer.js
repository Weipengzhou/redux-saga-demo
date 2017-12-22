const initialState = {
        value:'点击获取数据',
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUTTON_CLICK_ADD':
            return Object.assign({}, state, {
                value:'请求中'
            });

        case 'GET_SUCCESS':
            console.log(action)
            return Object.assign({}, state, {
                value: JSON.stringify(action.text)
            });
        
        case 'GET_ERROR':
            return Object.assign({}, state, {
                value: action.text.value
            });
       

        default:
            return state;
    }
}

export default reducer;