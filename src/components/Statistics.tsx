import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Statistics = () => {
  
  // --- PLANTILLA MEJORADA ---
  // Ahora recibe propiedades adicionales: color del valor y el texto naranja de abajo
  const StatBox = ({ title, value, valueColor, bottomText }: { title: string, value: string | number, valueColor: string, bottomText: string }) => (
    <View style={styles.box}>
      
      {/* Aplicamos el color específico al valor */}
      <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
      
      <Text style={styles.title}>{title}</Text>
      
      <Text style={styles.bottomText}>{bottomText}</Text>
    
    </View>
  );

  return (
    <View style={styles.container}>
      
      {/* Box 1: Número '6' en verde/turquesa y texto 'View Scans' */}
      <StatBox 
        title="Scans Today" 
        value="6" 
        valueColor="#3FB492" 
        bottomText="View Scans" 
      />
      
      {/* Box 2: Número '+12' con su símbolo y texto 'View Entries' */}
      <StatBox 
        title="Tickets Earned" 
        value="+12" // Incluimos el símbolo '+'
        valueColor="#333" 
        bottomText="View Entries" 
      />
      
      {/* Box 3: Número '125' y texto 'View Entries' */}
      <StatBox 
        title="Total Tickets" 
        value="125" 
        valueColor="#333" 
        bottomText="View Entries" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 10, // Un poco de espacio extra arriba
  },
  box: {
    backgroundColor: '#FFFFFF',
    width: '31%',
    paddingVertical: 12, 
    paddingHorizontal: 5,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  value: {
    // Hacemos el número un poco más grande y negrita para que destaque
    fontSize: 26, 
    fontWeight: '900',
    marginBottom: 2, // Menos espacio con el título
  },
  title: {
    fontSize: 13,
    // Ponemos el título en gris claro
    color: '#888', 
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 8, // Margen para separar del texto naranja de abajo
  },
  // --- ESTILOS PARA EL NUEVO TEXTO NARANJA ---
  bottomText: {
    fontSize: 11,
    fontWeight: '500',
    // Usamos el color naranja específico de tu diseño
    color: '#E06C42', 
    textAlign: 'center',
  }
});