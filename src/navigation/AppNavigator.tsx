import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import WrongNoteScreen from '../screens/WrongNoteScreen';
import ResultsScreen from '../screens/ResultScreen';

const Stack = createStackNavigator<RootNavigationType>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '홈', headerShown: false}}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{title: '퀴즈 풀기', headerShown: false}}
        />
        <Stack.Screen
          name="WrongNote"
          component={WrongNoteScreen}
          options={{title: '오답 노트', headerShown: false}}
        />
        <Stack.Screen
          name="Result"
          component={ResultsScreen}
          options={{title: '결과', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
