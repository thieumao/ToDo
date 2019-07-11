import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Work from './Work';
import Filter from './Filter';
import Header from './Header';
import Form from './Form';

class Main extends Component {
    getWorkList() {
        const { myFilter, myWorks } = this.props;
        if (myFilter === 'TODO') return myWorks.filter(e => !e.isDone);
        if (myFilter === 'DONE') return myWorks.filter(e => e.isDone);
        return myWorks;
    }
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <View style={{ flex: 10 }}>
                    { this.props.myIsAdding ? <Form /> : null }
                    <FlatList 
                        data={this.getWorkList()}
                        renderItem={({ item }) => <Work myWork={item} />}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
                <Filter />
            </View>
        );
    }
}


function mapStateToProps(state) {
    return { 
        myFilter: state.filterStatus,
        myWorks: state.arrWorks,
        myIsAdding: state.isAdding 
    };
}

export default connect(mapStateToProps)(Main);

const styles = StyleSheet.create({
    container: { 
        backgroundColor: 'white', 
        flex: 1, 
        alignSelf: 'stretch', 
        justifyContent: 'center'
    },
}); 
