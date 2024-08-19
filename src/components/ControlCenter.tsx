import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { playBackService } from '../../musicPlayerServices';
import { play } from 'react-native-track-player/lib/src/trackPlayer';

const ControlCenter = () => {

    const playBackState = usePlaybackState()

    // Next Button
    const skipToNext = async () => {
        await TrackPlayer.skipToNext;
    }
    // Previous Button
    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious;
    }
    //Stop Button
    const togglePlayback = async (playback: State) => {
        const  currentTrack = await TrackPlayer.getCurrentTrack()

        if (currentTrack !== null) {
            if (playback === State.Paused || playback === State.Ready) {
                await TrackPlayer.play()
            } else {
                await TrackPlayer.pause()
            }
        }
    }

    //Play Button

  return (
    <View style={styles.container}>
      <Text>ControlCenter</Text>
      <Pressable onPress={skipToPrevious}>
        <Icon name='skip-previous' size={40} style={styles.icon} />
      </Pressable>
      <Pressable 
        onPress={() => {
            if (playBackState && 'state' in playBackState && playBackState.state !== undefined) {
                togglePlayback(playBackState.state as State);
            }
        }}
      >        
        <Icon 
            name={playBackState?.state === State.Playing ? "pause" : "play"} 
            size={75} 
            style={styles.icon} 
        />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon name='skip-next' size={40} style={styles.icon}/>
      </Pressable>
    </View>
  )
}

export default ControlCenter

const styles = StyleSheet.create({
    container: {
        marginBottom: 56,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: '#FFFFFF',
    },
    playButton: {
        marginHorizontal: 24,
    },
})