import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import {AccentColors,NeutralColors} from '../../common/Colors.ts';

interface IProps {
    headerText: string;
    buttonText: string;
    onPressLogin:() => void;
    onPressSignup:() => void;
}

export default class LoginForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    render() {
        const { headerText, buttonText, onPressLogin, onPressSignup } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{headerText}</Text>
                <TextInput
                    maxLength={250}
                    placeholder='User name'
                    style={styles.textInput}
                />
                <TextInput
                    maxLength={250}
                    placeholder='Password'
                    secureTextEntry={true}
                    style={styles.textInput}
                />
                <TouchableOpacity 
                    onPress={onPressLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>{buttonText}</Text>
                </TouchableOpacity>
                <View style={styles.signupContainer}>
                    <Text style={styles.noAcctText}>Need an account yet?</Text>
                    <TouchableWithoutFeedback
                        onPress={onPressSignup}
                    >
                        <Text style={styles.signupText}>Sign up</Text>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    button: {
        backgroundColor: AccentColors.powder,
        borderRadius: 20,
        height: 45,
        marginVertical: 10,
        paddingHorizontal: 5,
        width: 300,
    },
    buttonText: {
        color: NeutralColors.white,
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10,
        textAlign: 'center',
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        margin: 20,
    },
    noAcctText: {
        color: NeutralColors.white,
        fontSize: 14,
    },
    signupContainer: {
        flexDirection: 'row',
    },
    signupText: {
        color: NeutralColors.quillInk,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    textInput: {
        backgroundColor: NeutralColors.lightGray,
        borderRadius: 20,
        fontSize: 18,
        height: 45,
        marginVertical: 10,
        paddingHorizontal: 10,
        width: 300,
    },
    title: {
        color: NeutralColors.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
}); 