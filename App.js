import { StyleSheet, View, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import { Navbar } from "./src/components/Navbar";
import { MainView } from "./src/views/MainView";
import { TodoView } from "./src/views/TodoView";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "do smth",
    },
  ]);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "ubuntu-regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
          "ubuntu-bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const addTodos = (title) => {
    setTodos((prev) => [
      {
        id: Date.now().toString(),
        title,
      },
      ...prev,
    ]);
  };

  const updateTodo = (id, title) => {
    setTodos((old) =>
      todos.map((todo) => {
        if (todo.id == id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    const todo = todos.find((t) => t.id == id);
    Alert.alert(
      "Удаление элемента",
      `Вы уверены, что хотите удалить элемент "${todo.title}" ?`,
      [
        {
          text: "Отмена",
          style: "cancel",
        },
        {
          text: "Удалить",
          onPress: () => {
            setTodoId(null);
            setTodos(todos.filter((todo) => todo.id !== id));
          },
          style: "destructive",
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  let content = (
    <MainView
      addTodos={addTodos}
      deleteTodo={deleteTodo}
      todos={todos}
      openTodo={setTodoId}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id == todoId);
    content = (
      <TodoView
        onRemove={deleteTodo}
        goBack={() => setTodoId(null)}
        todo={selectedTodo}
        onSave={updateTodo}
      />
    );
  }

  return (
    <View onLayout={onLayoutRootView}>
      <Navbar title="TODO list" />
      <View style={styles.container}>{content}</View>
      <StatusBar style="light" translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
