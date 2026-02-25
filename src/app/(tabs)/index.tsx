// app/(tabs)/index.tsx
import { ScrollView, StyleSheet } from "react-native";
import { Header } from "../../components/Header"; // Importamos la pieza que acabamos de crear
import Colors from "../../constants/Colors"; // Ajusta la ruta si es necesario (puede ser @/constants/Colors)

export default function TabOneScreen() {
  return (
    // here i use scrollview instead of view to hace th possibility of scroll if the content reach the limit of the screen. style for the sides of the screens and content for the middle rest.
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Header name="John" scans="50+" tickets={124} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background, // El color cremita que configuramos
  },
  content: {
    paddingHorizontal: 20, // Espacio a los lados
    paddingTop: 60, // Espacio arriba para que no lo tape la barra de la batería/hora del móvil
    paddingBottom: 40,
  },
});
