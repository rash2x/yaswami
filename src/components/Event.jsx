import React from 'react';
import styled from '@emotion/styled';
import {Typography} from '@mui/material';

const Base = styled.div`
  background: ${({theme}) => theme.palette.background.paper};
  display: flex;
  padding: 8px 16px;

  & + &,
  &:first-child {
    border-top: 1px solid ${({theme}) => theme.palette.divider};
  }

  &:hover {
    background: ${({theme}) => theme.palette.action.hover};
  }

  &:active {
    background: ${({theme}) => theme.palette.action.active};
  }

  &:focus {
    background: ${({theme}) => theme.palette.action.selected};
  }

  &:selection {
    background: ${({theme}) => theme.palette.action.selected};
  }
`;

const Side = styled.aside`
  margin-right: 16px;
  padding-top: 4px;

  img {
    border-radius: 50%;
  }
`;
const Main = styled.main`

`;
const Info = styled(Typography)`
  font-size: 0.75rem;
  font-weight: 600;

  span + span:before {
    content: '·';
    margin: 0 4px;
    display: inline-block;
  }
`;
const Date = styled(Typography)``;
const Place = styled(Typography)`
  margin-top: 2px;
`;

const Event = () => {
  return (
    <Base>
      <Side>
        <img src="../src/assets/user.jpg" alt=""/>
      </Side>
      <Main>
        <Info>
          <span>Ecstatic Dance</span>
          <span>@kalisa_ecstatic</span>
        </Info>
        <Date variant="body2">Завтра, 16:00-17:00</Date>
        <Place variant="caption" color="textSecondary">Базовый лагерь, Fairway, Крыша </Place>
      </Main>
    </Base>
  );
};

export default Event;