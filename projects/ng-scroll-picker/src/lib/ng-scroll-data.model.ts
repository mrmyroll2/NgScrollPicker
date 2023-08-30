export interface PickerDataModel {
  textAlign?:
    | 'start'
    | 'center'
    | 'end'
    | 'justify'
    | 'left'
    | 'right'
    | 'nowrap'
    | 'wrap';
  weight?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  className?: string;

  onClick?: Function;
  currentIndex?: number;
  list: Array<PickerValueModel>;

  divider?: boolean;
  text?: string;
  groupName: string;
}

export interface PickerValueModel {
  label: string;
  value: string;
}

export interface PickerResponseModel {
  gIndex: number;
  iIndex: number;
  selectedValue: PickerValueModel;
  groupName: string;
}
