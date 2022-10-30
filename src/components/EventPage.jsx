import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from '@emotion/styled';
import {Typography} from '@mui/material';
import {telegram} from '../telegram';

const Base = styled.div`
  background: ${({theme}) => theme.palette.background.paper};
  padding: 16px;
`;

const Place = styled(Typography)`
  margin-top: 2px;
`;
const Date = styled(Typography)`
  margin-top: 12px;
  font-weight: 700;
`;
const Thumbnail = styled.div`
  background: ${({ theme }) => theme.palette.background.default};
  height: 200px;
  
  text-align: center;
  
  img {
    max-height: 100%;
  }
`;

const Type = styled(Typography)`
  margin-top: 12px;
`;
const User = styled.div`
  display: flex;
  align-items: center;
`;
const UserImage = styled.img``;
const UserContent = styled.div`
  margin-left: 12px;
`;
const UserName = styled(Typography)`
  font-size: 13px;
  font-weight: 700;
`;
const UserNickName = styled(Typography)`
  font-size: 12px;
  font-weight: 700;
`;

const Description = styled(Typography)`
  margin-top: 12px;
`;

const EventPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    telegram.BackButton.show();
    telegram.BackButton.onClick(() => {
      navigate('/');
    });

    telegram.MainButton.text = 'Участвую (3000 Рупий)'
    telegram.MainButton.show();
  }, []);

  return (
    <Base>
      <Thumbnail>
        <img src="../src/assets/event.jpg" alt=""/>
      </Thumbnail>
      <Type>Ecstatic Dance</Type>
      <User>
        <UserImage src="../src/assets/user.jpg" alt="" />
        <UserContent>
          <UserName>🌈 KALISA Ecstatic Dj 🔥💃</UserName>
          <UserNickName color="textSecondary">@kalisa_ecstatic</UserNickName>
        </UserContent>
      </User>
      <Date variant="body2">Завтра, 16:00-17:00</Date>
      <Place variant="body1" color="textSecondary">Базовый лагерь, Fairway, Крыша </Place>
      <Description variant="body2">
        Намастэ🙏

        Приглашаю на практики Йоги и Медитации в районе Унаватуны в тихом природном месте на вилле.

        Расписание:

        💫Понедельник, Суббота:
        в 7:00 утра 90мин ЭнергоЙога,
        Пранаямы, Медитация, Хилинг Чашей из Непала

        💫Среда, Пятница:
        в 9:30 утра 90мин Хатха йога, Йога Флоу, Саундхилинг, Медитация.

        💫Воскресенье в 11 часов Женская Практика ( работа с мышцами малого таза, профилактика диастаза)
        Женская ИНЬ йога, Энергопрактики, Тематическая Медитация

        Оплата в группе 3000рупий
        Запись обязательна

        💫индивидуальная сессия под запрос

        Присоединяйтесь и вы сможете ощутить все прелести от Практики и необычных редких техник с целительной медитацией, саундхилингом и Мантрами, а также отведать полезных вкусняшек и  домашней выпечки

        💫Вибросаундхилинг- массаж Чашей из Непала (гармонизирует женскую и мужскую энергетику, диагностика энергетического состояния человека, подробности в Директ)

        Международные сертификаты йоги Альянса Индии , России и США. Имею Посвящение от Учителей
      </Description>
    </Base>
  );
};

export default EventPage;