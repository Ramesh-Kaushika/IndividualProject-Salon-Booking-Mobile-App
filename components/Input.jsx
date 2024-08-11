import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {theme} from "../constants/theme";
import {hp} from "../helpers/common";

const Input = (props) => {
  return (
    <View style={[styles.container, props.containerStyles && props.containerStyles]}>
      {
        props.icon && props.icon
      }
      <TextInput
      style={{flex: 1}}
      placeholderTextColor={theme.colors.textLight}
      ref={props.inputRef && props.inputRef}
      {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp(7.2),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.4,
    borderColor: theme.colors.text,
    borderCurve: 'continuous',
    borderRadius: theme.radius.xxl,
    paddingHorizontal: 18,
    gap: 12
  },
});

export default Input;
