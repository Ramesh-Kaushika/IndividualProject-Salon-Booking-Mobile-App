import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import ScreenWrapper from "../components/ScreenWrapper";

import {theme} from "../constants/theme";
import Icon from "../assets/icons";
import {useRouter} from "expo-router";
import {StatusBar} from "expo-status-bar";
import BackButton from "../components/BackButton";
import {hp, wp} from "../helpers/common";
import Input from "../components/Input";
import Button from "../components/Button";

const SignUp = () => {
  const router = useRouter();
  const nameRef = useRef("");
  const genderRef = useRef("");
  const emailRef = useRef("");
  const phoneNolRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    router.push('login')
  }

  return (
      <ScreenWrapper>
        <StatusBar style="dark"/>
        <View style={styles.container}>
          <BackButton router={router}/>

          {/*Welcome*/}
          <View>
            <Text style={styles.welcomeText}>Let's</Text>
            <Text style={styles.welcomeText}>Get Started</Text>
          </View>
          {/*form*/}
          <View style={styles.form}>
            <Text style={{fontSize: hp(1.5), color: theme.colors.text}}>
              Please fill the details to create an account
            </Text>
            <Input
                icon={<Icon name="user" size={26} strokeWidth={1.6}/>}
                placeholder={'Enter your name'}
                onChangeText={value => nameRef.current = value}
            />
            <Input
                icon={<Icon name="heart" size={26} strokeWidth={1.6}/>}
                placeholder={'Enter your Gender'}
                sec
                onChangeText={value => genderRef.current = value}
            />
            <Input
                icon={<Icon name="mail" size={26} strokeWidth={1.6}/>}
                placeholder={'Enter your E-mail'}
                sec
                onChangeText={value => passwordRef.current = value}
            />
            <Input
                icon={<Icon name="send" size={26} strokeWidth={1.6}/>}
                placeholder={'Enter your phone number'}
                sec
                onChangeText={value => passwordRef.current = value}
            />
            <Input
                icon={<Icon name="lock" size={26} strokeWidth={1.6}/>}
                placeholder={'Enter your password'}
                sec
                onChangeText={value => passwordRef.current = value}
            />

            {/*  button  */}
            <Button title={'Sign up'} loading={loading} onPress={onSubmit}/>
          </View>
          {/*  footer  */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Already have an account
            </Text>
            <Pressable onPress={() => router.push('login')}>
              <Text style={[styles.footerText, {
                color: theme.colors.primaryDark,
                fontWeight: theme.fonts.semibold
              }]}>Login</Text>
            </Pressable>
          </View>
        </View>
      </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: 'right',
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  footerText: {
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});

export default SignUp;
