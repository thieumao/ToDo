import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { addWord, toggleAdd } from '../redux/actionCreators';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            detail: ''
        };
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd() {
        const { title, detail } = this.state;
        this.props.addWord(title, detail);
        this.props.toggleAdd();
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.textInput} 
                    value={this.state.title}
                    onChangeText={text => this.setState({ title: text })}
                    placeholder="Title"
                />
                <TextInput 
                    style={styles.textInput} 
                    value={this.state.detail}
                    onChangeText={text => this.setState({ detail: text })}
                    placeholder="Detail"
                />
                <TouchableOpacity onPress={this.onAdd}>
                    <Text style={styles.button}>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(null, { addWord, toggleAdd })(Form);

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: 250,
        height: 40,
        backgroundColor: '#F5F5F5',
        margin: 10,
        paddingHorizontal: 10
    },
    button: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'red', 
        borderRadius: 4,
        padding: 4
    }
});
