export interface UserParams {
  email: string;
  password: string;
}

export interface Task {
  id?: number;
  title: string;
  priority: string;
  dueBy: number;
}

export interface AuthParams {
  type: string;
  payload: UserParams;
}

export interface AuthErrors {
  message: string;
  fields: AuthParams;
}

export interface AuthReducer {
  tokenData?: TokenData;
}

export interface TokenData {
  token: string;
  expire: number;
}

export interface TasksParams {
  page: number;
  sort?: string;
}

export interface TasksMeta {
  count: number;
  current: number;
  limit: number;
}

export interface Tasks {
  meta: TasksMeta;
  list: Task[];
}

export interface TasksReducer {
  tasks: Tasks;
}

export interface SortReducer {
  sort:
    | 'priority asc'
    | 'priority desc'
    | 'title asc'
    | 'title desc'
    | 'dueBy asc'
    | 'dueBy desc';
}
