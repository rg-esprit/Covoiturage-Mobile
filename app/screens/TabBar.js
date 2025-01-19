import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Alert } from "react-native";

function TabBar({ onLogout }) {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity>
          <MaterialIcons name="home" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="message" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="add-circle" size={50} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialIcons name="account-circle" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              "Logout",
              "Are you sure you want to logout?",
              [
                {
                  text: "Cancel",
                  style: "cancel",
                },
                {
                  text: "Yes",
                  onPress: onLogout,
                },
              ],
              { cancelable: false }
            );
          }}
        >
          <MaterialIcons name="logout" size={50} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
  },
  tabBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#223649",
    backgroundColor: "#182634",
  },
});

export default TabBar;
