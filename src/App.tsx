// @ts-nocheck
import React, { Fragment } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useQuery } from "@apollo/client";
import { CircularProgress, Typography } from "@mui/material";
import {
  GetUserWithOrdersQuery,
  GetUserWithOrdersQueryVariables,
  GetUserWithOrdersDocument,
} from "./generated/graphql";

import { Order } from "./components/Order";
import { User } from "./components/User";
import { TotalAmount } from "./components/TotalAmount";
import { AverageOrderValue } from "./components/AverageOrderValue";

function App() {
  const { loading, data } = useQuery<
    GetUserWithOrdersQuery,
    GetUserWithOrdersQueryVariables
  >(GetUserWithOrdersDocument, {
    variables: {
      id: "87ff5d34-845d-4dfb-8de8-ec487455d9c6",
    },
  });

  return (
    <Container maxWidth="sm">
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <User
              first_name={data?.users_by_pk?.first_name}
              last_name={data?.users_by_pk?.last_name}
            />

            <Typography component="div">
              Nombre de commandes: {data?.users_by_pk?.orders.length}
            </Typography>

            <TotalAmount orders={data?.users_by_pk?.orders} />
            <AverageOrderValue orders={data?.users_by_pk?.orders} />

            {data?.users_by_pk?.orders.map((order, i) => (
              <Order key={i} {...order} />
            ))}
          </>
        )}
      </Box>
    </Container>
  );
}

export default App;
