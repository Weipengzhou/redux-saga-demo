import { call, put, takeLatest,fork } from 'redux-saga/effects';
import action from './action';
import changeNumber from '../api'
function* getClick({text}){
    try{
        const result = yield call(changeNumber)
        console.log(result)
        yield put(action.getSuccess(result))
     
    }catch(err){
        console.log(err)
        yield put(action.getError({value:'获取失败'}))
    }
}

function* defaultSaga(){
    yield[
        takeLatest('BUTTON_CLICK_ADD',getClick)
    ]
}

export default function* rootSaga() {
    yield [
        fork(defaultSaga)
    ];
}