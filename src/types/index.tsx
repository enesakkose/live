export type Todos = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export interface Category {
  name:     string;
  slug:     string;
  sport:    Sport;
  priority: number;
  id:       number;
  flag:     string;
  alpha2:   string;
}

export interface Sport {
  name: string;
  slug: string;
  id:   number;
}