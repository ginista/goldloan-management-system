import { createContext, useContext, useState } from "react";
import React, { Component } from "react";
export const userContext = React.createContext({});
export function UserDetailsContextProvider({ children }) {
  const [firstName, setfirstName] = useState("Gini");
  const [lastName, setlastName] = useState("");
  const [AadharId, setAadharId] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [Address, setAddress] = useState("");

  const [goldType, setgoldType] = useState("");
  const [image, setImage] = useState("");
  const [grams, setGrams] = useState("");
  const [loanAmount, setloanAmount] = useState("");
  const [date, setDate] = useState("");
  const [dueDate, setdueDate] = useState("");
  const [rateSelection, setRateSelection] = useState("");
  const [Loanno, setLoanNo] = useState("");

  const [searchData, setsearchData] = useState({
    firstName: '',
    lastName: '',
    AadharId: '',
    mobileNumber: '',
    Address: '',
    goldType: '',
    grams: '',
    loanAmount: '',
    date: '',
    dueDate: '',
    rateSelection: '',
    Loanno: '',
  });

  const [firstNamedb, setfirstNamedb] = useState("");
  const [loanNodb, setloanNodb] = useState("");
  const [amountdb, setamountdb] = useState("");
  const [goldweightdb, setgoldweightdb] = useState("");
  const [goldtypedb, setgoldtypedb] = useState("");
  const [datedb, setdatedb] = useState("");
  const [dueDatedb, setdueDatedb] = useState("");
  const [interestratedb, setinterestratedb] = useState("");
  const [interestamountdb, setinterestamountdb] = useState("");
  const [totalamountdb, settotalamountdb] = useState("");
  function addDetails(firstName, lastName, AadharId, mobileNumber, Address) {
    setfirstName(firstName);
    setlastName(lastName);
    setAadharId(AadharId);
    setMobileNumber(mobileNumber);
    setAddress(Address);
    //   return firstName;
  }

  function goldDetails(goldType, grams, loanAmount) {
    setgoldType(goldType);
    setGrams(grams);
    setloanAmount(loanAmount);
  }

  function interestRate(date, dueDate, rateSelection, Loanno) {
    setDate(date);
    setdueDate(dueDate);
    setRateSelection(rateSelection);
    setLoanNo(Loanno);
  }

  function adddbDetails(data) {
    setsearchData(data);
    console.log("incontext1" + data.firstName);
    console.log("incontext2" + searchData.firstName)
  }
  
  return (
    <userContext.Provider
      value={{
        firstName,
        lastName,
        AadharId,
        mobileNumber,
        Address,
        goldType,
        grams,
        loanAmount,
        date,
        dueDate,
        rateSelection,
        Loanno,
        firstNamedb,
        addDetails,
        goldDetails,
        interestRate,
        adddbDetails,
        searchData
      }}
    >
      {children}
    </userContext.Provider>
  );
}
export function useUserDetailsContext() {
  return useContext(userContext);
}
