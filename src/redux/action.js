let actions = {
    buttonAdd: function (text) {
        return {
            type: 'BUTTON_CLICK_ADD',
            text
        }
    },

    getSuccess: function (text) {
        return {
            type: 'GET_SUCCESS',
            text
        }
    },
    getError: function (text) {
        return {
            type: 'GET_ERROR',
            text
        }
    }
}
export default actions;