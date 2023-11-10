/**
 * My To Do List App
 *
 * @format
 */

import React/*, { useState }*/ from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import ToDoList from './src/ToDoList';
import ToDoForm from './src/ToDoForm';


function App() {
  const [ tasks, setTasks ] = React.useState([
      'Do laundry',
      'Go to gym',
      'Walk dog' ,
      'Study'
  ]);
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
