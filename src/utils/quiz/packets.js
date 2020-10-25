export const packets = Object.freeze({
    client: {
        Login: 10100,
        ClientCommands: 10200
    },
    server: {
        HomeData: 20102,
        Online: 20200,
        ChatMessage: 20300,
        NewQuestion: 20400,
        RightAnswer: 20401,
        UpdateStatus: 20402
    }
})
