// components/Header.tsx
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

// Definimos qué "datos" (props) va a recibir esta pieza
interface HeaderProps {
  name: string;
  scans: string;
  tickets: number;
}

export const Header = ({ name, scans, tickets }: HeaderProps) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.userRow}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?u=john" }} 
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.greeting}>Hi {name}!</Text>
          <Text style={styles.scansText}>{scans} Scans</Text>
        </View>
      </View>

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


const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: 25, 
  },
  userRow: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 50, height: 50, borderRadius: 25 }, 
  userInfo: { marginLeft: 12 },
  greeting: { fontSize: 22, fontWeight: "bold" },
  scansText: { fontSize: 14, color: "#666" }, 
  ticketBox: { alignItems: "flex-end" }, 
  ticketCountRow: { flexDirection: "row", alignItems: "center" },
  ticketNumber: { fontSize: 22, fontWeight: "bold", marginLeft: 5 },
  viewEntries: { fontSize: 12, color: Colors.secondary, fontWeight: "bold" }, 
});
