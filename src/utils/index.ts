import {Dimensions} from 'react-native'

const {width: viewportWidth, height: viewportheight} = Dimensions.get('window')

// 根据百分比获取宽高
function wp(percent: number) {
    const value = (viewportWidth * percent)/100;
    return Math.round(value)
}

function hp(percent: number) {
    const value = (viewportheight * percent)/100;
    return Math.round(value)
}

export {
    viewportWidth,
    viewportheight,
    wp,
    hp
}