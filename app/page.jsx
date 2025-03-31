"use client";

import styles from '../styles/globals.css';
import Header from '../components/Header';

import React from 'react';
import {useRouter} from 'next/navigation';

const Page = () => {
  return (
    <div>
      <Header />
      <main style={styles.main}>
        <h2>Descubra mundos extraordinários!</h2>
        <p>Promoção de lançamento com até 30% de desconto</p>
        <button className={styles.botao} onClick={() => alert('Botão clicado!')}>
         Ver ofertas
        </button>
      </main>
    </div>
  );
};

export default Page;