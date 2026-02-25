import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ActionButtons } from "../../components/ActionButtons"; // <-- Importamos
import { Header } from "../../components/Header";
import Colors from "../../constants/Colors";

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <StatusBar style="dark" backgroundColor={Colors.light.background} translucent={false} />
      
      <Header name="John" scans="50+" tickets={124} />

      <View style={styles.separator} />

      <Text style={styles.instructionText}>
        It’s simple, to win the following prizes, all you need is to:
      </Text>

      <ActionButtons />

    </ScrollView>
  );
}

// ... (tus estilos se quedan igual)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background, // El color cremita que configuramos
  },
  content: {
    paddingHorizontal: 20, // Espacio a los lados
    paddingTop: 20, // Espacio arriba para que no lo tape la barra de la batería/hora del móvil
    paddingBottom: 40,
  },
  separator: {
    height: 1, 
    backgroundColor: '#EAEAEA', 
    width: '100%', 
  },
  instructionText: {
    fontSize: 14,
    color: '#555555', 
    marginBottom: 15, 
    marginTop: 15, 
    textAlign: "center",
  }
});
