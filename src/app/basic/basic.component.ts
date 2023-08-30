import { Component, OnInit } from '@angular/core';
import {
  PickerDataModel,
  PickerValueModel,
  PickerResponseModel,
} from 'ng-scroll-picker';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent implements OnInit {
  selectedValue: any;

  data: PickerDataModel[] = [
    {
      textAlign: 'start',
      weight: 9,
      className: undefined,
      onClick: (gIndex: any, iIndex: any, selectedValue: any) => {
        console.log('selectedValue', selectedValue);
      },
      currentIndex: 0,
      list: [],
      divider: false,
      text: 'test',
      groupName: 'test',
    },
  ];

  ngOnInit() {
    const malaysianBanks: PickerValueModel[] = [
      { label: 'Maybank', value: 'MBB' },
      { label: 'CIMB Bank', value: 'CIMB' },
      { label: 'Public Bank', value: 'PBB' },
      { label: 'RHB Bank', value: 'RHB' },
      { label: 'Hong Leong Bank', value: 'HLB' },
      { label: 'AmBank', value: 'AMB' },
      { label: 'Bank Islam Malaysia', value: 'BIMB' },
      { label: 'OCBC Bank', value: 'OCBC' },
      { label: 'HSBC Bank Malaysia', value: 'HSBC' },
      { label: 'Standard Chartered Bank Malaysia', value: 'SCB' },
    ];

    this.data[0].list = malaysianBanks;
    this.selectedValue = this.data[0].list[0].value;
  }

  change(res: PickerResponseModel) {
    // console.log('gIndex', gIndex);
    console.log('iIndex', res.iIndex);
    console.log('selectedValue', res.selectedValue);
    this.selectedValue = this.data[res.gIndex].list[res.iIndex].value;
  }
}
