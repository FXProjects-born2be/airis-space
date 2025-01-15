"use client";
import React from "react";
import usePopupStore from "@/stores/popupStore";
import ButtonArrow from "@/icons/ButtonArrow";

function PlansButton({ position }) {
  const { setRequestPopupDisplay, setPlansValue } = usePopupStore();

  const orderPopupOpen = () => {
    setPlansValue(position);
    setRequestPopupDisplay(true);
  };
  return (
    <>
      <button onClick={() => orderPopupOpen()}>
      Request
        <ButtonArrow />
      </button>
    </>
  );
}

export default PlansButton;
