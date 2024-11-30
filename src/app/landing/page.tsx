'use client';

import LenisScroll from './_components/LenisScroll';
import FirstSection from './_components/FirstSection';
import SecondSection from './_components/SecondSection';
import ThirdSection from './_components/ThirdSection';
import FourthSection from './_components/FourthSection';

export default function Home() {
  return (
    <LenisScroll>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </LenisScroll>
  );
}
