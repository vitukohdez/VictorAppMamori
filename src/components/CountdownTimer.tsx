import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// @ts-ignore
// import CountDown from 'react-native-countdown-component';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  // const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    let intervalo: ReturnType<typeof setInterval>;

    fetch('https://victorapp2.free.beeceptor.com/next-draw') 
      .then(respuesta => respuesta.json())
      .then(datos => {
        const fechaSorteo = new Date(datos.drawDate).getTime();

        intervalo = setInterval(() => {
          const ahora = new Date().getTime();
          const diferencia = fechaSorteo - ahora;

          if (diferencia > 0) {
            setTimeLeft({
              days: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
              hours: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((diferencia / 1000 / 60) % 60),
              seconds: Math.floor((diferencia / 1000) % 60),
            });

            // setSecondsLeft(Math.floor(diferencia / 1000));
          } else {
            clearInterval(intervalo);
          }
        }, 1000);
      })
      .catch(error => console.error("Error conectando a la API:", error));

    return () => clearInterval(intervalo);
  }, []);

  if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.seconds === 0) return null;

  const TimeNumber = ({ valor, etiqueta }: { valor: number, etiqueta: string }) => (
    <View style={styles.timeUnit}>
      <Text style={styles.numberText}>{valor < 10 ? `0${valor}` : valor}</Text>
      <Text style={styles.labelText}>{etiqueta}</Text>
    </View>
  );

  return (
    <LinearGradient 
      colors={['#f3a352', '#f7daa2']} 
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <View style={styles.wrapper}>
        
        <View style={styles.dateBox}>
          <Text style={styles.dateDay}>30</Text>
          <Text style={styles.dateMonth}>MARCH</Text>
          <Text style={styles.dateTime}>20:00</Text>
        </View>

        <View style={styles.timerSection}>
          <View style={styles.timerBlock}>
          <Text style={styles.title}>Next Draw</Text>
          
          <View style={styles.customCountdown}>
            <TimeNumber valor={timeLeft.days} etiqueta="Days" />
            <Text style={styles.colon}>:</Text>
            <TimeNumber valor={timeLeft.hours} etiqueta="Hours" />
            <Text style={styles.colon}>:</Text>
            <TimeNumber valor={timeLeft.minutes} etiqueta="Minutes" />
            <Text style={styles.colon}>:</Text>
            <TimeNumber valor={timeLeft.seconds} etiqueta="Seconds" />
          </View>
        </View>

          {/* <CountDown
            until={secondsLeft} 
            size={18} 
            timeToShow={['D', 'H', 'M', 'S']}
            timeLabels={{ d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds' }}
            showSeparator={true}
            digitStyle={{ backgroundColor: 'transparent' }}
            digitTxtStyle={{ color: '#000', fontSize: 24, fontWeight: '900' }}
            separatorStyle={{ color: '#000', fontSize: 24, paddingBottom: 5, marginHorizontal: -5 }}
            timeLabelStyle={{ color: '#000', fontSize: 10, fontWeight: 'bold', marginTop: -10 }}
          /> 
          */}

        </View>

      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
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
  dateDay: { fontSize: 40, fontWeight: '900', color: '#333', marginTop: -7 },
  dateMonth: { fontSize: 12, fontWeight: 'bold', color: '#333', marginTop: -7 },
  dateTime: { fontSize: 20, fontWeight: 'bold', color: '#555', marginTop: -5 },
  timerSection: {
    flex: 1,
    marginLeft: 15,
    alignItems: 'center',
  },
  timerBlock: {
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 2,
    alignSelf: 'flex-start',
    marginLeft: 7,
  },
  customCountdown: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  timeUnit: {
    alignItems: 'center',
    marginHorizontal: 4,
  },
  numberText: {
    color: '#000',
    fontSize: 35,
    fontWeight: '900',
  },
  labelText: {
    color: '#000',
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: -2,
  },
  colon: {
    color: '#000',
    fontSize: 22,
    fontWeight: '900',
    marginHorizontal: 2,
    marginTop: 8, 
  }
});