import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const TabIcon = ({ name, color, focused }: { name: any, color: string, focused: boolean }) => (
  <View style={styles.iconWrapper}>
    {/* La línea turquesa superior solo aparece en la pestaña activa */}
    {focused && <View style={styles.activeIndicator} />}
    <Ionicons name={name} size={24} color={color} />
  </View>
);

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="scan" // <-- ESTA ES LA CLAVE: Forza a que arranque en "Scan & Win"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#3FB492', 
        tabBarInactiveTintColor: '#A0A0A0', 
        tabBarStyle: {
          backgroundColor: '#333333', 
          borderTopWidth: 0, 
          height: 65, 
          paddingBottom: 10, 
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => <TabIcon name="home-outline" color={color} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: 'Products',
          tabBarIcon: ({ color, focused }) => <TabIcon name="search-outline" color={color} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="lists"
        options={{
          title: 'Lists',
          tabBarIcon: ({ color, focused }) => <TabIcon name="list-outline" color={color} focused={focused} />,
        }}
      />
      {/* PESTAÑA SCAN & WIN (La que se verá activa por defecto) */}
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Scan & Win',
          tabBarIcon: ({ color, focused }) => <TabIcon name="ticket-outline" color={color} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => <TabIcon name="person-outline" color={color} focused={focused} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: '100%',
  },
  activeIndicator: {
    position: 'absolute',
    top: -5, 
    width: '80%',
    height: 3,
    backgroundColor: '#3FB492', 
  }
});