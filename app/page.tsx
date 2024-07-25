import About from '@/components/about';
import Collections from '@/components/collections';
import Contact from '@/components/contact';
import Hero from '@/components/hero';

export default function Home() {
    return (
        <main className='flex flex-col items-center'>
            <Hero />
            <Collections />
            <About />
            <Contact />
        </main>
    );
}
