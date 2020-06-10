
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, RefreshControl, ImageBackground } from 'react-native';
import { Subheading, Appbar, TouchableRipple, Banner, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-community/async-storage';
import TextTicker from 'react-native-text-ticker'

export default function homeCard(props) {

    const [online, setOnline] = useState(true);
    const [youtubeDisabled, setYoutubeDisabled] = useState(true);
    const [notationDisabled, setNotationDisabled] = useState(true);

    //Create network status listener
    useEffect(() => {
        const netStatus = NetInfo.addEventListener(event => {
            setOnline(event.isConnected);
        });

        if (props.jsonValues.youtube === "") {
            setYoutubeDisabled(true);
        } else {
            setYoutubeDisabled(false);
        }

        if (props.jsonValues.tab.length === 0) {
            setNotationDisabled(true);
        } else {
            setNotationDisabled(false);
        }

        return netStatus;
    }, []);

    useEffect(() => {
        if (props.jsonValues.youtube !== "") {
            setYoutubeDisabled(!online);
        }
    }, [online]);

    return (
        <Card style={styles.card}>
            <ImageBackground source={{ uri: `data:image/jpg;base64,${props.jsonValues.image}` }} style={{
                flex: 1,
                resizeMode: "cover",
                height: 160,
            }}>
                <View style={{ height: "100%", backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <Card.Content>
                        <TextTicker
                            style={{ fontSize: 20, color: 'white', width: "100%" }}
                            duration={8000}
                            loop
                            bounce
                            isInteraction
                            repeatSpacer={50}
                            marqueeDelay={100}
                        >
                            {props.jsonValues.title}
                        </TextTicker>
                        <Paragraph>{props.jsonValues.author}</Paragraph>
                    </Card.Content>
                    <Card.Actions style={{ marginTop: 60 }}>
                        <IconButton
                            icon="youtube"
                            mode="outlined"
                            disabled={youtubeDisabled}
                            onPress={() => props.navigation.navigate('Youtube', { id: props.jsonValues.youtube, title: props.jsonValues.title, author: props.jsonValues.author, tab: props.jsonValues.tab })}
                        />
                        <IconButton
                            icon="music-note"
                            mode="contained"
                            disabled={notationDisabled}
                            style={{ marginLeft: "2%", marginRight: "2%" }}
                            onPress={() => props.navigation.navigate('Tabs', { title: props.jsonValues.title, author: props.jsonValues.author, tab: props.jsonValues.tab })}
                        />
                        <IconButton icon="trash-can-outline" mode="contained" onPress={() => props.deleteData(props.data[0])} />
                    </Card.Actions>
                </View>
            </ImageBackground>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: "3%",
        borderRadius: 0,
    }
});