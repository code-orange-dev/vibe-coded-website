import { useSeoMeta } from '@unhead/react';
import { Mail, MapPin, MessageCircle, PawPrint, Phone, Bitcoin, Copy, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const galleryImages = [
  { src: '/IMG_3250.jpeg', alt: 'Bengal cat close-up portrait' },
  { src: '/IMG_3536.jpeg', alt: 'Bengal mother cat with kittens' },
  { src: '/IMG_3531.jpeg', alt: 'Two Bengal kittens resting together' },
  { src: '/IMG_3535.jpeg', alt: 'Bengal kittens cuddling on a cushion' },
  { src: '/IMG_3336.jpeg', alt: 'Young Bengal cat on window sill' },
  { src: '/IMG_2213.jpeg', alt: 'Bengal kitten standing on cat tree' },
  { src: '/IMG_3570.jpeg', alt: 'Group of sleeping Bengal kittens' },
  { src: '/IMG_2221.jpeg', alt: 'Two Bengal kittens in a cozy basket' },
];

const bitcoinAddress = 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh';
const reservationAmountBtc = '0.003';
const bitcoinUri = `bitcoin:${bitcoinAddress}?amount=${reservationAmountBtc}&label=Baltic%20Bengals%20Reservation`;

const Index = () => {
  useSeoMeta({
    title: 'Baltic Bengals — Bengal Cattery',
    description:
      'Baltic Bengals is a family Bengal cattery focused on healthy bloodlines, social temperament, and beautiful rosetted coats. View our kittens and reserve with Bitcoin.',
  });

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(bitcoinAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-800">
              <PawPrint className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Cattery</p>
              <h1 className="text-lg font-semibold tracking-wide">Baltic Bengals</h1>
            </div>
          </div>
          <a href="#contact" className="text-sm font-medium text-stone-700 hover:text-stone-900">
            Contact
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:py-20">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.22em] text-amber-700">Bengal kittens in the Baltics</p>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Elegant bloodlines. Loving personalities.</h2>
            <p className="max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
              We are a boutique Bengal cattery raising healthy, social, and striking kittens in a home environment.
              Every kitten receives veterinary care, age-appropriate vaccinations, and daily handling from day one.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#gallery">
                <Button className="rounded-full bg-stone-900 px-6 hover:bg-stone-700">View Kittens</Button>
              </a>
              <a href="#reserve">
                <Button variant="outline" className="rounded-full px-6">Reserve with Bitcoin</Button>
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
            <img src="/IMG_3536.jpeg" alt="Bengal mother with kittens" className="h-full w-full object-cover" />
          </div>
        </section>

        <section id="about" className="border-y border-stone-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-5 px-4 py-12 sm:px-6 md:grid-cols-3">
            {[
              ['Health-First', 'Routine vet checks, vaccination schedule, and transparent records for each kitten.'],
              ['Home Raised', 'Kittens are socialized with people and household sounds for confident adaptation.'],
              ['Lifetime Support', 'We stay available for nutrition, transition, and behavioral guidance.'],
            ].map(([title, description]) => (
              <Card key={title} className="border-stone-200 shadow-none">
                <CardContent className="space-y-2 p-5">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-stone-600">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-8 flex items-end justify-between gap-3">
            <h3 className="text-2xl font-semibold sm:text-3xl">Our Bengals</h3>
            <p className="text-sm text-stone-500">Recent litters & adult cats</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image) => (
              <div key={image.src} className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
                <img src={image.src} alt={image.alt} className="h-60 w-full object-cover transition duration-300 hover:scale-105" />
              </div>
            ))}
          </div>
        </section>

        <section id="reserve" className="bg-stone-900 py-14 text-stone-100">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-300">Reserve a kitten</p>
              <h3 className="text-3xl font-semibold">Bitcoin reservation available</h3>
              <p className="max-w-xl text-stone-300">
                To reserve a kitten, send the reservation amount and include your name in your inquiry. We will confirm
                receipt and schedule a video call to choose your kitten.
              </p>
              <div className="rounded-2xl border border-stone-700 bg-stone-800 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-stone-400">Suggested reservation amount</p>
                <p className="mt-1 text-2xl font-semibold">{reservationAmountBtc} BTC</p>
              </div>
            </div>

            <Card className="border-stone-700 bg-stone-800 text-stone-100">
              <CardContent className="space-y-4 p-6">
                <div className="flex items-center gap-2 text-amber-300">
                  <Bitcoin className="h-5 w-5" />
                  <p className="font-medium">Bitcoin Address</p>
                </div>
                <p className="break-all rounded-lg border border-stone-700 bg-stone-900 p-3 text-sm">{bitcoinAddress}</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant="secondary" onClick={handleCopy} className="gap-2">
                    <Copy className="h-4 w-4" />
                    {copied ? 'Copied' : 'Copy address'}
                  </Button>
                  <a href={bitcoinUri}>
                    <Button className="gap-2 bg-amber-500 text-stone-900 hover:bg-amber-400">
                      <ExternalLink className="h-4 w-4" />
                      Open wallet
                    </Button>
                  </a>
                </div>
                <p className="text-xs text-stone-400">Please contact us after sending so we can confirm your reservation.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-stone-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 text-sm text-stone-700 sm:px-6 md:grid-cols-2">
          <div>
            <h4 className="mb-3 text-base font-semibold text-stone-900">Contact Baltic Bengals</h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Riga, Latvia</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +371 20 123 456</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@balticbengals.com</p>
              <p className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Instagram: @baltic_bengals</p>
            </div>
          </div>
          <div className="space-y-3 text-stone-600">
            <p>
              Visits are by appointment only. We prioritize the comfort of our cats and welcome serious families looking
              for a lifelong companion.
            </p>
            <p>© {new Date().getFullYear()} Baltic Bengals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
