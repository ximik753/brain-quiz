import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { colors } from '../utils/colors'
import HeaderQuiz from '../components/Quiz/HeaderQuiz'
import QuestionsQuiz from '../components/Quiz/QuestionsQuiz'
import QuizChat from '../components/Quiz/QuizChat'

const QuizScreen = () => {
    return (
        <View style={styles.wrapper}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.container}
            >
                <HeaderQuiz/>
                <QuestionsQuiz/>
                <QuizChat/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.background.default,
        alignItems: 'center'
    },
    container: {
        alignItems: 'center',
        width: 290
    }
})

export default QuizScreen
