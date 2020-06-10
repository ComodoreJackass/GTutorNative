import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, RefreshControl, ImageBackground } from 'react-native';
import { Subheading, Appbar, TouchableRipple, Banner, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-community/async-storage';
import TextTicker from 'react-native-text-ticker'
import HomeCard from './homeCard';

export default function homeScreen({ navigation }) {
    const [online, setOnline] = useState(true);
    const [showBanner, setShowBanner] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [keys, setKeys] = useState([]);
    const [json, setJson] = useState([]);
    const [lCards, setLeftCards] = useState([]);
    const [rCards, setRightCards] = useState([]);

    //Create network status listener
    useEffect(() => {
        const netStatus = NetInfo.addEventListener(event => {
            setOnline(event.isConnected);
        });
        return netStatus;
    }, []);

    //On screen focus refresh
    useEffect(() => {
        const focusListener = navigation.addListener('focus', (event) => {
            onRefresh();
        });
        return focusListener;
    }, []);

    // Toggles banner according to network status
    useEffect(() => {
        setShowBanner(!online);
    }, [online]);

    async function getAllKeys() {
        let foundKeys = []
        try {
            let foundKeys = await AsyncStorage.getAllKeys();
            console.log(foundKeys);
            setKeys(foundKeys);
            if (foundKeys.length === 0) {
                setLeftCards([]);
                setRightCards([]);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // If keys are found fetch data
    useEffect(() => {
        if (keys.length > 0) {
            setData();
        }
    }, [keys]);

    async function deleteData(key) {
        try {
            await AsyncStorage.removeItem(key);
            onRefresh();
        } catch (error) {
            console.log(error);
        }
    }

    async function setData() {
        try {
            let values = await AsyncStorage.multiGet(keys);
            setJson(values);
        } catch (error) {
            console.log(error);
        }
    }

    const onRefresh = () => {
        setRefreshing(true);
        getAllKeys().then(() => {
            setRefreshing(false);
        });
    }

    //When data is set create cards with it
    useEffect(() => {
        let tmp = json.map(data => {

            let jsonValues = JSON.parse(data[1]);

            return(
                <HomeCard
                    key={jsonValues.id}
                    jsonValues={jsonValues}
                    navigation={navigation}
                    deleteData={deleteData}
                    data={data}
                />
            );
        });

        let lcards = [];
        let rcards = [];

        for (var i = 0; i < tmp.length; i++) {
            if (i % 2 === 0) {
                lcards.push(tmp[i]);
            } else {
                rcards.push(tmp[i]);
            }
        }

        setLeftCards(lcards);
        setRightCards(rcards);
    }, [json]);

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content
                    title="Home"
                />
                <TouchableRipple
                    rippleColor="rgba(0, 0, 0, .32)"
                    borderless={true}
                >
                    <Appbar.Action icon="plus" color="white" disabled={!online} style={{ marginRight: "2%" }} onPress={() => navigation.navigate('Browse')} />
                </TouchableRipple>
            </Appbar.Header>
            <Banner
                visible={showBanner}
                actions={[
                    {
                        label: 'Ok',
                        onPress: () => setShowBanner(false),
                    }
                ]}
                icon="access-point-network-off"
            >
                While offline some functionality may be restricted.
            </Banner>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />}
            >
                {
                    lCards.length > 0
                        ?
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: 'column', height: "100%" }}></View>
                            <View style={{ flex: 30, flexDirection: 'column' }}>
                                {lCards}
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', height: "100%" }}></View>
                            <View style={{ flex: 30, flexDirection: 'column' }}>
                                {rCards}
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', height: "100%" }}></View>
                        </View>
                        :
                        <Subheading
                            style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', paddingTop: "60%" }}
                        >
                            Press plus button to add tabs
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