import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Appbar, Subheading } from 'react-native-paper';
import Tab from '../resources/tab.svg'
import Svg, {
  Circle,
  Text
} from 'react-native-svg';

export default function tabs({ route, navigation }) {
  const [tab, setTab] = useState(route.params.tab);
  const [tablature, setTablature] = useState([]);

  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  useEffect(() => {
    let tmp = tab.map(data => {
      let firstText = [];
      for (var i = 0; i < data.first.length; i++) {
        firstText.push(
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
      let secondText = [];
      for (var i = 0; i < data.second.length; i++) {
        secondText.push(
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
      let thirdText = [];
      for (var i = 0; i < data.third.length; i++) {
        thirdText.push(
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
      return (
        <Svg
          key={uuidv4()}
          width="100%"
          height="90"
        >
          <Tab />
          {
            firstText
          }
          {
            secondText
          }
          {
            thirdText
          }
        </Svg>
      );
    });

    setTablature(tmp);
  }, [tab]);

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
      <ScrollView>
        {
          tablature.length > 0
            ?
            tablature
            :
            <Subheading
              style={{ justifyContent: 'center', color:"black", alignItems: 'center', textAlign: 'center', paddingTop: "60%" }}
            >
              Generating tab...
            </Subheading>
        }
      </ScrollView>
    </View>
  );
}
