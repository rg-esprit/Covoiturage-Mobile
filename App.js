import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  View,
  Alert,
  Button,
} from "react-native";
import { useState } from "react";
import LoginScreen from "./app/screens/LoginScreen";
import HomeScreen from "./app/screens/HomeScreen";
import TabBar from "./app/screens/TabBar";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleloginpressed(loginInfo) {
    Alert.alert("Login Info", loginInfo);
    setIsLoggedIn(true);
  }
  return (
    <SafeAreaView style={styles.container}>
      {isLoggedIn ? (
        <View style={styles.mainContent}>
          <View style={styles.mainContent}>
            <HomeScreen />
          </View>
          <TabBar onLogout={() => setIsLoggedIn(false)} />
        </View>
      ) : (
        <LoginScreen loginpressed={handleloginpressed} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  mainContent: {
    flex: 1,
  },
});
