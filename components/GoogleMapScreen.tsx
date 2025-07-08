import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ติดตั้ง: expo install react-native-webview

export default function GoogleMapScreen() {
  // เวอร์ชันเว็บ/มือถือ ใช้ WebView แสดง Google Maps
  const mapUrl =
    'https://www.google.com/maps/@13.7563,100.5018,12z?hl=th';

  // ระบุให้ WebView ครอบคลุมเต็มจอ
  return (
    <View style={styles.container}>
      {Platform.OS === 'web' || Platform.OS === 'android' || Platform.OS === 'ios' ? (
        <WebView source={{ uri: mapUrl }} style={styles.webview} />
      ) : (
        <View style={styles.fallback}>
          <Text>⚠️ Maps ไม่รองรับบนแพลตฟอร์มนี้</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  webview: { flex: 1 },
  fallback: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});