import React from "react"
import {
    Text,
    View,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity,
} from "react-native"

import { useNavigation } from '@react-navigation/native';
const Login = () => {
    const navigation = useNavigation()

 
    return (
        <View style={{ height: "100%", width: "100%" }}>
            <View style={loginStyles.firstContainer}>
                <Image source={require("../assets/img/gear.png")} alt="Logo" />
                <Text style={loginStyles.title}>App</Text>
                <Text style={loginStyles.title}>Jornada</Text>
                <Text style={loginStyles.appPhrase}>a inclusão é o caminho para a igualdade</Text>
            </View>
            <View style={loginStyles.secondContainer}>

                <TouchableOpacity onPress={() => navigation.navigate('Logar')} style={loginStyles.loginButton}>
                    <Text style={{ textAlign: "center", fontWeight: "bold", }}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={loginStyles.siginupButton}>
                    <Text style={{ textAlign: "center", fontWeight: "bold", }}>Me Inscrever</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Login

const loginStyles = StyleSheet.create({
    firstContainer: {
        height: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: "#615bb3",
        fontSize: 28,
        textTransform: "uppercase",
        fontWeight: "700",
        fontStyle: "italic"
    },
    appPhrase: {
        marginTop: 10,
        color: "#615bb3"
    },
    secondContainer: {
        height: "50%",
        backgroundColor: "#032074",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    loginButton: {
        marginBottom: 20,
        width: "70%",
        backgroundColor: "#4941cd",
        padding: 15,
        borderRadius: 15,
    },
    siginupButton: {
        width: "70%",
        // backgroundColor: "#4941cd",
        padding: 15,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#FF9929"
    }
})