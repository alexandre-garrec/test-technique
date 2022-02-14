import React from "react";

import { Typography } from "@mui/material";

type UserProps = {
  first_name: string;
  last_name?: string;
};

export const User = ({ first_name, last_name = "" }: UserProps) => (
  <Typography variant="h2" gutterBottom component="div">
    {`${first_name} ${last_name}`}
  </Typography>
);
