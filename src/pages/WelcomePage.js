import React from 'react'
import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity} from 'react-native'

export function WelcomePage() {
    return (
        <ImageBackground source={require('../../assets/back.png')} style={styles.container} >
            <View style={styles.welcomeForm}>
                <View style={styles.textContainer}>
                    <View style={styles.tittleContainer}>
                        <Image style={{width: 52, height: 68}} source={require('../../assets/logo.png')} resizeMode='contain' />
                        <Text style={styles.tittle}>FUTAPP</Text>
                    </View>    
                    <Text style={styles.description}>Bem vindo ao FutApp. Cadastre-se agora e tenha o controle dos seus jogos na palma da mão.</Text>
                </View>
                <TouchableOpacity style={styles.startedButton}>
                    <Text style={styles.textButton}>Começar</Text>
                </TouchableOpacity>
                <Text style={{color: '#666666'}}>By Diiserra</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    welcomeForm: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '45%',
    },

    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    },

    tittleContainer: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: 22
    },

    tittle: {
        color: "#FFFFFF",
        fontSize: 38,
        fontWeight: '700',
        fontStyle: 'italic',
        marginLeft: 12
    },

    description: {
        fontSize: 14,
        fontWeight: '400',
        color: '#919191',
        textAlign: 'center'
    },

    startedButton: {
        width: '90%',
        height: 68,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFD300',
        borderRadius: 22
    },

    textButton: {
        fontSize: 24,
        fontWeight: '600'
    }
});