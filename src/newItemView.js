import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button} from 'react-native'

export default class NewItemView extends Component {
  constructor (props) {
    console.log("NewItemView-constructor CALLED");
    console.log("props:");
    console.log(props);

    super(props)
    this.params = props.navigation.state.params;
    this.state = {
      newItem : ""
    }
  }
  addItem () {
    if (this.state.newItem === '') return
    this.props.screenProps.addItem(this.params.item, this.state.newItem)
    this.setState({
      newItem: ''
    })
  }
  updateNewItem (text) {
    this.setState({
      newItem: text
    })
  }
  render () {
    const { item } = this.params
    return (
      <View style={{flex: 1}}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>{item.name}</Text>
          <Button
            onPress={this.props.navigation.pop()}
            style={styles.closeButton}>&times;</Button>
        </View>
        {!item.items.length && <NoItems />}
        {item.items.length ? <Items items={item.items} /> : <View />}
        <View style={{flexDirection: 'row'}}>
          <TextInput
            value={this.state.newItem}
            onChangeText={(text) => this.updateNewItem(text)}
            style={styles.input} />
          <TouchableHighlight
            onPress={this.addItem.bind(this)}
            style={styles.button}>
            <Text>Add</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const NoItems = () => (
  <View style={styles.noItem}>
    <Text style={styles.noItemText}>No Items, Add Items To Get Started</Text>
  </View>
)
const Items = ({items}) => (
  <View style={{flex: 1, paddingTop: 10}}>
   {items.map((item, i) => {
        return <Text style={styles.item} key={i}>• {item}</Text>
      })
    }
  </View>
)

const styles = StyleSheet.create({
  heading: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#156e9a'
  },
  headingText: {
    color: '#156e9a',
    fontWeight: 'bold'
  },
  input: {
    height: 70,
    backgroundColor: '#ededed',
    padding: 20,
    flex: 1
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ededed'
  },
  closeButton: {
    position: 'absolute',
    right: 17,
    top: 18,
    fontSize: 36
  },
  noItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noItemText: {
    fontSize: 22,
    color: '#156e9a'
  },
  item: {
    color: '#156e9a',
    padding: 10,
    fontSize: 20,
    paddingLeft: 20
  }
})
