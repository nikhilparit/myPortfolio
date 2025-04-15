import { useState, useEffect } from 'react';
import { Image, StyleSheet, Platform, View, Text, ScrollView, Dimensions,TouchableOpacity } from 'react-native';
import Loader from './Loader';
import { FontAwesome } from '@expo/vector-icons';
import commonStylesheet from './commonStylesheet/commonStylesheet';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { portfolioData } from '../features/portfolioData';

const { width, height } = Dimensions.get('window');


const Portfolio = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, isLoading, error } = useSelector((state: RootState) => state.portfolioData);
    useEffect(() => {
        dispatch(portfolioData());
    }, [dispatch]);
    if (isLoading) return <Loader />;
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', padding: 20, }}>
                    <TouchableOpacity>
                        <View style={[styles.iconCirle, { backgroundColor: '#A0ADBC' }]}>
                            <FontAwesome name="home" size={20} color="#ffffff" />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    cardContainer: {
        width: '90%',
        height: 200,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 10
    },
    iconCirle: {
        width: 40,
        height: 40,
        backgroundColor: '#2F3BAD',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default Portfolio;