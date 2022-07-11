import { StyleSheet, Animated } from 'react-native';

import { View } from './Themed';
import LocationInput from './LocationInput';
import { FontAwesome5 } from '@expo/vector-icons';

export default function EditScreenInfo(props: any) {
  const logoStyles = [styles.logoStyle];
  const animation = new Animated.Value(1);

  Animated.timing(animation, {
    toValue: 1,
    duration: 200,
    useNativeDriver: true
  }).start();

  const rotateInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['315deg', '135deg']
  });
  const animatedStyles = { transform: [{ rotate: rotateInterpolate }] };
  logoStyles.push(animatedStyles);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Animated.View style={logoStyles}>
          <FontAwesome5 name="location-arrow" style={styles.arrowIcon} />
        </Animated.View>
        <View style={styles.dotSeparator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.yellowCircle} />
      </View>
      <View style={styles.getStartedContainer}>
        <LocationInput
          location={props.pickup}
          setLocation={props.setPickup}
          placeholder="Enter pickup location"
        />
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <LocationInput
          location={props.dropoff}
          setLocation={props.setDropoff}
          placeholder="Enter dropoff location"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    flexDirection: 'row',
  },
  iconContainer: {
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
  },
  arrowIcon: {
    color: '#404040',
  },
  getStartedContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexGrow: 1,
    paddingEnd: 15,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  separator: {
    marginVertical: 3,
    height: 1,
    width: '100%',
    backgroundColor: '#f0f0f0',
  },
  dotSeparator: {
    marginVertical: 3,
    width: 0,
    backgroundColor: 'transparent',
    borderStyle: 'dotted',
    flexGrow: 1,
    borderLeftWidth: 2,
    borderLeftColor: 'darkgrey',
  },
  yellowCircle: {
    padding: 4,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'orange',
    backgroundColor: 'white',
  },
});
