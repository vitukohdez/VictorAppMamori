import { LinearGradient } from 'expo-linear-gradient'; // <-- La herramienta del degradado
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// @ts-ignore  <-- Esto quita la línea roja molesta
import CountDown from 'react-native-countdown-component';

export const CountdownTimer = () => {
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    // Simulamos la llamada a la API
    fetch('https://victorapp.free.beeceptor.com/next-draw') 
      .then(respuesta => respuesta.json())
      .then(datos => {
        // 2. Leemos la fecha que nos manda Beeceptor
        const fechaSorteo = new Date(datos.drawDate).getTime();
        const ahora = new Date().getTime(); // La hora de hoy
        
        // 3. Calculamos cuántos segundos faltan
        const diferenciaEnSegundos = Math.floor((fechaSorteo - ahora) / 1000);
        
        // 4. Si faltan segundos (es decir, el sorteo no ha pasado ya), actualizamos el reloj
        if (diferenciaEnSegundos > 0) {
          setSecondsLeft(diferenciaEnSegundos);
        }
      })
      .catch(error => console.error("Error conectando a la API:", error));
  }, []);

   if (secondsLeft === 0) return null;

  return (
    <LinearGradient 
      // Degradado: De un naranja muy oscuro (casi negro) a naranja clarito
      colors={['#f3a352', '#f7daa2']} 
      style={styles.container}
      // start y end indican que va de arriba (0) hacia abajo (1)
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      
      {/* LADO IZQUIERDO: La fecha */}
      <View style={styles.dateBox}>
        <Text style={styles.dateDay}>30</Text>
        <Text style={styles.dateMonth}>MARCH</Text>
        <Text style={styles.dateTime}>20:00</Text>
      </View>

      {/* LADO DERECHO: El contador */}
      <View style={styles.timerSection}>
        <Text style={styles.title}>Next Draw</Text>
        
        <CountDown
          until={secondsLeft} 
          size={18} 
          timeToShow={['D', 'H', 'M', 'S']}
          timeLabels={{ d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds' }}
          showSeparator={true}
          digitStyle={{ backgroundColor: 'transparent' }}
          digitTxtStyle={{ color: '#000', fontSize: 24, fontWeight: '900' }}
          separatorStyle={{ color: '#000', fontSize: 24, paddingBottom: 10 }}
          timeLabelStyle={{ color: '#000', fontSize: 10, fontWeight: 'bold', marginTop: -10 }}
        />
      </View>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center', // <-- LA MAGIA: Esto centra el bloque entero
    marginBottom: 25,
  },
  dateBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  dateDay: { fontSize: 28, fontWeight: '900', color: '#333' },
  dateMonth: { fontSize: 12, fontWeight: 'bold', color: '#333', marginTop: -2 },
  dateTime: { fontSize: 16, fontWeight: 'bold', color: '#555', marginTop: 2 },
  timerSection: {
    flex: 1,
    marginLeft: 15, // Lo separamos un poco de la caja blanca
    alignItems: 'center', // Mantiene el título y los números alineados a la izquierda
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 2,
    marginLeft: 8, // Lo alineamos un poquito con el primer número
  }
});