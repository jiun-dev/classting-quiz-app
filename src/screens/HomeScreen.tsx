import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import BasicButton from '../components/BasicButton';
import {colors, fontSize, spacing} from '../constants/\btheme';
import {StackScreenProps} from '@react-navigation/stack';

export type HomeScreenProps = StackScreenProps<RootNavigationType, 'Home'>;

function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>CLASSTING QUIZ</Text>
      <View style={styles.buttonContainer}>
        <BasicButton
          title="퀴즈 풀기"
          onPress={() => navigation.navigate('Quiz')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <BasicButton
          title="오답 노트 확인"
          onPress={() => navigation.navigate('WrongNote')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: fontSize.title,
    fontWeight: 'bold',
    marginBottom: spacing.medium,
    color: colors.main,
  },
  buttonContainer: {
    width: '80%',
    marginVertical: spacing.small,
  },
});

export default HomeScreen;
