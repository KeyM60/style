import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Header = () => {
    return (
        <View style={[styles.container, styles.header]}>    
            <Text style={styles.text}>Header</Text>
        </View>
    );
};

export const Contents = () => {
    return (
        <View style={[styles.container, styles.contents]}>    
            <Text style={styles.text}>Contents</Text>
        </View>
    );
};

export const Footer = () => {
    return ( 
        <View style={[styles.container, styles.footer]}>
            <Text style={styles.text}>Footer</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    header: {
        backgroundColor: '#f1c40f',
    },
    contents: {
        backgroundColor: '#1abc9c',
        height: 640,
    },
    footer: {
        backgroundColor: '#3498db',
    },
    text:{
        width: '30%',
        height: '30%',
        fontSize: 26,
        backgroundColor: 'blue',
        shadowColor: "#000000", //그림자색
        shadowOpacity: 0.3,//그림자 투명도
        shadowOffset: { width: 3, height: 3 }, //그림자 위치
        textAlignVertical: 'center',
        textAlign: 'center',
    },
});