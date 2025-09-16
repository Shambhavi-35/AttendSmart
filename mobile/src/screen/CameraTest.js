import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { Camera } from "expo-camera";

export default function CameraTest() {
  const [hasPermission, setHasPermission] = useState(null);
  const [showCamera, setShowCamera] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasPermission === false) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No access to camera</Text>
        <Button
          title="Grant Permission Again"
          onPress={async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
          }}
        />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {showCamera ? (
        <Camera style={{ flex: 1 }} />
      ) : (
        <Button title="Open Camera" onPress={() => setShowCamera(true)} />
      )}
    </View>
  );
}
