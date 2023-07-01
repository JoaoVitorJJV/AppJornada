import React from "react"
import { Text, View, TouchableOpacity, StyleSheet } from "react-native"
import { useNavigation } from '@react-navigation/native';

const TrilhaHardSkill = () => {
    const navigation = useNavigation()
    return (
        <View style={trilhaStyles.main}>
            <View style={[trilhaStyles.header, trilhaStyles.shadowProp]}>
                <View style={trilhaStyles.headerPhrase}>
                    <View onTouchEnd={() => navigation.navigate('Home')} style={{ width: "30%" }}>
                        <Text style={trilhaStyles.phraseX}>X</Text>
                    </View>
                    <View style={{ width: "70%", justifyContent: "flex-start" }}>
                        <Text style={trilhaStyles.phrase}>Trilha Hard Skills</Text>
                    </View>

                </View>
            </View>

            <View style={trilhaStyles.container}>
                <TouchableOpacity style={[trilhaStyles.trilhaButton, { backgroundColor: "#415891" }]}>
                    <Text style={trilhaStyles.trilhaText}>HTML & CSS</Text>
                </TouchableOpacity>
                <Text style={trilhaStyles.arrowStyle}>
                    ↓
                </Text>
                <TouchableOpacity disabled={true} style={[trilhaStyles.trilhaButton, { backgroundColor: "#efd81d", opacity: 0.5 }]}>
                    <Text style={trilhaStyles.trilhaText}>JAVASCRIPT</Text>
                </TouchableOpacity>
                <Text style={trilhaStyles.arrowStyle}>
                    ↓
                </Text>
                <TouchableOpacity disabled={true} style={[trilhaStyles.trilhaButton, { backgroundColor: "#5ed3f3", opacity: 0.5 }]}>
                    <Text style={trilhaStyles.trilhaText}>REACT</Text>
                </TouchableOpacity>
                <Text style={trilhaStyles.arrowStyle}>
                    ↓
                </Text>
                <TouchableOpacity disabled={true} style={[trilhaStyles.trilhaButton, { backgroundColor: "#5ed3f3", opacity: 0.5 }]}>
                    <Text style={trilhaStyles.trilhaText}>REACT NATIVE</Text>
                </TouchableOpacity>
                <Text style={trilhaStyles.arrowStyle}>
                    ↓
                </Text>
                <TouchableOpacity disabled={true} style={[trilhaStyles.trilhaButton, { backgroundColor: "#10944d", opacity: 0.5 }]}>
                    <Text style={trilhaStyles.trilhaText}>MongoDB</Text>
                </TouchableOpacity>
            </ View>
        </View>
    )
}

export default TrilhaHardSkill
const trilhaStyles = StyleSheet.create({
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
        // alignItems: "center",
        flexDirection: "row"
    },

    phrase: {
        color: "#032074",
        fontSize: 17,
        textTransform: "uppercase",
        fontWeight: "700"
    },
    phraseX: {
        color: "black",
        fontSize: 17,
        textTransform: "uppercase",
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
        paddingHorizontal: 20,
        alignItems: "center"
    },
    trilhaButton: {
        padding: 30,
        borderRadius: 20
    },
    trilhaText: {
        color: "white",
        fontWeight: "bold"
    },
    arrowStyle: {
        color: "black",
        fontSize: 50,
        marginTop: -20
    }
})