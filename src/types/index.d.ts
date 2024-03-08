export type User = {
  id: string;
  name: string;
};

export type NextClassInfo = {
  nextTopic: string;
  nextTest: string;
};

export type ClassListItem = {
  title: string;
  at: string;
  comprehension: number;
};

export type BaseClass = {
  title: string;
  test?: string;
  homework?: string;
  activityType?: string;
  activity?: string;
  comprehension?: string;
};

export type ClassInsert = BaseClass;

export type ClassType = {
  id: number;
  createdAt: number;
  updatedAt: number;
} & BaseClass;

export type BaseStudent = {
  name: string;
  memo: string;
};

export type Student = {
  id: number;
} & BaseStudent;

export type StudentInsert = BaseStudent;
