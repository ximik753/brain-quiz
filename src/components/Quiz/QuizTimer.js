import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Circle, Svg, G } from 'react-native-svg'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'

const QuizTimer = () => {
    const height = 45
    const width = 45
    const radius = (width - 10) / 2
    const circumference = radius * 2 * Math.PI
    const progress = circumference - (30 / 100) * circumference
    const strokeWidth = 5

    return (
        <View style={styles.wrapper}>
            <Svg height={height} width={width}>
                <G rotation={-90} origin={`${radius + strokeWidth}, ${radius + strokeWidth}`}>
                    <Circle
                        r={radius}
                        cy={height / 2}
                        cx={width / 2}
                        strokeWidth={strokeWidth}
                        stroke={colors.border.timer}/>
                    <Circle
                        r={radius}
                        cy={height / 2}
                        cx={width / 2}
                        strokeWidth={strokeWidth}
                        stroke={colors.border.progress}
                        strokeDasharray={circumference}
                        strokeDashoffset={progress}
                    />
                </G>
            </Svg>
            <Text style={styles.timer}>7</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative'
    },
    timer: {
        fontFamily: fonts.bold,
        color: colors.font.default,
        fontSize: 18,
        position: 'absolute',
        left: '38%',
        top: '23%'
    }
})

export default QuizTimer
