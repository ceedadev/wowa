"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { parsePhoneNumber, type CountryCode } from "libphonenumber-js/min";

import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { emojiFlag } from "@/lib/emoji-flag";

export default function PhoneNumberInput() {
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumberInput, setPhoneNumberInput] = useState("");
  //   const [message, setMessage] = useState("");

  useEffect(() => {
    return () => {
      //   fetch user's country code based on IP
      axios
        .get("http://ip-api.com/json")
        .then((response) => {
          const country = response.data.countryCode;
          setCountryCode(country);
        })
        .catch((error) => {
          console.log("Error fetching country code : ", error);
        });
    };
  }, []);

  function handleSubmit() {
    const phoneNumber = parsePhoneNumber(
      phoneNumberInput,
      countryCode as CountryCode
    );
    // console.log(phoneNumber.format("E.164"));
    if (phoneNumber.isValid()) {
      console.log(phoneNumber.format("E.164"));
      const url = `https://wa.me/${phoneNumber.format("E.164")}`;
      window.open(url);
    } else {
      console.log("Phone Number is invalid");
    }
  }

  return (
    <div className=" max-w-sm mx-auto space-y-4">
      <p className="text-center text-sm font-light">
        Phone number from {emojiFlag(countryCode)}
      </p>
      <div className="flex flex-row space-x-2">
        <Input
          onChange={(event) => {
            setPhoneNumberInput(event.target.value);
          }}
          placeholder="Phone number.."
        />
        <Button
          className="w-16"
          onClick={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
}
