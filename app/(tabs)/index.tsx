import { Text, View, StyleSheet } from "react-native";
import Button  from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";

const placeholderImage = require ("../../assets/images2/background-image.png");

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <ImageViewer
          imgSource={placeholderImage}
        />
        </View>
        <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});