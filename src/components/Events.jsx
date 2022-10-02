import React from 'react';
import styled from "@emotion/styled";
import {Typography} from "@mui/material";
import Event from "./Event.jsx";

const Base = styled.div`
  
`;

const Title = styled(Typography)`
  display: block;
  text-transform: uppercase;
  padding: 8px 16px;
`;

const List = styled.div``;

const Events = () => {
  return (
    <Base>
      <Title variant="caption" color="textSecondary">Ближайшие события</Title>
      <List>
        <Event />
        <Event />
      </List>
    </Base>
  )
}

export default Events;