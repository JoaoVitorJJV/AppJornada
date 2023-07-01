import React from "react"
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native"

import { useNavigation } from '@react-navigation/native';

const Logar = () => {
    const [isError, setIsError] = React.useState<boolean>(false)
    const [msgError, setMsgError] = React.useState("")
    const [loginData, setLoginData] = React.useState({
        email: "",
        pass: ""
    })

    const navigation = useNavigation()

    const handleLogin = () => {
        
        if (loginData.email == "admin@gmail.com" && loginData.pass == "1234") {
            navigation.navigate("Home")
        } else {
            setIsError(true)
            setMsgError("Nome de usuário ou senha incorretos.")
            
        }
    }

    const handleSetEmail = (value: string) => {
        setLoginData({
            email: value,
            pass: loginData.pass
        })
    }

    const handleSetPass = (value: string) => {
        setLoginData({
            email: loginData.email,
            pass: value
        })
    }

    return (
        <View style={{ height: "100%", width: "100%" }}>
            <View style={logarStyles.firstContainer}>
                <View onTouchEnd={() => navigation.goBack()} style={logarStyles.circle}>
                    <Text style={logarStyles.backText}>←</Text>
                    <Text style={logarStyles.backText}>Voltar</Text>
                </View>
            </View>
            <View style={logarStyles.secondContainer}>
                <View style={logarStyles.headerCadastro}>
                    <Text style={[logarStyles.title, { textAlign: "center" }]}>Login</Text>
                    <Text style={isError ?
                        { textAlign: "center", color: "red" }
                        :
                        { textAlign: "center" }
                    }
                    >{(isError ? msgError : "Entre Para Acessar")}</Text>
                </View>

                <View style={logarStyles.campos}>
                    <View style={logarStyles.formControl}>
                        <Text>Email</Text>
                        <TextInput
                            onChangeText={(text) => handleSetEmail(text)}
                            style={logarStyles.input}
                        />
                    </View>
                    <View style={logarStyles.formControl}>
                        <Text>Senha</Text>
                        <TextInput
                            onChangeText={(value) => handleSetPass(value)}
                            secureTextEntry={true}
                            style={logarStyles.input}
                        />
                    </View>
                    <TouchableOpacity onPress={() => handleLogin()} style={logarStyles.loginButton}>
                        <Text style={{ textAlign: "center", fontWeight: "bold", }}>Entrar</Text>
                    </TouchableOpacity>
                    <View style={{ width: "100%" }}>
                        <Text style={{ textAlign: "center" }}>Esqueceu a Senha?</Text>
                        <Text style={{ textAlign: "center", marginTop: 10 }}>Quero me Cadastrar</Text>
                    </View>

                </View>

            </View>
        </View>
    )
}
export default Logar

const logarStyles = StyleSheet.create({
    firstContainer: {
        height: "30%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    title: {
        color: "white",
        fontSize: 36,
        fontWeight: "700",
    },
    backText: {
        color: "white",
        fontSize: 20,
        fontWeight: "700",
    },
    secondContainer: {
        height: "70%",
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