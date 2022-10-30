import React, {useEffect} from 'react';
import styled from '@emotion/styled';
import {Typography} from '@mui/material';
import Event from './Event.jsx';
import {Link} from 'react-router-dom';
import {telegram} from '../telegram';

const Base = styled.div``;

const Title = styled(Typography)`
  display: block;
  text-transform: uppercase;
  padding: 8px 16px;
`;

const List = styled.div``;

const Events = () => {
  useEffect(() => {
    telegram.BackButton.hide();
    telegram.MainButton.show();
    telegram.MainButton.text = 'Добавить практику';
  }, []);

  return (
    <Base>
      <Title variant="caption" color="textSecondary">Ближайшие практики</Title>
      <List>
        <Link to={`events/${111}`}>
          <Event/>
        </Link>
        <Event/>
      </List>
    </Base>
  );
};

export default Events;