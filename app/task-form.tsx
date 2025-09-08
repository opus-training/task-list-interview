import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TASKS from '@/data';
import { Task, TaskStep } from '@/types/types';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function TaskFormScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [task, setTask] = useState<Task | null>(null);
  const [stepResponses, setStepResponses] = useState<Record<string, any>>({});
  const [stepPhotos, setStepPhotos] = useState<Record<string, string[]>>({});

  useEffect(() => {
    // Load task data from navigation params if available
    if (params.taskId) {
      const foundTask = TASKS.find(t => t.id === params.taskId);
      if (foundTask) {
        setTask(foundTask);
        // Initialize step responses
        const initialResponses: Record<string, any> = {};
        const initialPhotos: Record<string, string[]> = {};
        foundTask.steps.forEach(step => {
          if (step.type === 'checkbox') {
            initialResponses[step.id] = false;
          } else {
            initialResponses[step.id] = '';
          }
          // Initialize photos array for steps that support image upload
          if (step.image_upload !== 'disabled') {
            initialPhotos[step.id] = [];
          }
        });
        setStepResponses(initialResponses);
        setStepPhotos(initialPhotos);
      }
    }
  }, [params.taskId]);

  const handleStepResponse = (stepId: string, value: any) => {
    setStepResponses(prev => ({
      ...prev,
      [stepId]: value
    }));
  };

  const pickImage = async (stepId: string, fromCamera: boolean = false) => {
    try {
      // Request permissions
      if (fromCamera) {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission needed', 'Camera permission is required to take photos');
          return;
        }
      } else {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission needed', 'Media library permission is required to select photos');
          return;
        }
      }

      // Launch image picker
      const result = fromCamera
        ? await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.8,
          })
        : await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.8,
          });

      if (!result.canceled && result.assets && result.assets[0]) {
        const photoUri = result.assets[0].uri;
        setStepPhotos(prev => ({
          ...prev,
          [stepId]: [...(prev[stepId] || []), photoUri]
        }));
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to pick image');
      console.error('Image picker error:', error);
    }
  };

  const removePhoto = (stepId: string, photoIndex: number) => {
    setStepPhotos(prev => ({
      ...prev,
      [stepId]: prev[stepId].filter((_, index) => index !== photoIndex)
    }));
  };

  const handleSave = () => {
    if (!task) return;

    // Validate required fields
    for (const step of task.steps) {
      if (step.type === 'text' || step.type === 'number') {
        if (!stepResponses[step.id]?.toString().trim()) {
          Alert.alert('Error', `Please complete: ${step.title}`);
          return;
        }
      }

      // Validate required photos
      if (step.image_upload === 'required') {
        const photos = stepPhotos[step.id] || [];
        if (photos.length === 0) {
          Alert.alert('Error', `Please add at least one photo for: ${step.title}`);
          return;
        }
      }
    }

    // Here you would typically save to a database or state management
    console.log('Step responses:', stepResponses);
    Alert.alert('Success', 'Task completed successfully!', [
      {
        text: 'OK',
        onPress: () => {
          // Navigate back to the task list
          router.back();
        },
      },
    ]);
  };

  const renderPhotoUpload = (step: TaskStep) => {
    if (step.image_upload === 'disabled') {
      return null;
    }

    const photos = stepPhotos[step.id] || [];
    const isRequired = step.image_upload === 'required';

    return (
      <View style={styles.photoContainer}>
        <View style={styles.photoHeader}>
          <ThemedText style={[styles.photoTitle, isRequired && styles.photoTitleRequired]}>
            Photos {isRequired ? '(Required)' : '(Optional)'}
          </ThemedText>
          <View style={styles.photoButtons}>
            <TouchableOpacity
              style={styles.photoButton}
              onPress={() => pickImage(step.id, true)}
            >
              <ThemedText style={styles.photoButtonText}>📷 Camera</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.photoButton}
              onPress={() => pickImage(step.id, false)}
            >
              <ThemedText style={styles.photoButtonText}>🖼️ Gallery</ThemedText>
            </TouchableOpacity>
          </View>
        </View>

        {photos.length > 0 && (
          <View style={styles.photoGrid}>
            {photos.map((photoUri, index) => (
              <View key={index} style={styles.photoItem}>
                <Image
                  source={{ uri: photoUri }}
                  style={styles.photoImage}
                  contentFit="cover"
                />
                <TouchableOpacity
                  style={styles.removePhotoButton}
                  onPress={() => removePhoto(step.id, index)}
                >
                  <ThemedText style={styles.removePhotoText}>✕</ThemedText>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  };

  const renderStepInput = (step: TaskStep) => {
    const value = stepResponses[step.id];
    console.log(step.id);

    switch (step.type) {
      case 'checkbox':
        return (
          <View>
            <TouchableOpacity
              style={[styles.stepCheckbox, value && styles.stepCheckboxChecked]}
              onPress={() => handleStepResponse(step.id, !value)}
            >
              <ThemedText style={[styles.stepCheckboxText, value && styles.stepCheckboxTextChecked]}>
                Checkbox: {value ? '✓' : '○'}
              </ThemedText>
            </TouchableOpacity>
            {renderPhotoUpload(step)}
          </View>
        );

      case 'number':
        return (
          <View>
            <View style={styles.stepInputGroup}>
              <ThemedText style={styles.stepTitle}>{step.title}</ThemedText>
              <TextInput
                style={styles.stepInput}
                value={value?.toString() || ''}
                onChangeText={(text) => handleStepResponse(step.id, text)}
                placeholder="Enter number"
                placeholderTextColor="#999"
                keyboardType="numeric"
              />
            </View>
            {renderPhotoUpload(step)}
          </View>
        );

      case 'text':
        return (
          <View>
            <View style={styles.stepInputGroup}>
              <ThemedText style={styles.stepTitle}>{step.title}</ThemedText>
              <TextInput
                style={[styles.stepInput, styles.stepTextArea]}
                value={value || ''}
                onChangeText={(text) => handleStepResponse(step.id, text)}
                placeholder="Enter text"
                placeholderTextColor="#999"
                multiline
                numberOfLines={3}
              />
            </View>
            {renderPhotoUpload(step)}
          </View>
        );

      case 'multiple_choice':
        return (
          <View>
            <View style={styles.stepInputGroup}>
              <ThemedText style={styles.stepTitle}>{step.title}</ThemedText>
              {step.multiple_choice_options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.optionButton, value === option && styles.optionButtonSelected]}
                  onPress={() => handleStepResponse(step.id, option)}
                >
                  <ThemedText style={[styles.optionText, value === option && styles.optionTextSelected]}>
                    {option}
                  </ThemedText>
                </TouchableOpacity>
              ))}
            </View>
            {renderPhotoUpload(step)}
          </View>
        );

      default:
        return null;
    }
  };

  if (!task) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.header}>
          Loading Task...
        </ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.header}>
        {task.title}
      </ThemedText>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <ThemedView style={styles.taskInfo}>
          <ThemedText style={styles.taskDescription}>
            {task.description}
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepsContainer}>
          <ThemedText type="subtitle" style={styles.stepsHeader}>
            Steps to Complete:
          </ThemedText>

          {task.steps.map((step, index) => (
            <View key={step.id} style={styles.stepContainer}>
              <ThemedText style={styles.stepNumber}>
                Step {index + 1}
              </ThemedText>
              <ThemedText style={styles.stepDescription}>
                {step.description}
              </ThemedText>
              {renderStepInput(step)}
            </View>
          ))}
        </ThemedView>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <ThemedText style={styles.saveButtonText}>Complete Task</ThemedText>
        </TouchableOpacity>
      </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  taskInfo: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  taskDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  stepsContainer: {
    marginBottom: 24,
  },
  stepsHeader: {
    marginBottom: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  stepContainer: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  stepNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  stepInputGroup: {
    marginTop: 12,
  },
  stepInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  stepTextArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  stepCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  stepCheckboxChecked: {
    backgroundColor: '#e8f5e8',
    borderColor: '#4CAF50',
  },
  stepCheckboxText: {
    fontSize: 16,
    color: '#666',
  },
  stepCheckboxTextChecked: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  optionButton: {
    padding: 12,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  optionButtonSelected: {
    backgroundColor: '#e3f2fd',
    borderColor: '#2196F3',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  optionTextSelected: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  photoContainer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  photoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  photoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  photoTitleRequired: {
    color: '#d32f2f',
  },
  photoButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  photoButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  photoButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  photoItem: {
    position: 'relative',
    width: 80,
    height: 80,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  photoImage: {
    width: '100%',
    height: '100%',
  },
  removePhotoButton: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removePhotoText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

