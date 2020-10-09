import React from 'react'
import { Image, StyleSheet } from 'react-native'

const AppParticles = () => {
    return (
        <>
            <Image style={styles.partialOne} source={require('../../assets/images/authorization/particles/part_2.png')}/>
            <Image style={styles.partialTwo} source={require('../../assets/images/authorization/particles/part_3.png')}/>
        </>
    )
}

const styles = StyleSheet.create({
    partialOne: {
        position: 'absolute',
        left: 0,
        top: 0
    },
    partialTwo: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '100%'
    }
})

export default AppParticles
