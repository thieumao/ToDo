import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { toggleAdd } from '../redux/actionCreators';

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text />
                <Text style={styles.title}>MY WORKS</Text>
                <TouchableOpacity onPress={() => this.props.toggleAdd()}>
                    <Text style={styles.button}>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(null, { toggleAdd })(Header);

const styles = StyleSheet.create({
    header: { 
        flex: 1, 
        backgroundColor: 'orange', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20, 
        paddingTop: 20
    },
    title: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
    button: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'red', 
        borderRadius: 4,
        padding: 4
    },
}); 
