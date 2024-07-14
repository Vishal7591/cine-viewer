import {FC, useState, useEffect} from 'react';
import * as genericStyles from '../../styles/main';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import * as config from '../../constants/config';
import {validateLogin} from '../../slice/loginSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchRequestToken} from '../../slice/authSlice';
import {
  LoginParmas,
  RequestTokenResponse,
  UserCredentials,
} from '../../types/item/itemTypes';

export const Login: FC = ({navigation}: any) => {
  const dispatch = useDispatch<any>();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const onUsernameChange = (userName: string) => {
    setUsername(userName);
    setUsernameError(false);
  };

  const onPasswordChange = (password: string) => {
    setPassword(password);
    setPasswordError(false);
  };

  const onSubmitLogin = async ({username, password}: UserCredentials) => {
    setLoading(true);
    const requestTokenKey: string =
      (await AsyncStorage.getItem(config.REQUEST_TOKEN_KEY)) ??
      (await dispatch(fetchRequestToken()).payload);

    const loginParams: LoginParmas = {
      username: username,
      password: password,
      request_token: requestTokenKey,
    };
    const validateSession: any = dispatch(validateLogin(loginParams));

    validateSession.then(async (response: any) => {
      if (response.payload && response.payload.success === false) {
        setLoggedIn(response.payload && response.payload.success);
        await AsyncStorage.removeItem(config.REQUEST_TOKEN_KEY);
        onSubmitLogin({username, password});
      } else {
        setLoggedIn(response.payload && response.payload.success);
        await AsyncStorage.setItem(config.IS_LOGGED_IN, 'true');
        navigation.replace('MoviesDashboard');
      }
    });
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
      <ScrollView style={styles.screenContainer}>
        <View style={styles.loginSection}>
          <View style={{flexDirection: 'column', width: '60%'}}>
            <View style={{flex: 1}}>
              <TextInput
                style={genericStyles.styles.textInput}
                keyboardType="default"
                returnKeyType="next"
                value={username}
                placeholder="Username"
                placeholderTextColor="#8E8F8F"
                onChangeText={onUsernameChange}
                // onSubmitEditing={() =>
                //   this.state.passnumber === ""
                //     ? this.setState({ showpassnumberError: true })
                //     : this.refs.password.focus()
                // }
              />
              {usernameError && (
                <Text style={styles.fieldErrorLabel}>
                  Username is incorrect!
                </Text>
              )}
            </View>
            <View style={{flex: 1}}>
              <TextInput
                style={genericStyles.styles.textInput}
                keyboardType="default"
                returnKeyType="next"
                value={password}
                placeholder="Password"
                placeholderTextColor="#8E8F8F"
                onChangeText={onPasswordChange}
                secureTextEntry={true}
                // onSubmitEditing={() =>
                //   this.state.passnumber === ""
                //     ? this.setState({ showpassnumberError: true })
                //     : this.refs.password.focus()
                // }
              />
              {passwordError && (
                <Text style={styles.fieldErrorLabel}>
                  Password is incorrect!
                </Text>
              )}
            </View>
            <View style={{flex: 1}}>
              <TouchableHighlight
                style={[styles.button]}
                onPress={() => onSubmitLogin({username, password})}
                disabled={
                  usernameError ||
                  passwordError ||
                  username.length < 1 ||
                  password.length < 1
                }>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        {loading && (
          <View style={genericStyles.styles.loading}>
            <ActivityIndicator size="large" color="#dcdcdc" />
            <Text style={[genericStyles.styles.screenLoadingText]}>
              Please Wait...
            </Text>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#4a4a4a',
  },
  loginSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40%',
  },
  fieldErrorLabel: {
    color: 'red',
    paddingTop: 5,
  },
  button: {
    width: 'auto',
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#159689',
    borderRadius: 100,
    justifyContent: 'center',
    marginTop: '10%',
  },
  disabledButton: {
    borderColor: '#424242',
  },
  buttonText: {
    alignSelf: 'center',
    color: '#159689',
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
  },
});
