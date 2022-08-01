/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [input, setinput] = useState('');
  const [message, setmsg] = useState([]);

  const left = () => {
    if(input!==""){
    setmsg([...message, {input: input, align: 'flex-start',bg:"#202c33"}]);
    }
    setinput("")
  };
  const right = () => {
    if(input !==""){
    setmsg([...message, {input: input, align: 'flex-end',bg:"#005c4b"}]);
    }
    setinput("")
  };
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    <>
      {/* <ScrollView> */}
      <View style={styles.maincontainer}>
        <View style={styles.container}>
          <View style={styles.single}>
            <Text>Back</Text>
            <Text style={{marginLeft: 10}}>Friend 🙌</Text>
          </View>
          <View style={styles.single}>
            <Text>Video</Text>
            <Text style={{marginLeft: 10}}>Audio</Text>
          </View>
        </View>

        <View style={{height: '80%', marginVertical: 30,marginBottom:30}}>
          <FlatList
            keyExtractor={(i, index) => index}
            data={message}
            renderItem={i => {
              return (
                <>
                  <ScrollView>
                    <View style={{paddingHorizontal: 10}}>
                      <View
                        style={{
                          display: 'flex',
                          alignItems: i.item.align,
                        }}>
                        <Text style={{marginTop: 10,maxWidth:"50%",backgroundColor:i.item.bg,padding:10,borderRadius:50}}>{i.item.input}</Text>
                      </View>
                    </View>
                  </ScrollView>
                </>
              );
            }}
          />
        </View>
        <View style={styles.second}>
          <Text onPress={left} style={styles.send}>
            ♥
          </Text>
          <TextInput
            onChange={text =>setinput(text.nativeEvent.text) }
            value={input}
            placeholder="Message"
            style={styles.input}
          />
          <Text onPress={right} style={styles.send}>
            😎
          </Text>
        </View>
      </View>
      {/* </ScrollView> */}
    </>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    height: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 14,
    height: 50,
    display: 'flex',
    alignItems: 'center',

    backgroundColor: '#202c33',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  single: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    borderRadius: 50,
    backgroundColor: '#2a3942',
    width: '70%',
    padding: 10,
    fontSize: 17,
  },
  second: {
    paddingHorizontal: 14,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 5,
  },
  send: {
    justifyContent: 'center',
    textAlign: 'center',
    padding: 15,
    fontWeight: 'bold',
    paddingTop: 10,
    borderRadius: 50,
    backgroundColor: '#005c4b',
  },
});

export default App;
