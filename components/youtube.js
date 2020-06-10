import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import YouTube from 'react-native-youtube';
import Tab from '../resources/tab.svg'
import Svg, {
    Circle,
    Text
} from 'react-native-svg';

export default function youtube({ navigation, route }) {
    const [isReady, setIsReady] = useState(false);
    const [status, setStatus] = useState('');
    const [quality, setQuality] = useState('');
    const [error, setError] = useState('');
    const [currentTime, setCurrentTime] = useState(0);
    const [tab, setTab] = useState(route.params.tab);
    const [tabTimes, setTabTimes] = useState([]);
    const [renderedIndex, setRenderedIndex] = useState(-1);

    const [firstText, setFirstText] = useState([]);
    const [secondText, setSecondText] = useState([]);
    const [thirdText, setThirdText] = useState([]);

    const youTubeRef = useRef();

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    useEffect(() => {
        let tmp = tab.map(data => {
            let times = {};
            times.start = data.start;
            times.end = data.end;
            return times;
        });

        setTabTimes(tmp);
    }, [tab]);

    useEffect(() => {
        let inRange = -1;
        for (var i = 0; i < tabTimes.length; i++) {
            if (currentTime >= tabTimes[i].start && currentTime <= tabTimes[i].end) {
                inRange = i;
            }
        }
        setRenderedIndex(inRange);
    }, [currentTime]);

    useEffect(() => {
        //console.log(renderedIndex);
        if (renderedIndex === -1) {
            setFirstText([]);
            setSecondText([]);
            setThirdText([]);
        } else {
            let data = tab[renderedIndex];

            let firstTextTmp = [];

            for (var i = 0; i < data.first.length; i++) {
                firstTextTmp.push(
                    <View key={uuidv4()}>
                        {
                            data.first[i].a !== ""
                            &&
                            <Circle
                                cx={50 + i * 200 / (data.first.length - 1)}
                                cy="30"
                                r="12"
                                fill="white"
                                stroke="white"
                            />
                        }
                        <Text
                            fill="black"
                            stroke="white"
                            strokeWidth="0.1"
                            fontSize="25"
                            fontWeight="bold"
                            x={50 + i * 200 / (data.first.length - 1)}
                            y="38"
                            textAnchor="middle"
                        >
                            {data.first[i].a}
                        </Text>

                        {
                            data.first[i].b !== ""
                            &&
                            <Circle
                                cx={50 + i * 200 / (data.first.length - 1)}
                                cy="50"
                                r="12"
                                fill="white"
                                stroke="white"
                            />
                        }
                        <Text
                            fill="black"
                            stroke="white"
                            strokeWidth="0.1"
                            fontSize="25"
                            fontWeight="bold"
                            x={50 + i * 200 / (data.first.length - 1)}
                            y="58"
                            textAnchor="middle"
                        >
                            {data.first[i].b}
                        </Text>

                        {
                            data.first[i].c !== ""
                            &&
                            <Circle
                                cx={50 + i * 200 / (data.first.length - 1)}
                                cy="70"
                                r="12"
                                fill="white"
                                stroke="white"
                            />
                        }
                        <Text
                            fill="black"
                            stroke="white"
                            strokeWidth="0.1"
                            fontSize="25"
                            fontWeight="bold"
                            x={50 + i * 200 / (data.first.length - 1)}
                            y="78"
                            textAnchor="middle"
                        >
                            {data.first[i].c}
                        </Text>

                        {
                            data.first[i].d !== ""
                            &&
                            <Circle
                                cx={50 + i * 200 / (data.first.length - 1)}
                                cy="90"
                                r="12"
                                fill="white"
                                stroke="white"
                            />
                        }
                        <Text
                            fill="black"
                            stroke="white"
                            strokeWidth="0.1"
                            fontSize="25"
                            fontWeight="bold"
                            x={50 + i * 200 / (data.first.length - 1)}
                            y="98"
                            textAnchor="middle"
                        >
                            {data.first[i].d}
                        </Text>

                        {
                            data.first[i].e !== ""
                            &&
                            <Circle
                                cx={50 + i * 200 / (data.first.length - 1)}
                                cy="110"
                                r="12"
                                fill="white"
                                stroke="white"
                            />
                        }
                        <Text
                            fill="black"
                            stroke="white"
                            strokeWidth="0.1"
                            fontSize="25"
                            fontWeight="bold"
                            x={50 + i * 200 / (data.first.length - 1)}
                            y="118"
                            textAnchor="middle"
                        >
                            {data.first[i].e}
                        </Text>

                        {
                            data.first[i].f !== ""
                            &&
                            <Circle
                                cx={50 + i * 200 / (data.first.length - 1)}
                                cy="130"
                                r="12"
                                fill="white"
                                stroke="white"
                            />
                        }
                        <Text
                            fill="black"
                            stroke="white"
                            strokeWidth="0.1"
                            fontSize="25"
                            fontWeight="bold"
                            x={50 + i * 200 / (data.first.length - 1)}
                            y="138"
                            textAnchor="middle"
                        >
                            {data.first[i].f}
                        </Text>
                    </View>
                );
            }

            let secondTextTmp = [];

            for (var i = 0; i < data.second.length; i++) {
                secondTextTmp.push(
                    <View key={uuidv4()}>
                        {
                            data.second[i].a !== ""
                            &&
                            <Circle
                                cx={300 + i * 200 / (data.second.length - 1)}
                                cy="30"
                                r="12"
                                fill="white"
                                stroke="white"
                            />
                        }
                        <Text
                            fill="black"
                            stroke="white"
                            strokeWidth="0.1"
                            fontSize="25"
                            fontWeight="bold"
                            x={300 + i * 200 / (data.second.length - 1)}
                            y="38"
                            textAnchor="middle"
                        >
                            {data.second[i].a}
                        </Text>

                        {
                            data.second[i].b !== ""
                            &&
                            <Circle
                                cx={300 + i * 200 / (data.second.length - 1)}
                                cy="50"
                                r="12"
                                fill="white"
                                stroke="white"
                            />
                        }
                        <Text
                            fill="black"
                            stroke="white"
                            strokeWidth="0.1"
                            fontSize="25"
                            fontWeight="bold"
                            x={300 + i * 200 / (data.second.length - 1)}
                            y="58"
                            textAnchor="middle"
                        >
                            {data.second[i].b}
                        </Text>

                        {
                            data.second[i].c !== ""
                            &&
                            <Circle
                                cx={300 + i * 200 / (data.second.length - 1)}
                                cy="70"
                                r="12"
                                fill="white"
                                stroke="white"
                            />
                        }
                        <Text
                            fill="black"
                            stroke="white"
                            strokeWidth="0.1"
                            fontSize="25"
                            fontWeight="bold"
                            x={300 + i * 200 / (data.second.length - 1)}
                            y="78"
                            textAnchor="middle"
                        >
                            {data.second[i].c}
                        </Text>

                        {
                            data.second[i].d !== ""
                            &&
                            <Circle
                                cx={300 + i * 200 / (data.second.length - 1)}
                                cy="90"
                                r="12"
                                fill="white"
                                stroke="white"
                            />
                        }
                        <Text
                            fill="black"
                            stroke="white"
                            strokeWidth="0.1"
                            fontSize="25"
                            fontWeight="bold"
                            x={300 + i * 200 / (data.second.length - 1)}
                            y="98"
                            textAnchor="middle"
                        >
                            {data.second[i].d}
                        </Text>

                        {
                            data.second[i].e !== ""
                            &&
                            <Circle
                                cx={300 + i * 200 / (data.second.length - 1)}
                                cy="110"
                                r="12"
                                fill="white"
                                stroke="white"
                            />
                        }
                        <Text
                            fill="black"
                            stroke="white"
                            strokeWidth="0.1"
                            fontSize="25"
                            fontWeight="bold"
                            x={300 + i * 200 / (data.second.length - 1)}
                            y="118"
                            textAnchor="middle"
                        >
                            {data.second[i].e}
                        </Text>

                        {
                            data.second[i].f !== ""
                            &&
                            <Circle
                                cx={300 + i * 200 / (data.second.length - 1)}
                                cy="130"
                                r="12"
                                fill="white"
                                stroke="white"
                            />
                        }
                        <Text
                            fill="black"
                            stroke="white"
                            strokeWidth="0.1"
                            fontSize="25"
                            fontWeight="bold"
                            x={300 + i * 200 / (data.second.length - 1)}
                            y="138"
                            textAnchor="middle"
                        >
                            {data.second[i].f}
                        </Text>
                    </View>
                );
            }

            let thirdTextTmp = [];

            for (var i = 0; i < data.third.length; i++) {
                thirdTextTmp.push(
                    <View key={uuidv4()}>
                        {
                            data.third[i].a !== ""
                            &&
                            <Circle
                                cx={550 + i * 200 / (data.third.length - 1)}
                                cy="30"
                                r="12"
                                fill="white"
                                stroke="white"
                            />
                        }
                        <Text
                            fill="black"
                            stroke="white"
                            strokeWidth="0.1"
                            fontSize="25"
                            fontWeight="bold"
                            x={550 + i * 200 / (data.third.length - 1)}
                            y="38"
                            textAnchor="middle"
                        >
                            {data.third[i].a}
                        </Text>

                        {
                            data.third[i].b !== ""
                            &&
                            <Circle
                                cx={550 + i * 200 / (data.third.length - 1)}
                                cy="50"
                                r="12"
                                fill="white"
                                stroke="white"
                            />
                        }
                        <Text
                            fill="black"
                            stroke="white"
                            strokeWidth="0.1"
                            fontSize="25"
                            fontWeight="bold"
                            x={550 + i * 200 / (data.third.length - 1)}
                            y="58"
                            textAnchor="middle"
                        >
                            {data.third[i].b}
                        </Text>

                        {
                            data.third[i].c !== ""
                            &&
                            <Circle
                                cx={550 + i * 200 / (data.third.length - 1)}
                                cy="70"
                                r="12"
                                fill="white"
                                stroke="white"
                            />
                        }
                        <Text
                            fill="black"
                            stroke="white"
                            strokeWidth="0.1"
                            fontSize="25"
                            fontWeight="bold"
                            x={550 + i * 200 / (data.third.length - 1)}
                            y="78"
                            textAnchor="middle"
                        >
                            {data.third[i].c}
                        </Text>

                        {
                            data.third[i].d !== ""
                            &&
                            <Circle
                                cx={550 + i * 200 / (data.third.length - 1)}
                                cy="90"
                                r="12"
                                fill="white"
                                stroke="white"
                            />
                        }
                        <Text
                            fill="black"
                            stroke="white"
                            strokeWidth="0.1"
                            fontSize="25"
                            fontWeight="bold"
                            x={550 + i * 200 / (data.third.length - 1)}
                            y="98"
                            textAnchor="middle"
                        >
                            {data.third[i].d}
                        </Text>

                        {
                            data.third[i].e !== ""
                            &&
                            <Circle
                                cx={550 + i * 200 / (data.third.length - 1)}
                                cy="110"
                                r="12"
                                fill="white"
                                stroke="white"
                            />
                        }
                        <Text
                            fill="black"
                            stroke="white"
                            strokeWidth="0.1"
                            fontSize="25"
                            fontWeight="bold"
                            x={550 + i * 200 / (data.third.length - 1)}
                            y="118"
                            textAnchor="middle"
                        >
                            {data.third[i].e}
                        </Text>

                        {
                            data.third[i].f !== ""
                            &&
                            <Circle
                                cx={550 + i * 200 / (data.third.length - 1)}
                                cy="130"
                                r="12"
                                fill="white"
                                stroke="white"
                            />
                        }
                        <Text
                            fill="black"
                            stroke="white"
                            strokeWidth="0.1"
                            fontSize="25"
                            fontWeight="bold"
                            x={550 + i * 200 / (data.third.length - 1)}
                            y="138"
                            textAnchor="middle"
                        >
                            {data.third[i].f}
                        </Text>
                    </View>
                );
            }

            setFirstText(firstTextTmp);
            setSecondText(secondTextTmp);
            setThirdText(thirdTextTmp);
        }

    }, [renderedIndex]);

    //Every second try to update current youtube video time, notations will update accordingly
    useEffect(() => {
        const interval = setInterval(() => {
            if (isReady) {
                if (youTubeRef.current) {
                    youTubeRef.current
                        .getCurrentTime()
                        .then(currentTime => {
                            setCurrentTime(currentTime);
                        })
                        .catch(errorMessage => {
                            console.log(errorMessage);
                        });
                }
            }
        }, 500);
        return () => clearInterval(interval);
    }, [isReady]);

    //Use flexbox here to seperate notation fom youtube port
    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}
                />
                <Appbar.Content
                    title={route.params.title}
                    subtitle={route.params.author}
                />
            </Appbar.Header>
            <View style={{ flex: 4 }}>
                <YouTube
                    ref={youTubeRef}
                    videoId={route.params.id}
                    apiKey="AIzaSyDLEF9EXfuyJn9cVnxW93SSbfpw38N3JBE"
                    play={false}
                    loop={false}
                    showFullscreenButton={false}
                    onReady={e => setIsReady(true)}
                    onChangeState={e => setStatus(e.state)}
                    onChangeQuality={e => setQuality(e.quality)}
                    onError={e => setError(e.error)}
                    style={{ alignSelf: 'stretch', height: "100%" }}
                />
            </View>
            <View style={{ flex: 2 }}>
                <Svg
                    width="100%"
                    height="100%"
                >
                    <Tab />
                    {
                        firstText.length > 0 && firstText
                    }
                    {
                        secondText.length > 0 && secondText
                    }
                    {
                        thirdText.length > 0 && thirdText
                    }
                </Svg>
            </View>
        </View>
    );
}