import { RouteProp } from '@react-navigation/native';
import React from 'react'
import { View, Text } from 'react-native'
import { RootStackParamList } from '../navigator';

interface IProps {
    route: RouteProp<RootStackParamList,'Details'>
}

class Details extends React.Component<IProps> {
    render () {
        const {route} = this.props;
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>
                    Details
                </Text>
                <Text>
                  {route.params.itemId}
                </Text>
                <Text>
                  {route.params.otherParams}
                </Text>
            </View>
        )
    }
}

export default Details;