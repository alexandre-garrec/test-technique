import React from "react";

import { Typography } from "@mui/material";

type ProductProps = {
  name: string;
  ttc_price: string;
};

export const Product = ({ name, ttc_price }: ProductProps) => (
  <Typography gutterBottom component="div">
    {` - ${name} ${ttc_price} euro`}
  </Typography>
);
