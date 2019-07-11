import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { showToDo, showDone, showAll } from '../redux/actionCreators';

class Filter extends Component {
    getTextStyle(statusName) {
        const { myFilterStatus } = this.props;
        if (statusName === myFilterStatus) return styles.selecttedButtonText;
        return styles.buttonText;
    }

    setFilterStatus(actionType) {
        this.props.dispatch({ type: actionType });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.showToDo()}>
                    <Text style={this.getTextStyle('TODO')}>TODO</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.showDone()}>
                    <Text style={this.getTextStyle('DONE')}>DONE</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.showAll()}>
                    <Text style={this.getTextStyle('ALL')}>ALL</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { myFilterStatus: state.filterStatus };
}

export default connect(mapStateToProps, {
    showToDo, showDone, showAll
})(Filter);

const styles = StyleSheet.create({
    container: { 
        backgroundColor: 'orange', 
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around' 
    },
    buttonText: { 
        color: 'white', 
        fontSize: 14
    },
    selecttedButtonText: { 
        color: 'red', 
        fontWeight: 'bold', 
        fontSize: 14 
    }
});
