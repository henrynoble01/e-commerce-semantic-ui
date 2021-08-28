import React from "react";
// import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { Header, List } from "semantic-ui-react";

const Review = ({ checkoutToken }) => {
  console.log(checkoutToken);
  return (
    <>
      <Header as='h5'>Order Summary</Header>
      <List disablePadding>
        {checkoutToken.live.line_items.map((product) => (
          <List.Item style={{ padding: "10px 0" }} key={product.name}>
            <List.Content>
              <List.Header content={product.name}></List.Header>
              <List.Description
                content={`Quantity: ${product.quantity}`}></List.Description>
            </List.Content>
            <List.Content floated='right'>
              <Header size='tiny'>
                {product.line_total.formatted_with_symbol}
              </Header>
            </List.Content>
          </List.Item>
        ))}
        <List.Item style={{ padding: "10px 0" }}>
          <List.Header content='Total' />
          <List.Content floated='right'>
            <Header size='small' style={{ fontWeight: 700 }}>
              {checkoutToken.live.subtotal.formatted_with_symbol}
            </Header>
          </List.Content>
        </List.Item>
      </List>
    </>
  );
};

export default Review;
