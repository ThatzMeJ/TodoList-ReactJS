import { useState, useEffect } from "react";
import axios from "axios";

export function useFetchTaskList() {
  const [tasklist, setTaskList] = useState([]);
  const [error, setError] = useState(null)
  
  useEffect(() => {
    axios
      .get("http://localhost:8080/tasklist/all")
      .then((response) => {
        setTaskList(() => response.data);
      })
      .catch((error) => {
        setError(console.error("Unable to get tasklist.", error))
      });
  }, [tasklist]);

  return {tasklist, error}
}

