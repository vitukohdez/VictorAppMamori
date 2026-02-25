// components/Header.tsx
import { Ionicons } from "@expo/vector-icons"; // Para el icono del ticket
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors"; // Importamos nuestros colores

// Definimos qué "datos" (props) va a recibir esta pieza
interface HeaderProps {
  name: string;
  scans: string;
  tickets: number;
}

export const Header = ({ name, scans, tickets }: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      {/* LADO IZQUIERDO: Foto y saludo */}
      <View style={styles.userRow}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?u=john" }} // Foto de perfil de prueba
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.greeting}>Hi {name}!</Text>
          <Text style={styles.scansText}>{scans} Scans</Text>
        </View>
      </View>

      {/* LADO DERECHO: Tickets */}
      <View style={styles.ticketBox}>
        <View style={styles.ticketCountRow}>
          <Ionicons name="ticket-outline" size={20} color="black" />
          <Text style={styles.ticketNumber}>{tickets}</Text>
        </View>
        <Text style={styles.viewEntries}>View Entries</Text>
      </View>
    </View>
  );
};

// Aquí le damos el diseño exacto de tu imagen (márgenes, tamaños, colores)
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row", // Coloca los elementos en fila (izquierda y derecha)
    justifyContent: "space-between", // Separa los dos bloques al máximo
    alignItems: "center", // Los centra verticalmente
    marginBottom: 25, // Deja espacio por debajo para el siguiente elemento
  },
  userRow: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 50, height: 50, borderRadius: 25 }, // borderRadius 25 hace que sea un círculo perfecto
  userInfo: { marginLeft: 12 },
  greeting: { fontSize: 22, fontWeight: "bold" },
  scansText: { fontSize: 14, color: "#666" }, // Gris oscuro
  ticketBox: { alignItems: "flex-end" }, // Alinea el texto a la derecha
  ticketCountRow: { flexDirection: "row", alignItems: "center" },
  ticketNumber: { fontSize: 22, fontWeight: "bold", marginLeft: 5 },
  viewEntries: { fontSize: 12, color: Colors.secondary, fontWeight: "bold" }, // Usa el naranja de nuestros Colors.ts
});
