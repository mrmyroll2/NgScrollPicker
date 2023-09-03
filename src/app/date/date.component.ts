import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  NgScrollPickerComponent,
  PickerDataModel,
  PickerResponseModel,
  PickerValueModel,
} from 'ng-scroll-picker';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit, AfterViewInit {
  @ViewChild('datePicker') dataPicker!: NgScrollPickerComponent;

  data: PickerDataModel[] = [];
  minDate: Date = new Date(2023, 2 - 1, 6);
  maxDate: Date = new Date(2025, 11 - 1, 15);
  defaultDate: Date = new Date(2024, 10 - 1, 6);
  // defaultDate!: Date;
  // maxDate: Date = new Date(2020, 2 - 1, 8);

  selectedYear!: number;
  selectedMonth: number | null = null;
  selectedDay: number | null = null;

  years: PickerValueModel[] = [];
  months: PickerValueModel[] = [];
  days: PickerValueModel[] = [];

  constructor() {}

  ngAfterViewInit(): void {
    // console.log('this.dataPicker', this.dataPicker);
  }

  ngOnInit(): void {
    this.defaultDate = this.defaultDate ?? this.minDate;
    this.populateYears();
    this.updateMonths();
  }

  populateYears() {
    for (
      let year = this.minDate.getFullYear();
      year <= this.maxDate.getFullYear();
      year++
    ) {
      this.years.push({
        label: year.toString(),
        value: year.toString(),
      });
    }
    let currentIndex: number = 0;
    const anyI = this.years.findIndex(
      (f) => f.value == this.defaultDate.getFullYear().toString()
    );
    if (anyI != -1) {
      currentIndex = anyI;
    }
    this.selectedYear = parseInt(this.years[currentIndex].value);

    this.data.push({
      textAlign: 'start',
      weight: 9,
      list: this.years,
      groupName: 'Tahun',
      currentIndex: currentIndex,
    });
  }

  updateMonths() {
    this.months = [];
    const startMonth =
      this.selectedYear == this.minDate.getFullYear()
        ? this.minDate.getMonth() + 1
        : 1;
    const endMonth =
      this.selectedYear == this.maxDate.getFullYear()
        ? this.maxDate.getMonth() + 1
        : 12;

    this.months = Array.from(
      { length: endMonth - startMonth + 1 },
      (_, index) => {
        const monthValue = startMonth + index;
        return {
          label: monthValue.toString(),
          value: monthValue.toString(),
        };
      }
    );

    let selectedMonthValue = this.selectedMonth;
    if (selectedMonthValue === null) {
      selectedMonthValue = this.defaultDate.getMonth() + 1;
    } else if (selectedMonthValue < startMonth) {
      selectedMonthValue = startMonth;
    } else if (selectedMonthValue > endMonth) {
      selectedMonthValue = endMonth;
    }

    console.log('selectedMonthValue', selectedMonthValue);
    const selectedMonthIndex = this.months.findIndex(
      (month) => month.value === selectedMonthValue?.toString()
    );

    this.selectedMonth = parseInt(
      this.months[selectedMonthIndex != -1 ? selectedMonthIndex : 0].value
    );

    if (this.dataPicker != undefined) {
      const list = this.months;
      this.dataPicker.setGroupData(1, {
        ...this.data[1],
        ...{ currentIndex: selectedMonthIndex, list },
      });
    } else {
      this.data.unshift({
        textAlign: 'start',
        weight: 9,
        list: this.months,
        groupName: 'Bulan',
        currentIndex: selectedMonthIndex,
      });
    }

    this.updateDays();
  }

  isLeapYear = (year: number) =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  getDaysInMonth(year: number, month: string): number {
    switch (month) {
      case '1': // January
      case '3': // March
      case '5': // May
      case '7': // July
      case '8': // August
      case '10': // October
      case '12': // December
        return 31;
      case '4': // April
      case '6': // June
      case '9': // September
      case '11': // November
        return 30;
      case '2': // February
        return this.isLeapYear(year) ? 29 : 28;
      default:
        throw new Error(`Invalid month: ${month}`);
    }
  }

  updateDays() {
    this.days = [];

    const startDay =
      this.selectedYear == this.minDate.getFullYear() &&
      this.selectedMonth == this.minDate.getMonth() + 1
        ? this.minDate.getDate()
        : 1;

    const daysInMonth =
      this.selectedYear == this.maxDate.getFullYear() &&
      this.selectedMonth == this.maxDate.getMonth() + 1
        ? this.maxDate.getDate()
        : this.getDaysInMonth(
            this.selectedYear,
            this.selectedMonth!.toString()
          );

    for (let day = startDay; day <= daysInMonth; day++) {
      this.days.push({
        label: day.toString(),
        value: day.toString(),
      });
    }

    let currentIndex: number = 0;
    if (this.selectedDay == null) {
      this.selectedDay = this.defaultDate.getDate();
    }

    if (this.selectedDay > daysInMonth) {
      this.selectedDay = daysInMonth;
    } else if (this.selectedDay < startDay) {
      this.selectedDay = startDay;
    }

    const anyI = this.days.findIndex(
      (f) => f.value == this.selectedDay?.toString()
    );
    if (anyI != -1) {
      currentIndex = anyI;
    } else {
      this.selectedDay = parseInt(this.days[0].value);
    }

    if (this.dataPicker != undefined) {
      const list = this.days;
      this.dataPicker.setGroupData(0, {
        ...this.data[0],
        ...{ currentIndex, list },
      });
    } else {
      this.data.unshift({
        textAlign: 'start',
        weight: 9,
        list: this.days,
        groupName: 'Hari',
        currentIndex: currentIndex,
      });
    }
  }

  changeYear(res: PickerResponseModel) {
    const ciList = this.dataPicker.getCurrentIndexList();
    console.log('ciList', ciList);
    if (res.groupName == 'Tahun') {
      this.selectedYear = parseInt(this.years[res.iIndex].value);
      this.updateMonths();
    } else if (res.groupName == 'Bulan') {
      this.selectedMonth = parseInt(this.months[res.iIndex].value);
      this.updateDays();
    } else if (res.groupName == 'Hari') {
      this.selectedDay = parseInt(this.days[res.iIndex].value);
    }
  }
}
