import React from 'react'
import SnapCarousel, { AdditionalParallaxProps, Pagination, ParallaxImage } from 'react-native-snap-carousel'
import { Image, StyleSheet, View } from 'react-native';
import { hp, viewportWidth, wp } from '../../utils';
import { ICarousel } from '../../models/home';

interface IProps {
    data: ICarousel[]
};

const sliderWidth = viewportWidth;
const sideWidth = wp(90);
const sideHeight = hp(26);
const itemWidth = sideWidth + wp(2)*2;

class Carousel extends React.Component<IProps> {
    carouselRef = React.createRef<SnapCarousel<any>>();
    state = {
        activeSlide: 0
    }

    onSnapToItem = (slideIndex: number) => {
        this.setState({
            activeSlide: slideIndex
        });
    }

    renderItem = ({item}:{item:ICarousel},parallaxProps?: AdditionalParallaxProps) => {
        return (
            <ParallaxImage 
                source={{uri:item.image}}
                style={styles.image} 
                containerStyle={styles.imageContainer}
                parallaxFactor={0.8}
                showSpinner
                spinnerColor="rgba(0,0,0,0.25)"
                {...parallaxProps}
            />
        )
    };

    get pagination () {
        const {activeSlide} = this.state;
        const {data} = this.props;
        console.log('io',activeSlide);
        return (
            <View style={styles.paginationWrapper}>
                <Pagination containerStyle={styles.paginationContainer} 
                    activeDotIndex={activeSlide}
                    dotStyle={styles.dot}
                    dotContainerStyle={styles.dotContainer} 
                    inactiveDotScale={0.7}
                    inactiveDotOpacity={0.4}
                    dotsLength={data.length}
                    tappableDots={!!this.carouselRef.current} 
                />
            </View>
        )
    }

    render () {
        const {data} = this.props;
        return (
            <View>
                <SnapCarousel
                    ref={this.carouselRef}
                    data={data}
                    renderItem={this.renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages
                    loop={true}
                    autoplay={true} 
                    lockScrollWhileSnapping={true}
                    loopClonesPerSide={2}
                    onSnapToItem={this.onSnapToItem}
                    removeClippedSubviews={false}
                />
                {
                    this.pagination
                }
            </View>    
        )
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        width: itemWidth,
        height: sideHeight,
        borderRadius: 8
    },
    image: {
       ...StyleSheet.absoluteFillObject,
       resizeMode: 'cover'
    },
    paginationWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    paginationContainer: {
        position: 'absolute',
        top: -20,
        backgroundColor: 'rgba(0,0,0,0.35)',
        paddingHorizontal: 3,
        paddingVertical: 4,
        borderRadius: 8
    },
    dotContainer: {
        marginHorizontal: 6
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: 'rgba(255,255,255,0.92)'
    }
})

export default Carousel