"use client";
import { useCopyToClipboard } from "@/_hooks";
import React from "react";
import { IoCopy } from "react-icons/io5";
import { LuCopy } from "react-icons/lu";

interface accountDetailsDataType {
  type: string;
  bank: string;
  number: string;
}

const AccountDetailsCard = ({ type, bank, number }: accountDetailsDataType) => {
  const { copy, isCopied } = useCopyToClipboard();
  return (
    <div className="flex items-center justify-between shadow-md shadow-gray-100 px-6 py-3 rounded-md">
      <div>
        <p className="font-semibold text-gray-800 tracking-wider lg:text-lg uppercase">
          {type}
        </p>
        <p className="font-light text-gray-800 tracking-widest lg:text-lg">
          {bank}
        </p>
        <p className="tracking-widest font-medium text-sm lg:text-base text-gray-600">{number}</p>
      </div>

      <LuCopy
        className={`size-5 md:size-6 cursor-pointer ${
          isCopied ? "text-green-700" : "text-gray-800"
        }`}
        onClick={() => copy(number)}
      />
    </div>
  );
};

const AccountDetails = () => {
  const accountDetailsData: accountDetailsDataType[] = [
    {
      type: "Main Account",
      bank: "Access Bank",
      number: "76576868989",
    },
    {
      type: "Seed Church",
      bank: "Polaris Bank",
      number: "090488487838",
    },
    {
      type: "Rent Account",
      bank: "MoniePoint",
      number: "653795793734",
    },
    {
      type: "Building Account",
      bank: "Opay",
      number: "73767763756",
    },
  ];

  return (
    <section className="">
      <div className="width flex flex-col justify-center gap-10">
        <h2 className="font-bold tracking-widest text-2xl lg:text-4xl text-red-950 text-center mb-5">
          Account Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {accountDetailsData.map((account) => (
            <AccountDetailsCard key={account.number} {...account} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountDetails;
