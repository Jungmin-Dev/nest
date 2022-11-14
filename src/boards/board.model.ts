export interface Board {
  id: string;
  title: string;
  description: string;
  BoardStatus: BoardStatus;
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
