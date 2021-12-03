import React from 'react'
import { FlatList, ListRenderItemInfo, ScrollView, Text, View } from 'react-native'
import { RootStackNavigation } from '../../navigator'
import {connect, ConnectedProps} from 'react-redux'
import {RootState} from '../../models'
import Carousel from './Carousel'
import ChannellItem from './ChannellItem'
import Guess from './Guess'
import { IChannels } from '../../models/home'

const mapStateToProps = ({home,loading}: RootState) => ({
    carousels: home.carousels,
    channels: home.channels,
    loading: loading.effects['home/asyncAdd']
});

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState{
    navigation: RootStackNavigation
};

class Home extends React.Component<IProps> {

    componentDidMount () {
        const {dispatch} = this.props;
        dispatch({
            type: 'home/fetchCarousels'
        });
        dispatch({
            type: 'home/fetchChannels'
        })

    }

    renderItem = ({item}:ListRenderItemInfo<IChannels>) => {
        return (
            <ChannellItem data={item} onPress={this.onPress} />
        )
    };
    
    get header () {
        const {carousels} = this.props;
        return (
            <View>
                <Carousel data={carousels} />
                <Guess/>
            </View>
        )
    }

    onPress = (data:IChannels) => {
        console.log('子组件向父组件传递的数据',data)
    }

    keyExtractor = (item: IChannels) => {
        return item.id
    }

    // 加载更多
    onEndReached = () => {
        console.log('--加载更多--');
        const {dispatch} = this.props;
        dispatch({
            type: 'home/fetchChannels',
            payload: {
                loadMore: true
            }
        })
    }

    render () {
        const {channels} = this.props;
        return (
            <FlatList data={channels} 
                renderItem={this.renderItem} 
                ListHeaderComponent={this.header}
                keyExtractor={this.keyExtractor}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={0.2}
            />
        )
    }
}


export default connect(mapStateToProps)(Home);