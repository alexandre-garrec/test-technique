import React from "react";

import { Typography } from "@mui/material";
import { Orders } from "../generated/graphql";
import { towDecimal, calcTotalAmount } from "../utils";

type TotalAmountProps = {
  orders: Array<Orders>;
};

export const TotalAmount = ({ orders }: TotalAmountProps) => {
  const total = calcTotalAmount(orders);
  return (
    <Typography component="div">
      Pour un total de {towDecimal(total)} euro
    </Typography>
  );
};
