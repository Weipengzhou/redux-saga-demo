
   export function  buttonAdd(text){
        return {
            type: 'BUTTON_CLICK_ADD',
            text
        }
    }

    export function getSuccess(text) {
        return {
            type: 'GET_SUCCESS',
            text
        }
    }
    export function getError(text) {
        return {
            type: 'GET_ERROR',
            text
        }
    }
 

