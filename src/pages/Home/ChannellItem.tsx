import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IChannels } from '../../models/home'
import Icon from '../../assets/iconfont/index';
import Touchable from '../../components/Touchable'
interface IProps {
    data: IChannels,
    onPress: (data:IChannels) => void
};

class ChannellItem extends React.PureComponent<IProps> {

    onPress = () => {
        const {data,onPress} = this.props;
        if (typeof onPress === 'function') {
            onPress(data)
        }
    }

    render () {
        const {data} = this.props;
        return (
            <Touchable onPress={this.onPress}>
                <View style={styles.container}>
                    <Image source={{uri: data.image}} style={styles.image}/>
                    <View style={styles.rightContainer}>
                        <Text style={styles.title} numberOfLines={1}>{data.title}</Text>
                        <Text style={styles.remark} numberOfLines={2}>{data.remark}</Text>
                        <View style={styles.bottom}>
                            <View style={styles.playedView}>
                                <Icon name='icon-icon_v' size={14} />
                                <Text style={styles.number}>{data.played}</Text>
                            </View>
                            <View style={styles.playingView}>
                                <Icon name='icon-icon_shengyin_xian' size={14} />
                                <Text style={styles.number}>{data.playing}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Touchable>    
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 5
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 10
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 16,
        marginBottom: 10
    },
    remark: {
        backgroundColor: '#f8f8f8',
        padding: 5,
        marginBottom: 5
    },
    bottom: {
        flexDirection: 'row'
    },
    playedView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20
    },
    playingView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    number: {
        marginLeft: 5
    }
})

export default ChannellItem