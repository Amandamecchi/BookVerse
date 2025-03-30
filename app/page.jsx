"use client";

import styles from '../styles/globals.css';
import Header from '../components/Header';

import React from 'react';
import {useRouter} from 'next/navigation';

const Page = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Bem-vindo ao BooksVerse!</h2>
      </main>
    </div>
  );
};

export default Page;