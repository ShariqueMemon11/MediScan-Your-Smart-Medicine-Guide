import React, { useCallback } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

const CameraModal = ({ visible, onClose, onScan }) => {
  const [permission, requestPermission] = useCameraPermissions();

  const handleBarcodeScanned = useCallback(
    ({ data }) => {
      console.log("📷 QR Code scanned:", data);
      onScan?.(data);
      onClose();
    },
    [onClose, onScan]
  );

  if (!permission) return null;

  return (
    <Modal visible={visible} animationType="slide">

      <View style={{ flex: 1, backgroundColor: "#000" }}>
        {permission.granted ? (
          <>
            <CameraView
              style={StyleSheet.absoluteFillObject}
              facing="back"
              barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
              onBarcodeScanned={handleBarcodeScanned}
            />

            <Pressable
              style={styles.closeBtn}
              onPress={onClose}
            >
              <Ionicons name="close" size={26} color="#000" />
            </Pressable>

            <Text style={styles.scanText}>
              Scan Medicine QR Code
            </Text>
          </>
        ) : (
          <View style={styles.permissionBox}>
            <Text>Camera permission required</Text>

            <Pressable
              style={styles.permissionBtn}
              onPress={requestPermission}
            >
              <Text style={{ color: "#fff" }}>
                Allow Camera
              </Text>
            </Pressable>

            <Pressable onPress={onClose}>
              <Text style={{ marginTop: 10 }}>
                Cancel
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default CameraModal;

const styles = StyleSheet.create({
  closeBtn: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
  },
  scanText: {
    position: "absolute",
    bottom: 60,
    alignSelf: "center",
    color: "#fff",
    fontSize: 16,
  },
  permissionBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  permissionBtn: {
    backgroundColor: "#0a84ff",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },
});
