import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Herramienta para navegar
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors';

export const ActionButtons = () => {
  const router = useRouter();

  // Plantilla para cada botón individual
    const ActionButton = ({ icon, title, route, iconColor, circleBg, hasBorder }: any) => (
    <TouchableOpacity 
        style={styles.buttonCard} 
        onPress={() => router.push(route)}
        activeOpacity={0.7}
      >
        <View style={[
          styles.iconCircle, 
          { backgroundColor: circleBg },
          hasBorder && styles.circleBorder 
        ]}>
          <Ionicons name={icon} size={24} color={iconColor} />
        </View>
        
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
  );

return (
    <View style={styles.container}>
    <ActionButton 
    icon="search-outline" title="Find Products" route="/products" 
    iconColor="#333" circleBg="#FFF" hasBorder={true} 
    />
    <ActionButton 
    icon="camera-outline" title="Take Photos" route="/photos" 
    iconColor="#FFF" circleBg="#F6AA4D" hasBorder={false} 
    />
    <ActionButton 
    icon="ticket-outline" title="Earn Tickets" route="/tickets" 
    iconColor="#FFF" circleBg={Colors.primary} hasBorder={false} 
    />
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
    width: '31%', 
    paddingVertical: 18,
    paddingHorizontal: 5,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2, 
  },
  icon: {
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  circleBorder: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
});