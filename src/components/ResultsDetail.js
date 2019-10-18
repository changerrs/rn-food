import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.itemView}>
            {/* <Text> {result.name} </Text> */}
            <Image source={{ uri: result.image_url }} style={styles.image} />
            <Text style={styles.name}> {result.name} </Text>
            <Text>
                {result.rating} Stars, {result.review_count} reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    name: {
        fontWeight: 'bold',
    },
    image: {
        width: 250,
        borderRadius: 7,
        height: 120,
        marginBottom: 5,
    },
    itemView: {
        marginLeft: 15,
    },
});

export default ResultsDetail;
