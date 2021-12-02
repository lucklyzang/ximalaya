import React from 'react'
import {View,Text,StyleSheet,FlatList,Image, TouchableOpacity, Alert} from 'react-native'
import {connect, ConnectedProps} from 'react-redux'
import {RootState} from '../../models'
import {IGuess} from '../../models/home'
import Touchable from '../../components/Touchable'
import Icon from '../../assets/iconfont/index';
const mapStateToProps = ({home,loading}: RootState) => ({
    guessData: home.guessData,
    loading: loading.effects['home/asyncAdd']
});

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;


class Guess extends React.Component<ModelState> {

    componentDidMount () {
        this.fetch()
    }

    fetch = () => {
        const {dispatch} = this.props;
        dispatch({
            type: 'home/fetchGuess'
        })
    }

    renderItem = ({item}:{item:IGuess}) => {
        return (
            <Touchable style={styles.item} onPress={() => {alert('点击')}}>
                <Image source={{uri: item.image}} style={styles.image} />
                <Text numberOfLines={2}>
                    {item.title}
                </Text>
            </Touchable>
        )
    }

    render () {
        const {guessData} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.header}> 
                    <View style={styles.headerRight}>
                        <Icon name="icon-xihuan" />
                        <Text style={styles.headerTitle}>猜你喜欢</Text>
                    </View>
                    <View style={styles.headerLeft}>
                        <Text style={styles.moreText}>更多</Text>
                        <Icon name="icon-arrow-right" />
                    </View>
                </View>
                <FlatList numColumns={3} data={guessData} renderItem={this.renderItem} />
                <Touchable style={styles.changeGuess} onPress={this.fetch}>
                    <Icon color="red" name="icon-huanyipi"/>
                    <Text style={styles.changeGuessText}>换一批</Text>
                </Touchable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        margin: 16,
        borderRadius: 8
    },
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
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomColor: '#efefef',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center'
    
    },
    headerTitle: {
        marginLeft: 5,
        color: '#333'
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    moreText: {
        color: '#6f6f6f'
    },
    changeGuess: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    changeGuessText: {
        marginLeft: 5
    }
})

export default connect(mapStateToProps)(Guess);