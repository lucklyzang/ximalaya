import React from 'react'
import { View, Text, Button } from 'react-native'
import { RootStackNavigation } from '../navigator'
import {connect, ConnectedProps} from 'react-redux'
import {RootState} from '../models'

const mapStateToProps = ({home,loading}: RootState) => ({
    num: home.num,
    loading: loading.effects['home/asyncAdd']
});

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState{
    navigation: RootStackNavigation
};

class Home extends React.Component<IProps> {

    onPress = () => {
        const {navigation} = this.props;
        navigation.navigate('Details',{
            itemId: 2,
            otherParams: '我来了'
        })
    };

    handleAdd = () => {
        const {dispatch} = this.props;
        dispatch({
            type: 'home/add',
            payload: {
                num: 10
            }
        })
    };

    asyncHandleAdd  = () => {
        const {dispatch} = this.props;
        dispatch({
            type: 'home/asyncAdd',
            payload: {
                num: 2
            }
        })
    };

    render () {
        const {num,loading} = this.props;
        console.log('store值',loading);
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>
                    Home{num}
                </Text>
                <Text>{loading ? '计算中': ''}</Text>
                <Button
                    title="Go to Details"
                    onPress={this.onPress} 
                />
                <Button title="递增" onPress={this.handleAdd} />
                <Button title="异步递增" onPress={this.asyncHandleAdd} />
            </View>
        )
    }
}

export default connect(mapStateToProps)(Home);