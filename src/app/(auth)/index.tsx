import { Button } from "@/components/Button";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Text, View, StyleSheet } from "react-native";

export default function Home() {
  const { user } = useUser()
  const { signOut } = useAuth()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello user</Text>
      <Button icon="exit" title="Sair" onPress={() => signOut()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
    gap: 12
  },
  text: {
    fontSize: 18,
    fontWeight: "bold"
  }
})