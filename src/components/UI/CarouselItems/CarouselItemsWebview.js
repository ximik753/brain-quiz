import React from 'react'
import Modal from 'react-native-modal'
import WebView from 'react-native-webview'

const CarouselItemsWebview = ({ show, closeHandler, link }) => {
    return (
        <Modal
            isVisible={show}
            onBackButtonPress={closeHandler}
            onBackdropPress={closeHandler}
        >
            <WebView
                source={{ uri: link }}
            />
        </Modal>
    )
}

export default CarouselItemsWebview
