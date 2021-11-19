import React from 'react'
import { View, Text, Button } from 'react-native'
import { RootStackNavigation } from '../navigator';

interface IProps {
    navigation: RootStackNavigation
};

class Found extends React.Component<IProps> {

    onPress = () => {
        const {navigation} = this.props;
        navigation.navigate('Details',{
            itemId: 2,
            otherParams: '我来了'
        })
    };

    render () {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>
                Found
                </Text>
                <Button
                    title="Go to Details"
                    onPress={this.onPress}
                />
            </View>
        )
    }
}

export default Found;