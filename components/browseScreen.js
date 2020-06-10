import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { Subheading, Appbar, TouchableRipple, Searchbar } from 'react-native-paper';

import BrowseCard from './browseCard';

export default function browseScreen({ navigation }) {
    const [json, setJson] = useState([]);
    const [refreshing, setRefreshing] = useState(true);
    const [cards, setCards] = useState([]);
    const [search, setSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    //On screen focus fetch json data
    useEffect(() => {
        const focusListener = navigation.addListener('focus', (event) => {
            onRefresh();
        });
        return focusListener;
    }, []);

    async function fetchJson() {
        try {
            let response = await fetch('https://shrouded-sierra-89750.herokuapp.com/data', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            let responseStatus = await response.status;

            if (responseStatus == 200) {
                let json = await response.json();
                setJson(json);
            }
            else {
                console.log(responseStatus);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const onRefresh = () => {
        setRefreshing(true);
        fetchJson().then(() => {
            setRefreshing(false);
        }
        );
    }

    useEffect(() => {
        let tmp = json.map(song => (
            <BrowseCard
                key={song.id}
                song={song}
            />
        ));

        setCards(tmp);

    }, [json])


    //Search implementation
    useEffect(() => {
        if (searchValue != '') {
            let tmp = json.filter(song => song.title.toUpperCase().indexOf(searchValue.toUpperCase()) == 0).map(song => (
                <BrowseCard
                    key={song.id}
                    song={song}
                />
            ));

            setCards(tmp);
        } else {
            let tmp = json.map(song => (
                <BrowseCard
                    key={song.id}
                    song={song}
                />
            ));

            setCards(tmp);
        }
    }, [searchValue]);

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}
                />
                <Appbar.Content
                    title="Browse"
                />
                <TouchableRipple
                    rippleColor="rgba(0, 0, 0, .32)"
                    borderless={true}
                >
                    <Appbar.Action icon="magnify" color="white" style={{ marginRight: "2%" }} onPress={() => {
                        setSearch(!search)
                    }
                    } />
                </TouchableRipple>
            </Appbar.Header>
            {
                // When search is set to true, searchbar will appear
                search
                &&
                <Searchbar
                    placeholder="Search"
                    onChangeText={(value) => setSearchValue(value)}
                    value={searchValue}
                    placeholder='Song title'
                    autoFocus={search}
                />
            }
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />}
            >
                {
                    cards.length > 0
                        ?
                        cards
                        :
                        <Subheading
                            style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: "60%" }}
                        >
                            Loading...
                        </Subheading>
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    }
});