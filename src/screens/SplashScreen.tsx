import { StyleSheet, Animated, Image } from 'react-native'
import React, {useState} from 'react'
import BootSplash from "react-native-bootsplash";

type Props = {
    onAnimationEnd: () => void;
};
  
const SplashScreen = ({ onAnimationEnd }: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));

  const { container, logo} = BootSplash.useHideAnimation({
    manifest: require("../assets/bootsplash/manifest.json"),

    logo: require("../assets/bootsplash/logo.png"),
    animate: () => {
      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 0,
        duration: 2000,
      }).start(() => {
        onAnimationEnd();
      });
    },
  });


  return (
    <Animated.View {...container} style={[container.style, { opacity }]}>
      <Image {...logo} />
    </Animated.View>
  );
}

export default SplashScreen

const styles = StyleSheet.create({})