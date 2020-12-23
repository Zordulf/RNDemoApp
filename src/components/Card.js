import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import * as jobsAction from '../redux/actions/jobsAction';

const Card = (props) => {

    const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('JobsDetails')}>
            <View style={styles.card}>
                <View style={styles.imageWrapper}>
                    <Image 
                        // source={require('../../assets/softeng.jpg')} 
                        source={props.src}
                        style={styles.image}
                    />
                </View>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{props.title}</Text>
                    <MaterialIcons 
                        name='favorite-border' 
                        color='#72bcd4' 
                        size={24} 
                        onPress={() => {
                            dispatch(jobsAction.toggleSaved(props.title))
                        }}
                    />
                </View>
                <View style={styles.descWrapper}>
                    <Text style={styles.desc}>{props.desc}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        height: 300,
        margin: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5
    },
    imageWrapper: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
    },
    image: {
        height: '100%',
        width: '100%'
    },
    titleWrapper: {
        height: '10%',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    title: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 20,
    },
    descWrapper: {
        height: '30%',
        paddingHorizontal: 15
    },
    desc: {
        fontFamily: 'Ubuntu',
        fontSize: 15,
        marginTop: 10
    },
});

export default Card;