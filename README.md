# NgScrollPicker - Angular Scroll Picker

NgScrollPicker is an Angular package inspired by [ng-data-picker](https://github.com/hiyali/ng-data-picker) that provides a scroll picker component for selecting various options.
You can find a live demo of the NgScrollPicker [here](https://mrmyroll2.github.io/NgScrollPicker/).

## Features

- Scroll picker component for Angular v15+.
- Built upon the basic logic from [ng-data-picker](https://github.com/hiyali/ng-data-picker), enhanced and updated to support the latest Angular versions.
- Added wheel listener for smoother and more intuitive scrolling.

## Installation

[ng-scroll-picker](https://www.npmjs.com/package/ng-scroll-picker)

```
npm install ng-scroll-picker
```

## Usage

1. Import the 'NgScrollPickerModule'into your Angular module:

```ts
import { NgModule } from "@angular/core";
import { NgScrollPickerModule } from "ng-scroll-picker";

@NgModule({
  declarations: [
    /* ... */
  ],
  imports: [
    /* ... */
    NgScrollPickerModule,
  ],
  /* ... */
})
export class AppModule {}
```

2. Use the ng-scroll-picker component in your template:

```html
<ng-scroll-picker [data]="data" (change)="change($event)"></ng-scroll-picker>
```

3. Create the necessary properties in your component

```ts
import { Component, OnInit } from "@angular/core";
import { PickerDataModel, PickerValueModel, PickerResponseModel } from "ng-scroll-picker";

@Component({
  selector: "app-basic",
  templateUrl: "./basic.component.html",
  styleUrls: ["./basic.component.scss"],
})
export class BasicComponent implements OnInit {
  selectedValue: any;

  data: PickerDataModel[] = [
    {
      textAlign: "start",
      weight: 9,
      className: undefined,
      onClick: (gIndex: any, iIndex: any, selectedValue: any) => {
        console.log("selectedValue", selectedValue);
      },
      currentIndex: 0,
      list: [],
      divider: false,
      text: "test",
      groupName: "test",
    },
  ];

  ngOnInit() {
    const malaysianBanks: PickerValueModel[] = [
      { label: "Maybank", value: "MBB" },
      { label: "CIMB Bank", value: "CIMB" },
      { label: "Public Bank", value: "PBB" },
      { label: "RHB Bank", value: "RHB" },
      { label: "Hong Leong Bank", value: "HLB" },
      { label: "AmBank", value: "AMB" },
      { label: "Bank Islam Malaysia", value: "BIMB" },
      { label: "OCBC Bank", value: "OCBC" },
      { label: "HSBC Bank Malaysia", value: "HSBC" },
      { label: "Standard Chartered Bank Malaysia", value: "SCB" },
    ];

    this.data[0].list = malaysianBanks;
    this.selectedValue = this.data[0].list[0].value;
  }

  change(res: PickerResponseModel) {
    this.selectedValue = this.data[res.gIndex].list[res.iIndex].value;
  }
}
```

## Contributing

We welcome contributions from the community. Feel free to submit issues, feature requests, and pull requests on our [GitHub repository](https://github.com/mrmyroll2/NgScrollPicker).
