import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

export default function browseCard(props) {
    const [downloaded, setDownloaded] = useState(false);

    useEffect(() => {
        testData(props.song.id);
    }, []);


    function mergeJson(json){
        let jsonValue = props.song;

        jsonValue.youtube = json.youtube;
        jsonValue.tab = json.tab;

        storeData(jsonValue);
    }

    // Download tab
    async function storeData(value) {
        try {
            await AsyncStorage.setItem('@' + props.song.id, JSON.stringify(value));
            setDownloaded(true);
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchJson() {
        try {
            let response = await fetch(`https://shrouded-sierra-89750.herokuapp.com/${props.song.id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            let responseStatus = await response.status;

            if (responseStatus == 200) {
                let json = await response.json();
                mergeJson(json);
            }
            else {
                console.log(responseStatus);
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteData(key) {
        try {
            await AsyncStorage.removeItem('@' + key);
            setDownloaded(false);
        } catch (error) {
            console.log(error);
        }
    }

    async function testData(key) {
        try {
            const jsonValue = await AsyncStorage.getItem('@' + key);
            if (jsonValue === null) {
                setDownloaded(false);
            } else {
                setDownloaded(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Card style={styles.card}>
            <Card.Cover source={{ uri: `data:image/jpg;base64,${props.song.image}` }} />
            <Card.Content style={{ marginTop: "2%" }}>
                <Title>{props.song.title}</Title>
                <Paragraph>{props.song.author}</Paragraph>
            </Card.Content>
            <Card.Actions style={{ marginTop: "2%" }}>
                {
                    downloaded
                        ?
                        <Button icon="trash-can-outline" mode="contained" onPress={() => deleteData(props.song.id)}>
                            Delete
                        </Button>
                        :
                        <Button icon="download" mode="contained" onPress={() => fetchJson()}>
                            Download
                        </Button>
                }
            </Card.Actions>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        marginLeft: "6%",
        marginRight: "6%",
        marginTop: "3%",
        borderRadius: 0,
    }
});