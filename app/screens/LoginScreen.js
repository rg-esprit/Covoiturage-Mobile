import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function LoginScreen({ loginpressed }) {
  const [AlreadyRegistred, setAlreadyRegistred] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notMatch, setNotMatch] = useState(false);
  const [email, setEmail] = useState("");
  const [notValidMail, setNotValidMail] = useState(false);

  const inputWrapper = {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#283039",
    borderRadius: 12,
    borderWidth: notMatch || notValidMail ? 1 : 0,
    borderColor: notMatch || notValidMail ? "red" : undefined,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* <View style={styles.header}>
          <Pressable style={styles.closeButton}>
            <Ionicons name="close" size={24} color="white" />
          </Pressable>
        </View> */}
        {AlreadyRegistred ? (
          <Text style={styles.title}>Sign in to your account</Text>
        ) : (
          <Text style={styles.title}>Create a new account</Text>
        )}
        <View style={styles.inputContainer}>
          {notValidMail && (
            <Text style={{ color: "red" }}>Email is not valid!</Text>
          )}
          <View style={inputWrapper}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#9cabba"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
            <Ionicons
              name="mail"
              size={24}
              color="#9cabba"
              style={styles.inputIcon}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          {notMatch && (
            <Text style={{ color: "red" }}>Passwords do not match!</Text>
          )}
          <View style={inputWrapper}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#9cabba"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
            />
            <Ionicons
              name="key"
              size={24}
              color="#9cabba"
              style={styles.inputIcon}
            />
          </View>
        </View>

        {!AlreadyRegistred && (
          <View style={styles.inputContainer}>
            {notMatch && (
              <Text style={{ color: "red" }}>Passwords do not match!</Text>
            )}
            <View style={inputWrapper}>
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="#9cabba"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                style={styles.input}
              />
              <Ionicons
                name="key"
                size={24}
                color="#9cabba"
                style={styles.inputIcon}
              />
            </View>
          </View>
        )}
        {AlreadyRegistred ? (
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => loginpressed("information of login will be here")}
              style={styles.loginButton}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => {
                {
                  email.includes("@")
                    ? setNotValidMail(false)
                    : setNotValidMail(true);
                }
                {
                  password === confirmPassword
                    ? setNotMatch(false)
                    : setNotMatch(true);
                }

                {
                  console.log("not valid emailvalid: ", notValidMail);
                  console.log("notmatch: ", notMatch);
                }
              }}
              style={styles.loginButton}
            >
              <Text style={styles.loginButtonText}>SignUp</Text>
            </Pressable>
          </View>
        )}
        {AlreadyRegistred ? (
          <>
            <Pressable>
              <Text style={styles.linkText}>Forgot password?</Text>
            </Pressable>
            <Pressable onPress={() => setAlreadyRegistred(false)}>
              <Text style={styles.linkText}>
                Don't have an account? Sign up.
              </Text>
            </Pressable>
          </>
        ) : (
          <Pressable onPress={() => setAlreadyRegistred(true)}>
            <Text style={styles.linkText}>
              You already have an account? Log in!
            </Text>
          </Pressable>
        )}
        <Text style={styles.orText}>Or continue with</Text>
        <View style={styles.socialButtonsContainer}>
          <Pressable style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Google</Text>
          </Pressable>
          <Pressable style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Facebook</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingBottom: 8,
  },
  closeButton: {
    padding: 8,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
  },
  inputContainer: {
    marginVertical: 12,
  },
  input: {
    flex: 1,
    height: 56,
    color: "white",
    padding: 16,
    fontSize: 16,
  },
  inputIcon: {
    paddingRight: 16,
  },
  buttonContainer: {
    marginVertical: 12,
  },
  loginButton: {
    backgroundColor: "#0d80f2",
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkText: {
    color: "#9cabba",
    fontSize: 14,
    textDecorationLine: "underline",
    marginVertical: 4,
  },
  orText: {
    color: "#9cabba",
    fontSize: 14,
    textAlign: "center",
    marginTop: 50,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 12,
    justifyContent: "center",
  },
  socialButton: {
    backgroundColor: "#283039",
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  socialButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});
