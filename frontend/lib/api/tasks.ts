export type TaskSummary = {
  id: string;
  title: string;
  description?: string;
  completed?: boolean;
};

export type Task = TaskSummary;

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function fetchTasks(): Promise<TaskSummary[]> {
  try {
    const res = await fetch(`${API_URL}/tasks`);
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export async function getCurrentTask(): Promise<TaskSummary | null> {
  const tasks = await fetchTasks();
  return tasks.find((task) => !task.completed) || tasks[0] || null;
}

export async function startSession() {
  return { ok: true };
}

export async function startTask() {
  return { ok: true };
}

export async function stopTask() {
  return { ok: true };
}

export async function replayStepTts() {
  return { ok: true };
}

export async function advanceTask(taskId?: string) {
  return { ok: true, taskId };
}
