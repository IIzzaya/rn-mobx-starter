import React, { Component } from "react";
import MobxView from "./mobxView";
import HelloView from "./helloView";
import NewItemView from "./newItemView";
import listStore from "./listStore";
import { StackNavigator } from "react-navigation";
import { Provider } from "mobx-react";

const RootNavigator = StackNavigator(
  {
    helloView: {
      screen: HelloView
    },
    mobxView: {
      screen: MobxView
    },
    newItemView: {
      screen: NewItemView
    }
  },
  {
    headerMode: "screen",
    mode: "card",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#ffffff"
      },
      headerTitleStyle: {
        color: "#000000",
        fontSize: 20
      },
      headerTintColor: "#000000",
      sceneStyle: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 5
      }
    }
  }
);

export default class App extends Component {
  render() {
    return (
        <RootNavigator screenProps={listStore}/>
    );
  }
}
