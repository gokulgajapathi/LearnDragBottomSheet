import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

const GorhomBottomSheetExample = () => {
  // Youtube tutorial reference: https://www.youtube.com/watch?v=Nw8YGTHQEIA
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
  const openSheet = () => {
    sheetRef.current?.expand();
  };

    const closeSheet = () => {
    sheetRef.current?.close();
  };

      const snapSheet = (number: number) => {
    sheetRef.current?.snapToIndex(number);
  };

  const backDrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );

  return (
    <View style={styles.screen}>
      <TouchableOpacity
        style={[styles.button, { marginTop: 40 }]}
        onPress={openSheet}
        activeOpacity={0.8}
      >
        <Text style={{ fontSize: 18, color: '#fff' }}>Open Bottom Sheet</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={closeSheet}
        activeOpacity={0.8}
      >
        <Text style={{ fontSize: 18, color: '#fff' }}>Close Bottom Sheet</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => snapSheet(0)}
        activeOpacity={0.8}
      >
        <Text style={{ fontSize: 18, color: '#fff' }}>Snap To 0</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => snapSheet(1)}
        activeOpacity={0.8}
      >
        <Text style={{ fontSize: 18, color: '#fff' }}>Snap To 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => snapSheet(2)}
        activeOpacity={0.8}
      >
        <Text style={{ fontSize: 18, color: '#fff' }}>Snap To 2</Text>
      </TouchableOpacity>

      <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}
        /*  This helps to set fixed height instead of percentage
        snapPoints={[500]}
        enablePanDownToClose={false} */
        handleIndicatorStyle={{ backgroundColor: 'green' }}
        backgroundStyle={{ backgroundColor: 'lightgreen' }}
        backdropComponent={backDrop}
      >
        <BottomSheetView style={styles.sheetContent}>
          <Text style={styles.text}>Draggable Bottom Sheet</Text>
          <Text>You can drag up and down.</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  sheetContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    padding: 20,
    fontWeight: '600',
  },
});

export default GorhomBottomSheetExample;
