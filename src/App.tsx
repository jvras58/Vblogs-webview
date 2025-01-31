import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import { WebView } from "react-native-webview";
import Loading from "./components/loading";

// FIXME - This is a workaround to get the webview url from the .env file 
import { REACT_APP_WEBVIEW_URL } from "@env";

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: "https://vblog-sigmal.vercel.app/dashboard" }}
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