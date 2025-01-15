"use client";
import React from "react";
import usePopupStore from "@/stores/popupStore";
import ButtonArrow from "@/icons/ButtonArrow";

function JobButton({ position }) {
  const { setJobsPopupDisplay, setJobValue } = usePopupStore();

  const orderPopupOpen = () => {
    setJobValue(position);
    setJobsPopupDisplay(true);
  };
  return (
    <>
      <button onClick={() => orderPopupOpen()}>
        Apply Now
        <ButtonArrow />
      </button>
    </>
  );
}

export default JobButton;
