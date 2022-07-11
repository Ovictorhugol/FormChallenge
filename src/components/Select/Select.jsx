import React from "react";
import { Label, LabelContainer } from "../Input/Input.styled";
import { SelectStyled, SelectInput, OptionSyled } from "./Select.styled";

export const Select = ({ id }) => {
  switch (id) {
    case "Day":
      return <SelectDay />;
    case "Month":
      return <SelectMonth />;
    case "Year":
      return <SelectYear />;
  }
};

export default Select;

const SelectYear = () => {
  let year = {
    years: [],
  };
  for (var i = 1900; i < 2022; i++) {
    year.years[i] = i + 1;
  }

  let optionYear = year.years.map((yearNumber) => (
    <OptionSyled key={yearNumber}>{yearNumber}</OptionSyled>
  ));
  return (
    <>
      <SelectInput>
        <Label>Year</Label>

        <SelectStyled>{optionYear}</SelectStyled>
      </SelectInput>
    </>
  );
};

const SelectMonth = () => {
  let month = {
    months: [],
  };
  for (var i = 0; i < 12; i++) {
    if (i <= 8) {
      month.months[i] = "0" + (i + 1);
    } else {
      month.months[i] = i + 1;
    }
  }

  let optionMonth = month.months.map((monthNumber) => (
    <OptionSyled key={monthNumber}>{monthNumber}</OptionSyled>
  ));
  return (
    <>
      <SelectInput>
        <Label>Month</Label>
        <SelectStyled>{optionMonth}</SelectStyled>
      </SelectInput>
    </>
  );
};

const SelectDay = () => {
  let day = {
    days: [],
  };
  for (var i = 0; i < 31; i++) {
    if (i <= 8) {
      day.days[i] = "0" + (i + 1);
    } else {
      day.days[i] = i + 1;
    }
  }

  let optionDate = day.days.map((date) => (
    <OptionSyled key={date}>{date}</OptionSyled>
  ));
  return (
    <>
      <SelectInput>
        <Label>Day</Label>
        <SelectStyled>{optionDate}</SelectStyled>
      </SelectInput>
    </>
  );
};
