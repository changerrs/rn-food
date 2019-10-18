import React from 'react';

import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            {/* <Image style={styles.searchIcon} /> */}
            <Feather name='search' size={40} style={styles.searchIcon} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Search'
                style={styles.inputText}
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        marginTop: 10,
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection: 'row',
        marginBottom: 10,
    },
    searchIcon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
        // top: 10,
        // justifyContent: 'flex-start',
    },
    inputText: {
        fontSize: 18,
        flex: 1,
    },

    // iconStyle: {
    //     fontSize: 35,
    //     alignSelf: 'center',
    // },
});

export default SearchBar;
