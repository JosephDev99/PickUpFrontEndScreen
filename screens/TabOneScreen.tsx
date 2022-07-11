import { useState } from 'react';
import { StyleSheet, Pressable, ImageBackground, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Asset } from 'expo-asset';
import { Entypo } from '@expo/vector-icons';

export default function TabOneScreen({ navigation }: any) {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: Asset.fromModule(require('../assets/images/hero_mobile_maps_sdks.png')).uri}} resizeMode="cover" style={styles.image}>
        <EditScreenInfo pickup={pickup} setPickup={setPickup} dropoff={dropoff} setDropoff={setDropoff} />
        { pickup && dropoff ?
        <Pressable style={styles.requestButton}>
          <Text style={styles.requestText}>Request a ride</Text>
        </Pressable> : null }
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  requestButton: {
    width: '90%',
    textAlign: 'center',
    backgroundColor: '#e0c000',
    paddingVertical: 16,
  },
  requestText: {
    textTransform: 'uppercase',
    color: 'black',
    fontSize: 14,
  },
});
