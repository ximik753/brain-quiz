import React from 'react'
import { StyleSheet, Image, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import UpdateItem from './CarouselItems/UpdateItem'
import FaqItem from './CarouselItems/FaqItem'

const AppCarousel = () => {
    const items = [
        <UpdateItem/>,
        <Image style={styles.item} source={require('../../assets/images/main/carousel/timetable.png')}/>,
        <FaqItem/>
    ]

    const renderItems = ({ item }) => item

    return (
        <Carousel
            layout="default"
            data={items}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={230}
            firstItem={1}
            renderItem={renderItems}
            contentContainerCustomStyle={styles.wrapper}
        />
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 25
    },
    item: {
        width: 230,
        height: 127
    }
})

export default AppCarousel
