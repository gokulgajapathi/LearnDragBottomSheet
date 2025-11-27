import React, { useMemo, useRef } from 'react';
import { View, Text, Button } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

export default function GorhomBottomSheetExample() {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
  const openSheet = () => {
    sheetRef.current?.expand();
  }

  return (
    <View style={{ flex: 1 , backgroundColor: '#f0f0f0' }}>
      <Button title='Open' onPress={openSheet} />

      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
      >
        <BottomSheetView style={{ padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#000', marginBottom: 10 }}>
            Draggable Bottom Sheet
          </Text>
          <Text>You can drag up and down.</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}
