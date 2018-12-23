export interface Column {
  dataIndex: string;
  display: boolean;
  className?: string;
  order: number;
  displayTitle: string;
  enableSorting?: boolean;
  sortingDirection?: string;
  indexType?: string;
  displayFormat?: string;
  action?: string;
  actionClass?: string;
}
