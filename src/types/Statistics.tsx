export interface Statistics {
  statistics: StatisticGroups[];
}

export interface StatisticGroups {
  period: string;
  groups: Group[];
}

export interface Group {
  groupName:       GroupName;
  statisticsItems: StatisticsItem[];
}

export enum GroupName {
  Lead = "Lead",
  Other = "Other",
  Scoring = "Scoring",
}

export interface StatisticsItem {
  name:        string;
  home:        string;
  away:        string;
  compareCode: number;
}