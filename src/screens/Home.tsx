import React from "react"
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Linking
} from "react-native"
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation()
    return (
        <View style={homeStyles.main}>
            <View style={[homeStyles.header, homeStyles.shadowProp]}>
                <View style={homeStyles.headerLogo}>
                    <Image style={{ width: 40, height: 40 }} source={require("../assets/img/gear.png")} />
                    <Text style={homeStyles.logoTitle1}>App</Text>
                    <Text style={homeStyles.logoTitle2}>Jornada</Text>
                </View>
                <View style={homeStyles.headerPhrase}>
                    <Text style={homeStyles.phrase}>Inclusão e Igualdade</Text>
                </View>
            </View>

            <View style={homeStyles.container}>
                <View>
                    <Text style={homeStyles.welcomePhrase1}>Olá, Usuário!</Text>
                    <Text style={homeStyles.welcomePhrase2}>Faça suas trilhas abaixo 👇</Text>
                </View>
                <View style={homeStyles.homeButtonsMain}>
                    <View style={homeStyles.homeButtonContainer}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.guiadacarreira.com.br/teste-vocacional/')} style={homeStyles.homeButtons}>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require("../assets/img/plano-de-carreira.png")}
                            />
                        </TouchableOpacity>
                        <Text style={homeStyles.homeButtonText}>Teste {`\n`} Carreira</Text>
                    </View>
                    <View style={homeStyles.homeButtonContainer}>
                        <TouchableOpacity onPress={() => Linking.openURL("https://quizlet.com/latest")} style={homeStyles.homeButtons}>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require("../assets/img/rota.png")}
                            />
                        </TouchableOpacity>
                        <Text style={homeStyles.homeButtonText}>Teste {`\n`} Conhecimento</Text>
                    </View>
                    <View style={homeStyles.homeButtonContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate("TrilhaHS")} style={homeStyles.homeButtons}>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require("../assets/img/skills.png")}
                            />
                        </TouchableOpacity>
                        <Text style={homeStyles.homeButtonText}>Hard {`\n`} Skills</Text>
                    </View>
                    <View style={homeStyles.homeButtonContainer}>
                        <TouchableOpacity style={homeStyles.homeButtons}>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require("../assets/img/softskills.png")}
                            />
                        </TouchableOpacity>
                        <Text style={homeStyles.homeButtonText}>Soft {`\n`} Skills</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Home

const homeStyles = StyleSheet.create({
    header: {
        backgroundColor: "white",
    },
    headerLogo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    headerPhrase: {
        padding: 10,
        alignItems: "center"
    },
    phrase: {
        color: "#032074",
        fontSize: 17,
        textTransform: "uppercase",
        fontWeight: "700"
    },
    logoTitle1: {
        color: "#032074",
        fontSize: 20,
        marginLeft: 15,
        fontWeight: "700"
    },
    logoTitle2: {
        color: "black",
        fontSize: 20,
        fontWeight: "700"
    },
    main: {
        backgroundColor: "#EEEE",
        width: "100%",
        height: "100%"
    },
    shadowProp: {
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        // shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10
    },
    container: {
        marginTop: 20,
        paddingHorizontal: 20
    },
    welcomePhrase1: {
        color: "black",
        fontWeight: "bold",
        fontSize: 18
    },
    welcomePhrase2: {
        color: "black",
        fontSize: 18
    },
    homeButtonContainer: {
        width: "30%",
        marginRight: 10,
        marginBottom: 10
    },
    homeButtonsMain: {
        marginTop: 20,
        flexDirection: "row",
        width: "100%",
        flexWrap: "wrap"
    },
    homeButtons: {
        borderRadius: 40,
        backgroundColor: "#d2d8e8",
        padding: 10,
        maxWidth: 100,
        alignItems: "center",
        justifyContent: "center",
        height: 70
    },
    homeButtonText: {
        color: "#7f8386",
        fontSize: 13,
        textAlign: "center",
        marginTop: 10,
        fontWeight: "bold"
    },
    buttonContainer: {
        alignItems: "center"
    }
})