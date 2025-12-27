
export enum Difficulty {
  BEGINNER = '初级',
  INTERMEDIATE = '中级',
  ADVANCED = '专业',
}

export enum Category {
  FUNDAMENTALS = '基础认知',
  OS_SOFTWARE = '终端加固',
  NETWORKING = '网络通信',
  SOCIAL_ENGINEERING = '人因安全',
  DEVELOPMENT = '安全开发',
  OPERATIONS = '安全运维',
  LEGAL = '法律法规',
  DATA_PRIVACY = '数据隐私',
}

export interface Lesson {
  id: number;
  title: string;
  category: Category;
  difficulty: Difficulty;
  description: string;
  points: string[];
  caseStudy?: string;
}

export interface Module {
  id: number;
  name: string;
  lessons: Lesson[];
}
