import React from 'react'
import { View, StyleSheet, Text, FlatList, ActivityIndicator } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'
import { useSelector } from 'react-redux'
import QuizWinnerItem from './QuizWinnerItem'

const QuizEnding = () => {
    const winners = useSelector(state => state.game.winners)

    const renderItem = ({ item }) => (
        <QuizWinnerItem
            name={item.name}
            avatar={item.avatar}
        />
    )

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Викторина окончена!</Text>
            <Text style={{ ...styles.title, ...styles.titleWinners }}>Список победителей:</Text>
            {
                winners
                    ? winners.length
                        ? <FlatList
                            data={winners}
                            renderItem={renderItem}
                            keyExtractor={item => item.name}
                            showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.container}
                            numColumns={4}
                        />
                        : <Text style={styles.winnersNotFound}>Победителей нету</Text>
                    : <ActivityIndicator
                        color={colors.background.loader}
                        size="large"
                    />
            }

        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: '50%',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        color: colors.font.default,
        fontFamily: fonts.bold,
        fontSize: 24
    },
    titleWinners: {
        marginTop: 10
    },
    container: {
        marginTop: 30,
        justifyContent: 'center'
    },
    winnersNotFound: {
        color: colors.font.boosterCount,
        fontFamily: fonts.bold,
        fontSize: 24,
        textAlign: 'center',
        marginTop: 30
    }
})

export default QuizEnding
