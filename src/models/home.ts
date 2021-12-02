import {Effect, Model} from 'dva-core-ts'
import { Reducer } from 'react';
import { fetchCarouselData, fetchChannelData, fetchGuessData } from '../config/api';

export interface ICarousel {
    id: string,
    image: string,
    colors: [string,string]
}

export interface IGuess {
    id: string,
    title: string,
    image: string
}

export interface IChannels {
    id: string,
    title: string,
    image: string,
    played: number,
    playing: number,
    remark: string
}

export interface HomeState {
    carousels: ICarousel[],
    guessData: IGuess[],
    channels: IChannels[]
}


interface HomeModel extends Model {
    namespace: 'home';
    state: HomeState;
    reducers: {
        setState: Reducer<HomeState,any>
    };
    effects: {
        fetchCarousels: Effect,
        fetchGuess: Effect,
        fetchChannels: Effect
    }

}

const initialState = {
    carousels: [],
    guessData: [],
    channels: []

}

const homeModel: HomeModel = {
    namespace: 'home',
    state: initialState,
    reducers: {
        setState(state = initialState ,{payload}) {
            return {
                ...state,
                ...payload
            }
        }
    },
    effects: {
        *fetchCarousels (_,{call,put}) {
            const {data} = yield call(fetchCarouselData);
            console.log('轮播图数据',data);
            yield put({
                type: 'setState',
                payload: {
                    carousels: data
                }
            })
        },
        *fetchGuess (_,{call,put}) {
            const {data} = yield call(fetchGuessData);
            console.log('猜你喜欢数据',data);
            yield put({
                type: 'setState',
                payload: {
                    guessData: data
                }
            })
        },
        *fetchChannels (_,{call,put}) {
            const {data} = yield call(fetchChannelData);
            console.log('列表数据',data.results);
            yield put({
                type: 'setState',
                payload: {
                    channels: data.results
                }
            })
        }
    }
};

export default homeModel;