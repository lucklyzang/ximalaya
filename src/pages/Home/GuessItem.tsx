import React from 'react'
import {Text,StyleSheet,Image} from 'react-native'
import {IGuess} from '../../models/home'
import Touchable from '../../components/Touchable'
interface IProps {
    data: IGuess,
    onPress: (data:IGuess) => void
};



class GuessItem extends React.PureComponent<IProps> {

    onPress = () => {
        const {data, onPress} = this.props;
        onPress(data)
    }

    render () {
        const {data} = this.props;
        return (
            <Touchable style={styles.item} onPress={this.onPress}>
                <Image source={{uri: data.image}} style={styles.image} />
                <Text numberOfLines={2}>
                    {data.title}
                </Text>
            </Touchable>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        marginVertical: 6,
        marginHorizontal: 10
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 8,
        marginBottom: 10
    }
})

export default GuessItem