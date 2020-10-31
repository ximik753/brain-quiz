import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Circle, Svg, G } from 'react-native-svg'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import { useSelector } from 'react-redux'

const QuizTimer = () => {
    const question = useSelector(state => state.game.question)
    const height = 45
    const width = 45
    const radius = (width - 10) / 2
    const circumference = radius * 2 * Math.PI
    const strokeWidth = 5
    const [progress, setProgress] = useState(100)

    useEffect(() => {
        setProgress(100)
        if (question) {
            const id = setInterval(() => {
                setProgress(prevState => {
                    if (prevState === 0) {
                        clearInterval(id)
                        return 0
                    }

                    return prevState - 10
                })
            }, 1000)

            return () => clearInterval(id)
        }
    }, [question])

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
                        strokeDashoffset={circumference - (progress / 100) * circumference}
                    />
                </G>
            </Svg>
            <Text style={styles.timer}>{progress / 10}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    timer: {
        fontFamily: fonts.bold,
        color: colors.font.default,
        fontSize: 18,
       position: 'absolute'
    }
})

export default QuizTimer
