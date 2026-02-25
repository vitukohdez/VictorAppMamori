import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Herramienta para navegar
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors';

export const ActionButtons = () => {
  const router = useRouter();

  // Plantilla para cada botón individual
  const ActionButton = ({ icon, title, route, iconColor = 'black' }: any) => (
    <TouchableOpacity 
      style={styles.buttonCard} 
      onPress={() => router.push(route)} // Al hacer clic, navega a la ruta
      activeOpacity={0.7} // Efecto visual al pulsar
    >
      <Ionicons name={icon} size={28} color={iconColor} style={styles.icon} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Usamos la plantilla 3 veces con datos distintos */}
      <ActionButton icon="search-outline" title="Find Products" route="/products" />
      <ActionButton icon="camera-outline" title="Take Photos" route="/photos" />
      {/* Al de los tickets le pasamos nuestro color verde primario */}
      <ActionButton icon="ticket-outline" title="Earn Tickets" route="/tickets" iconColor={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  buttonCard: {
    backgroundColor: '#FFFFFF',
    width: '31%', // 31% para que quepan 3 dejando un pequeño hueco
    paddingVertical: 18,
    paddingHorizontal: 5,
    borderRadius: 15,
    alignItems: 'center',
    // Sombras para que parezca que "flota" como en tu diseño
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2, // Sombra en Android
  },
  icon: {
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});