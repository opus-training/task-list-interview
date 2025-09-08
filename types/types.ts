

interface Task {
    id: string;
    title: string;
    description: string;
    steps: TaskStep[]
  }
  
  interface TaskStep {
    id: string;
    title: string;
    description: string;
    type: "multiple_choice" | "number" | "text" | "checkbox"
    multiple_choice_options: string[]
    image_upload: "required" | "optional" | "disabled"
  }
  
  
  export type { Task, TaskStep };
  