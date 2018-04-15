import React from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { observer } from "mobx-react";
import { reaction } from "mobx";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class MobxView extends React.Component {
  constructor(props) {
    console.log("constructor CALLED");
    console.log("props:");
    console.log(props);
    super(props);

    this.state = {};
  }

  onTestMobxButtonPressed = () => {
    console.log("onTestMobxButtonPressed");
    this.props.store.todos[0].title = "直接修改后的todo标题";
    this.props.store.todos[0].done = !this.props.store.todos[0].done;
    console.log(this.props.store.todos);
  };
  onTestMobxButton2Pressed = () => {
    console.log("onTestMobxButtonPressed");
    this.props.store.changeTodoTitle({
      index: 1,
      title: "通过@action修改后的todo标题"
    });
    console.log(this.props.store.todos);
  };

  //在需要相应的模块（函数）前添加 @observer 装饰器
  @observer
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Natives!</Text>
        <Text style={styles.instructions}>
          To get started, edit src/root.js
        </Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button
          onPress={this.onTestMobxButtonPressed}
          title={"直接修改props"}
        />
        <Button
          onPress={this.onTestMobxButton2Pressed}
          title={"通过@action修改"}
        />
        <Text style={styles.instructions}>
          {this.props.store.todos[0].title +
            " 完成状态：" +
            this.props.store.todos[0].done}
        </Text>
        <Text style={styles.instructions}>
          {this.props.store.todos[1].title +
            " 完成状态：" +
            this.props.store.todos[1].done}
        </Text>
        <Text style={styles.instructions}>
          {this.props.store.todos[2].title +
            " 完成状态：" +
            this.props.store.todos[2].done}
        </Text>
        <Text style={styles.instructions}>
          {"未完成的Todos数目：" + this.props.store.unfinishedTodos}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
