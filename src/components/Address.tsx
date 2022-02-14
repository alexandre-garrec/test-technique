import React from "react";

import { Typography } from "@mui/material";

type AddressProps = {
  address_line_1: any;
  address_line_2: any;
  address_postal_code: any;
  address_city: any;
};

export const Address = ({
  address_line_1,
  address_line_2,
  address_postal_code,
  address_city,
}: AddressProps) => (
  <Typography gutterBottom component="div">
    Addresse: {address_line_1} {address_line_2} {address_postal_code}{" "}
    {address_city}
  </Typography>
);
