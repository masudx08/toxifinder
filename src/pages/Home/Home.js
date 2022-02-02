import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Medicines from '../../components/Medicines/Medicines';

export default function Home() {
  return <div>
      <Header />
      <Hero />
      <Medicines />
      <Footer />
  </div>;
}
