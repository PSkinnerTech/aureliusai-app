import { Logo } from '../components/Logo';
import Link from 'next/link';
import Image from 'next/image';
import HeroImage from '../public/hero.webp';

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
      <Image src={HeroImage} at="Hero" fill className="absolute" />
      <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/50 rounded-md backdrop-blur-sm">
        <Logo />
        <p className="py-4 px-4">
          The AI-powered platform designed to train you to close deals.
        </p>
        <Link href="/post/new" className="btn ">
          Begin
        </Link>
      </div>
    </div>
  );
}
