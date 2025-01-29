import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import Loading from "./components/loading";
import { REACT_APP_WEBVIEW_URL } from "@env";

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: REACT_APP_WEBVIEW_URL }}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
        renderLoading={() => <Loading />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0,
  },
});

export default App;