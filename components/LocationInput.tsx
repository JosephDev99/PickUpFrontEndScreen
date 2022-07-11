import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import { SimpleLineIcons, Entypo } from '@expo/vector-icons';

const LocationInput = (props: any) => {
  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={props.location}
          style={styles.input}
          underlineColorAndroid="black"
          placeholder={props.placeholder}
          placeholderTextColor="black"
          autoCapitalize="none"
          onChangeText={(text) => props.setLocation(text)}
        />
        <SimpleLineIcons name="microphone" size={18} color="lightgrey" />
        <Pressable onPress={() => props.setLocation("")}>
          <Entypo name="cross" size={24} color="grey" />
        </Pressable>
      </View>
    </>
  );
};

export default LocationInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
  },
  input: {
    marginVertical: 5,
    height: 35,
    width: "100%",
    alignSelf: "center",
    borderRadius: 5,
    backgroundColor: "#fff",
    fontSize: 16,
  },
});
