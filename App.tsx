import React from "react"
import Navigation from "./src/navigator"
import {Provider} from "react-redux"
import store from "./src/config/dva"
import { StatusBar } from "react-native"
export default class extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <Navigation />
                <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true} />
            </Provider>
        )
    }
}
