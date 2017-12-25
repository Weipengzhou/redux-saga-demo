const initialState = {
        value:'点击获取数据',
        buttonState:false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUTTON_CLICK_ADD':
            return Object.assign({}, state, {
                value:'请求中',
                buttonState:true
            });

        case 'GET_SUCCESS':
            console.log(action)
            return Object.assign({}, state, {
                value: JSON.stringify(action.text),
                buttonState: false
            });
        
        case 'GET_ERROR':
            return Object.assign({}, state, {
                value: action.text.value,
                buttonState: false
            });
       

        default:
            return state;
    }
}

export default reducer;