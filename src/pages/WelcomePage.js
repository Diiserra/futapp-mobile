import React from 'react'
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity} from 'react-native'


export function WelcomePage() {
    return (
       <View style ={styles.container}>
           <View style={styles.containerLogo}>
               <ImageBackground source={require('../../assets/welcome.png')} style={styles.imageLogo} />
           </View>
           <View style={styles.containerButtons}>
               <TouchableOpacity style={{backgroundColor: '#FFD300', ...styles.button}}>
                   <Text style={styles.textButton}>Cadastre-se</Text>
               </TouchableOpacity>
               <Text>||</Text>
               <TouchableOpacity style={{ borderWidth: 1, borderColor: '#FFD300' ,...styles.button}}>
                   <Text style={styles.textButton}>Entre</Text>
               </TouchableOpacity>
           </View>
           <Text style={styles.textFooter}>By Diiserra</Text>
       </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },

    containerLogo: {
        flex: 2.5,
        backgroundColor: '#FFD300',
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageLogo: {
        flex: 1,
        width: '90%',
        height: '100%',
        justifyContent: 'flex-end'
    },

    textLogo: {
        fontSize: 24,
        fontWeight: '500'
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 140,
        height: 52,
        borderRadius: 6,
        margin: 6
    },

    textButton: {
        fontSize: 16,
        fontWeight: '500'
    }, 

    textFooter: { 
        alignSelf: 'center', 
        fontSize: 16, 
        color: '#d0d0d0',
        margin: 8}
});