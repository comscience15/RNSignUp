import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AccentColors, NeutralColors} from '../common/Colors.ts';
import LoginForm from '../components/login/LoginForm';

export default class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <LoginForm 
                    headerText='Log In to your account'
                    buttonText='Log In'
                    onPressLogin={null}  // TODO: add onPressLogin function
                    onPressSignup={null}  // TODO: add onPressSignup function
                />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: AccentColors.azure,
        flex: 1,
        justifyContent: 'center',
    }
});