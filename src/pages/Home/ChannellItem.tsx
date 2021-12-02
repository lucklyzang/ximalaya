import React from 'react'
import { Text, View } from 'react-native'
import { IChannels } from '../../models/home'

interface IProps {
    data: IChannels
};

class ChannellItem extends React.Component<IProps> {
    render () {
        return (
            <View>
                <Text>
                {JSON.stringify(this.props)}
                </Text>
            </View>
        )
    }
}

export default ChannellItem