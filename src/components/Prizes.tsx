import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Prizes = () => {
  
  const PrizeCard = ({ medalSource, logoSource, voucherValue, voucherColor }: { medalSource: ImageSourcePropType, logoSource: ImageSourcePropType, voucherValue: string, voucherColor: string }) => (
    <View style={styles.prizeCard}>
      
      {/* 1. MEDALLA CENTRADA */}
      <Image source={medalSource} style={styles.medalIconAbsolute} resizeMode="contain" />
      
      {/* 2. MITAD SUPERIOR (Logo) */}
      <View style={styles.logoContainer}>
        <Image source={logoSource} style={styles.supermarketLogo} resizeMode="contain" />
      </View>
      
      {/* 3. MITAD INFERIOR (Voucher) */}
      <View style={[styles.voucherContainer, { backgroundColor: voucherColor }]}>
        <Text style={styles.voucherValueText}>{voucherValue}</Text>
        <Text style={styles.voucherTitleText}>VOUCHER</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <View style={styles.vouchersRow}>
        <PrizeCard 
          medalSource={require('../assets/medal-3.png')} 
          logoSource={require('../assets/logo-welbees.png')} 
          voucherValue="€1,000" 
          voucherColor="#2FCB9D" 
        />
        <PrizeCard 
          medalSource={require('../assets/medal-2.png')}
          logoSource={require('../assets/logo-greens.png')} 
          voucherValue="€100" 
          voucherColor="#4A4A4A" 
        />
        <PrizeCard 
          medalSource={require('../assets/medal-1.png')}
          logoSource={require('../assets/logo-pama-pavi.png')} 
          voucherValue="€50" 
          voucherColor="#F06E4B" 
        />
      </View>

      <TouchableOpacity style={styles.scanButton}>
        <Text style={styles.scanButtonText}>Scan Products & Win</Text>
      </TouchableOpacity>

      <View style={styles.registrationSection}>
        <Text style={styles.knowAnyoneText}>Know anyone interested?</Text>
        <Text style={styles.registrationBenefitText}>
          For every new registration, both yourself & your friend win 1 free ticket.
        </Text>
      </View>

      <TouchableOpacity style={styles.shareButton}>
        <Text style={styles.shareButtonText}>Share with Friends & Win</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  vouchersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 0,
    marginTop: 15, 
    marginBottom: 15,
  },
  prizeCard: {
    backgroundColor: '#FFFFFF',
    width: '31%',
    borderRadius: 15, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    position: 'relative', 
  },
  medalIconAbsolute: {
    width: 38, 
    height: 38,
    position: 'absolute', 
    top: -18, 
    alignSelf: 'center', 
    zIndex: 1, 
  },
  logoContainer: {
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15,
  },
  supermarketLogo: {
    width: '115%',
    height: '115%',
  },
  voucherContainer: {
    height: 65, 
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15,
  },
  voucherValueText: {
    color: '#FFFFFF',
    fontSize: 30, 
    fontWeight: '900',
  },
  voucherTitleText: {
    color: '#FFFFFF',
    fontSize: 10, 
    fontWeight: '700',
    marginTop: 0,
    letterSpacing: 0.5, 
  },
  
  scanButton: {
    backgroundColor: '#3FB492',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  scanButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  registrationSection: {
    alignItems: 'center',
    marginBottom: 10,
  },
  knowAnyoneText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 2,
  },
  registrationBenefitText: {
    fontSize: 11,
    color: '#888888',
    textAlign: 'center',
    fontWeight: '500',
  },
  shareButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3FB492',
    marginBottom: 15,
  },
  shareButtonText: {
    color: '#3FB492',
    fontSize: 12,
    fontWeight: '600',
  },
});