import React from "react"
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native"

import { useNavigation } from '@react-navigation/native';

const Cadastrar = () => {

    const navigation = useNavigation()

    return (
        <View style={{ height: "100%", width: "100%" }}>
            <View style={cadastroStyles.firstContainer}>
                <View onTouchEnd={() => navigation.goBack()}  style={cadastroStyles.circle}>
                    <Text style={cadastroStyles.backText}>←</Text>
                    <Text style={cadastroStyles.backText}>Voltar</Text>
                </View>
            </View>
            <View style={cadastroStyles.secondContainer}>
                <View style={cadastroStyles.headerCadastro}>
                    <Text style={[cadastroStyles.title, { textAlign: "center" }]}>Crie sua</Text>
                    <Text style={[cadastroStyles.title, { textAlign: "center" }]}>Conta</Text>
                    <Text style={{ textAlign: "center" }}>Já Possui Registro? Faça Login</Text>
                </View>

                <View style={cadastroStyles.campos}>
                    <View style={cadastroStyles.formControl}>
                        <Text>Nome</Text>
                        <TextInput style={cadastroStyles.input} />
                    </View>
                    <View style={cadastroStyles.formControl}>
                        <Text>Email</Text>
                        <TextInput style={cadastroStyles.input} />
                    </View>
                    <View style={cadastroStyles.formControl}>
                        <Text>Senha</Text>
                        <TextInput secureTextEntry={true} style={cadastroStyles.input} />
                    </View>
                    <TouchableOpacity style={cadastroStyles.loginButton}>
                        <Text style={{ textAlign: "center", fontWeight: "bold", }}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}
export default Cadastrar

const cadastroStyles = StyleSheet.create({
    firstContainer: {
        height: "20%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    title: {
        color: "white",
        fontSize: 26,
        fontWeight: "700",
    },
    backText: {
        color: "white",
        fontSize: 20,
        fontWeight: "700",
    },
    appPhrase: {
        marginTop: 10,
        color: "#615bb3"
    },
    secondContainer: {
        height: "80%",
        backgroundColor: "#22263e",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        display: "flex",
        // alignItems: "center"
    },
    headerCadastro: {
        marginTop: 30,
    },
    loginButton: {
        marginBottom: 20,
        width: "100%",
        backgroundColor: "#4941cd",
        padding: 15,
        borderRadius: 15,
        marginTop: 17
    },
    campos: {
        marginTop: 19,
        display: "flex",
        alignItems: "flex-start",
        paddingHorizontal: 60
    },
    formControl: {
        width: "100%",
        marginBottom: 10
    },
    input: {
        backgroundColor: "#4b4d5c",
        borderRadius: 15,
        marginTop: 10,
        padding: 10
    },
    circle: {
        width: 130,
        borderRadius: 780,
        backgroundColor: "#4941cd",
        height: 130,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -10,
        marginLeft: -30
    }
})