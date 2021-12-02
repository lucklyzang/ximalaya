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
            <ChannellItem data={item}/>
        )
    }

    render () {
        const {carousels,channels} = this.props;
        return (
            <ScrollView>
                <Carousel data={carousels} />
                <Guess/>
                <FlatList data={channels} renderItem={this.renderItem} />
            </ScrollView>
        )
    }
}


export default connect(mapStateToProps)(Home);