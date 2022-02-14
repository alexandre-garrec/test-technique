import React from "react";

import { Typography } from "@mui/material";
import { Orders } from "../generated/graphql";
import { towDecimal, calcTotalAmount } from "../utils";

type AverageOrderValueProps = {
  orders: Array<Orders>;
};

export const AverageOrderValue = ({ orders }: AverageOrderValueProps) => {
  const totalAmount = calcTotalAmount(orders);

  return (
    <Typography component="div">
      Panier Moyen {towDecimal(totalAmount / orders.length)} euro
    </Typography>
  );
};
