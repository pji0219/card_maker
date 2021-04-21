import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

function Maker({ authService }) {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'jong-ik',
      company: 'naver',
      theme: 'dark',
      title: 'Front-end Engineer',
      email: 'park@gmail.com',
      message: 'mu ya ho~!',
      fileName: 'jong-ik',
      fileURL: null,
    },
    {
      id: '2',
      name: 'kim',
      company: 'kakao',
      theme: 'light',
      title: 'Back-end Engineer',
      email: 'kim@gmail.com',
      message: 'Ang~',
      fileName: 'kim',
      fileURL: 'kim.png',
    },
    {
      id: '3',
      name: 'lee',
      company: 'baemin',
      theme: 'colorful',
      title: 'Android Engineer',
      email: 'lee@gmail.com',
      message: 'boob!',
      fileName: 'lee',
      fileURL: null,
    },
  ]);
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
}

export default Maker;
