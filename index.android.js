/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CookieManager from 'react-native-cookies';

class CookieTest extends Component {
  render() {
    let url = 'example.com';
    CookieManager.get(url, (result) => {
      console.log("get cookie", result);
      CookieManager.setFromResponse(url, 'i want a cookie', (set_result) => {
        console.log("Set cookie", set_result);
        CookieManager.get(url, (new_result) => {
          console.log("get cookie after setting", new_result);
          console.log("CLEARING");
          CookieManager.clearAll((result) => {
            console.log("Cleared", result);
            CookieManager.get(url, (final_result) => {
              console.log("After clearing...", final_result);
            });
          });
        });
      });
    });
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('CookieTest', () => CookieTest);
