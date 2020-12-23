import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Header from '../components/Header';
import Card from '../components/Card';

const JobsListScreen = (props) => {

    return (
        <View style={styles.screen}>
            <Header title='Job Listing App (Demo)'/>
            <ScrollView>
                <Card 
                    navigation={props.navigation} 
                    src={{uri: 'https://www.theladders.com/wp-content/uploads/coder_190517.jpg'}} 
                    title='Software Engineer'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
                <Card
                    navigation={props.navigation} 
                    src={require('../../assets/qa.jpeg')}
                    title='Quality Assurance Engineer'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                /> 
                <Card
                    navigation={props.navigation} 
                    src={require('../../assets/devops.jpg')}
                    title='DevOps Engineer'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                /> 
                <Card
                    navigation={props.navigation} 
                    src={require('../../assets/devops.jpg')}
                    title='DevOps Engineer'
                    desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                /> 
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
    },
});

export default JobsListScreen;