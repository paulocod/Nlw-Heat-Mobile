import React from "react";
import { ScrollView, View } from "react-native";

import { Message } from "../../components/Message";

import { styles } from "../MessageList/styles";

export function MessageList() {
  const message = {
    id: "1",
    text: "mensagem de teste",
    user: {
      name: "Paulo",
      avatar_url: "https://github.com/paulocod.png",
    },
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}
