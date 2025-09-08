import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TASKS from '@/data';
import { Task } from '@/types/types';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';


export default function AvailableTasksScreen() {
  const router = useRouter();

  const handleTaskPress = (task: Task) => {
    router.push({
      pathname: '/task-form',
      params: {
        taskId: task.id,
        taskTitle: task.title,
        taskDescription: task.description,
      },
    });
  };

  const renderTask = ({ item }: { item: Task }) => (
    <TouchableOpacity style={styles.taskItem} onPress={() => handleTaskPress(item)}>
      <ThemedView style={styles.taskContent}>
        <ThemedText type="defaultSemiBold" style={styles.taskTitle}>
          {item.title}
        </ThemedText>
        <ThemedText style={styles.taskDescription}>
          {item.description}
        </ThemedText>

      </ThemedView>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={TASKS}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        style={styles.taskList}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  taskList: {
    flex: 1,
  },
  taskItem: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  taskDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  completedText: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});
