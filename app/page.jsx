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
      <section style={bannerStyles.container}>
        <h3 style={bannerStyles.title}>Fique por dentro das novidades!</h3>
        <p style={bannerStyles.subtitle}>
          Assine nossa newsletter e receba atualizações sobre novos lançamentos, promoções exclusivas e dicas de leitura.
        </p>
        <div style={bannerStyles.form}>
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            style={bannerStyles.input}
          />
          <button style={bannerStyles.button}>Assinar</button>
        </div>
      </section>
    </div>
  );
};

const bannerStyles = {
  container: {
    backgroundColor: '#4caf87',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '8px',
    marginTop: '20px',
  },
  title: {
    color: '#fff',
    fontSize: '24px',
    marginBottom: '10px',
  },
  subtitle: {
    color: '#fff',
    fontSize: '16px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    flex: '1',
    maxWidth: '300px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#ff5c8d',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Page;