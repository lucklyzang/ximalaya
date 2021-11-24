import {Effect, Model} from 'dva-core-ts'
import { Reducer } from 'react';

export interface HomeState {
    num: number;
    loading: boolean
}

const action =  {
    type: 'add'
}

interface HomeModel extends Model {
    namespace: 'home';
    state: HomeState;
    reducers: {
        add: Reducer<HomeState,any>
    };
    effects: {
        asyncAdd: Effect
    }

}
function delay (tiemout: number) {
    return new Promise((resolve) => {
        setTimeout(resolve,tiemout)
    })
}

const initialState = {
    num: 0,
    loading: false
}

const homeModel: HomeModel = {
    namespace: 'home',
    state: initialState,
    reducers: {
        add(state = initialState ,{payload}) {
            return {
                ...state,
                num: state.num + payload.num,
            }
        }
    },
    effects: {
        *asyncAdd ({payload},{call,put}) {
            yield call(delay,3000);
            yield put({
                type: 'add',
                payload
            })
        }
    }
};

export default homeModel;