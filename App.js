import { StyleSheet, Text, SafeAreaView, Platform, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
