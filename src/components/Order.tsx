import React, { Fragment } from "react";
import { Typography } from "@mui/material";

import { Address } from "./Address";
import { Product } from "./Product";
import { Orders as OrderProps } from "../generated/graphql";

export const Order = ({
  number,
  address_line_1,
  address_line_2,
  address_postal_code,
  address_city,
  order_items,
  order_items_aggregate,
  coupon_code,
}: OrderProps) => (
  <Fragment>
    <Typography gutterBottom component="div">
      ------------------------
    </Typography>

    <Typography gutterBottom component="div">
      Number: {number}
    </Typography>

    <Address
      address_line_1={address_line_1}
      address_line_2={address_line_2}
      address_postal_code={address_postal_code}
      address_city={address_city}
    />

    <Typography gutterBottom component="div">
      Products:{" "}
    </Typography>

    {order_items.map((item, i) => (
      <Product
        key={`${item.product.id}-${i}`}
        name={item.product.name}
        ttc_price={item.ttc_price}
      />
    ))}

    <Typography gutterBottom component="div">
      ttc_price: {order_items_aggregate.aggregate?.sum?.ttc_price} euro
    </Typography>

    <Typography gutterBottom component="div">
      original_ttc_price:{" "}
      {order_items_aggregate.aggregate?.sum?.original_ttc_price} euro
    </Typography>

    <Typography gutterBottom component="div">
      total_refunds:{" "}
      {order_items_aggregate.aggregate?.sum?.original_ttc_price -
        order_items_aggregate.aggregate?.sum?.ttc_price}{" "}
      euro
    </Typography>

    {coupon_code && (
      <Typography gutterBottom component="div">
        Code : {coupon_code}
      </Typography>
    )}
  </Fragment>
);
