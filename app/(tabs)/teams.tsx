import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function GroupScreen() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText>This is Teams screen</ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center', 
        alignItems: 'center',
    },
});
