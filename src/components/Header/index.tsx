import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { UserPhoto } from "../UserPhoto";
import { styles } from "../../components/Header/styles";

import LogoSvg from "../../assets/logo.svg";

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSvg />
      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
        <UserPhoto imageUri="https://github.com/paulocod.png" />
      </View>
    </View>
  );
}
