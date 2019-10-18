import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';
// import { FlatList } from 'react-native-gesture-handler';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const businessId = navigation.getParam('id');
    // console.log(businessId);
    // console.log(result);
    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(businessId);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text> {result.name} </Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return (
                        <Image source={{ uri: item }} style={styles.image} />
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        margin: 10,
    },
});

export default ResultsShowScreen;
