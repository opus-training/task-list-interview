import { Task } from '../types/types';

export const shortTask: Task = {
  id: 'short-task-1',
  title: 'Kitchen Line Check',
  description: 'Monitor food safety and equipment status on the kitchen line',
  steps: [
    {
      id: 'step-1',
      title: 'Chicken temperature check',
      description: 'Record the internal temperature of cooked chicken',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-2',
      title: 'Heat lamp status',
      description: 'Check if heat lamps are functioning properly',
      type: 'checkbox',
      multiple_choice_options: [],
      image_upload: 'optional'
    },
    {
      id: 'step-3',
      title: 'Refrigerator temperature',
      description: 'Record refrigerator temperature reading',
      type: 'number',
      multiple_choice_options: [],
      image_upload: 'disabled'
    },
    {
      id: 'step-4',
      title: 'Equipment cleanliness',
      description: 'Rate the cleanliness level of kitchen equipment',
      type: 'multiple_choice',
      multiple_choice_options: ['Needs cleaning', 'Acceptable', 'Clean', 'Spotless'],
      image_upload: 'optional'
    },
    {
      id: 'step-5',
      title: 'Food storage notes',
      description: 'Record any observations about food storage conditions',
      type: 'text',
      multiple_choice_options: [],
      image_upload: 'optional'
    }
  ]
};
