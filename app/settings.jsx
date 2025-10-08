import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function SettingsScreen() {

  const [expanded, setExpanded] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const Row = ({ label, value, onPress, showArrow = true }) => (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {value ? <Text style={styles.value}>{value}</Text> : null}
        {showArrow && (
          <Ionicons name="chevron-forward" size={18} color="#888" />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.setting}>Settings</Text>
      <Text style={styles.section}>Personal</Text>

      <Row label="Profile" onPress={() => { }} />
      <Row label="Shipping Address" onPress={() => { }} />
      <Row label="Payment methods" onPress={() => { }} />

      <Text style={styles.section}>Shop</Text>

      <Row label="Country" value="Vietnam" onPress={() => { }} />
      <Row label="Currency" value="$ USD" onPress={() => { }} />
      <Row label="Sizes" value="UK" onPress={() => { }} />

      {/* Toggle everything below */}
      <Row
        label="Terms and Conditions"
        onPress={() => setExpanded((prev) => !prev)}
        showArrow={false}
      />

      {expanded && (
        <>
          <View style={styles.termsBox}>
            <Text style={styles.termsHeading}>Terms & Conditions</Text>
            <Text style={styles.termsText}>
              Place your detailed terms and conditions here. This text block
              appears when the row is tapped.
            </Text>
          </View>

          <Text style={styles.section}>Account</Text>
          <Row label="Language" value="English" onPress={() => { }} />
          <Row label="About Slada" onPress={() => { }} />

          <TouchableOpacity style={{ marginTop: 30 }}
          onPress={()=> setModalVisible(true)}
          >
            <Text style={styles.delete}>Delete My Account</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Slada</Text>
            <Text style={styles.footerSub}>Version 1.8 April, 2020</Text>
          </View>
        </>
      )}

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {/* Warning Icon */}
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>!</Text>
            </View>

            {/* Title */}
            <Text style={styles.title}>You are going to delete your account</Text>
            <Text style={styles.subtitle}>
              You won’t be able to restore your data
            </Text>

            {/* Buttons */}
            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.deleteButton]}
                onPress={() => alert("Account Deleted")}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>

          </View>
          
        </View>

      </Modal>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20
  },
  section: {
    fontWeight: "600",
    fontSize: 18,
    color: "#000",
    fontWeight: '700',
    marginTop: 35
  },
  setting: {
    fontWeight: "600",
    fontSize: 22,
    marginTop: 45,
    color: "#000",
    fontWeight: '700'

  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 25,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#ccc",

  },
  label: {
    fontSize: 15,
    color: "#222"
  },
  value: {
    fontSize: 15,
    color: "#666",
    marginRight: 5
  },
  delete: {
    color: "red",
    fontSize: 15,
    fontWeight: "600"
  },
  footer: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 40
  },
  footerText: {
    fontSize: 16,
    fontWeight: "700"
  },
  footerSub: {
    color: "#888",
    marginTop: 4
  },
  termsBox: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#ccc",
  },
  termsHeading: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10
  },
  termsText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#444"
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ffecec",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  iconText: {
    fontSize: 22,
    color: "#e74c3c",
    fontWeight: "bold",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#000",
  },
  deleteButton: {
    backgroundColor: "#f28b82",
  },
  cancelText: {
    color: "#fff",
    fontWeight: "600",
  },
  deleteText: {
    color: "#fff",
    fontWeight: "600",
  },
});
