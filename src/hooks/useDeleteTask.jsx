import axios from 'axios';

export default function useDeleteTask() {
  // This hook returns a function that can be called to delete a task
  const deleteTask = async (taskId) => {
    if (taskId) {
      try {
        const response = await axios.delete(`http://localhost:8080/task/delete/${taskId}`);
        if (response.status === 200) {
          console.log("Task was successfully deleted.");
        }
      } catch (error) {
        console.error("Unable to delete task.", error);
      }
    }
  };

  return { deleteTask }; // Return the delete function
}
