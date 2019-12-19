import * as React from "react";
import { TextInput, TextStyle } from "react-native";
import Animated from "@exodus/react-native-reanimated";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

interface TextProps {
  text: Animated.Node<string>;
  style?: TextStyle;
}

export default (props: TextProps) => {
  return (
    <AnimatedTextInput
      underlineColorAndroid="transparent"
      editable={false}
      {...props}
    />
  );
};
