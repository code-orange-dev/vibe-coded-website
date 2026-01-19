import { useSeoMeta } from '@unhead/react';
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Instagram, Facebook, Heart, Award, Sparkles, PawPrint, Users } from 'lucide-react';

const Index = () => {
  useSeoMeta({
    title: 'Baltic Bengals - Premium Bengal Cat Cattery',
    description: 'Welcome to Baltic Bengals - your trusted source for beautiful, healthy, and well-socialized Bengal kittens. Located in the Baltic region, we specialize in breeding exceptional Bengal cats with stunning coats and loving personalities.',
  });

  const kittenImages = [
    '/IMG_3570.jpeg', // Amber
    '/IMG_3536.jpeg', // Leo
    '/IMG_3531.jpeg', // Zara
    '/IMG_3535.jpeg', // Max
    '/IMG_3533.jpeg', // Luna
    '/IMG_3529.jpeg', // Simba
  ];

  const socialLinks = {
    instagram: 'https://www.instagram.com/baltic_bengals',
    facebook: 'https://www.facebook.com/balticbengals/',
    messenger: 'https://www.facebook.com/balticbengals/',
  };

  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'kittens', 'breed', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <PawPrint className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                Baltic Bengals
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Kittens', 'Our Bengals', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                  className={`text-sm font-medium transition-colors hover:text-amber-600 dark:hover:text-amber-400 ${
                    activeSection === item.toLowerCase().replace(' ', '') ? 'text-amber-600 dark:text-amber-400' : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/IMG_3341.jpeg"
            alt="Beautiful Bengal cat"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-orange-900/60 to-amber-900/80" />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 z-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse z-20" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse z-20" style={{ animationDelay: '1s' }} />

        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-2xl">
              <PawPrint className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-amber-100 dark:text-amber-100 animate-fade-in-up">
              Baltic Bengals
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 dark:text-amber-100 mb-8 max-w-3xl mx-auto animate-fade-in-up font-semibold" style={{ animationDelay: '0.2s' }}>
              Premium Bengal Cat Cattery
            </p>
            <p className="text-lg text-amber-100 dark:text-amber-100 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Breeding exceptional Bengal kittens with stunning coats, loving personalities, and championship bloodlines in the Baltic region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button
                size="lg"
                onClick={() => scrollToSection('kittens')}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Heart className="w-5 h-5 mr-2" />
                View Our Kittens
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="px-8 py-6 text-lg font-semibold border-2 border-amber-100 text-amber-100 hover:bg-amber-100/20 dark:border-amber-100 dark:text-amber-100 dark:hover:bg-amber-100/20 transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {[
              { icon: Award, label: 'Years Experience', value: '6+' },
              { icon: Users, label: 'Happy Families', value: '200+' },
              { icon: PawPrint, label: 'Bengals Bred', value: '100+' },
              { icon: Sparkles, label: 'Championship Lines', value: 'Premium' },
            ].map((stat, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-amber-200 dark:border-amber-700/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-10 h-10 mx-auto mb-3 text-amber-600 dark:text-amber-400" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-600 dark:border-amber-400 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-amber-600 dark:bg-amber-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
              About Our Cattery
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A passion for excellence, a love for Bengals, and a commitment to raising the healthiest, most beautiful kittens
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-white dark:bg-gray-800 border-amber-200 dark:border-amber-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                    <Award className="w-6 h-6 mr-2 text-amber-600 dark:text-amber-400" />
                    Our Mission
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    At Baltic Bengals, we believe every kitten deserves a loving home and the best possible start in life. Our mission is to breed healthy, well-socialized Bengal cats that bring joy and companionship to families worldwide.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-amber-200 dark:border-amber-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                    <Heart className="w-6 h-6 mr-2 text-amber-600 dark:text-amber-400" />
                    Our Promise
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We raise our kittens in a loving home environment, with constant socialization and premium care. Each kitten is health-checked, vaccinated, and comes with a genetic health guarantee and lifetime support.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800 border-amber-200 dark:border-amber-700/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                    <PawPrint className="w-6 h-6 mr-2 text-amber-600 dark:text-amber-400" />
                    Our Standards
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We adhere to the highest breeding standards, ensuring proper genetic testing, excellent nutrition, and comprehensive veterinary care for all our cats and kittens. Our breeding program focuses on health, temperament, and conformation.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              {/* Image Gallery */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="space-y-4">
                  <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="/IMG_3250.jpeg"
                      alt="Beautiful Bengal cat"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="/IMG_3222.jpeg"
                      alt="Bengal kitten playing"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="/IMG_3336.jpeg"
                      alt="Adult Bengal cat"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src="/IMG_2213.jpeg"
                      alt="Bengal cat close-up"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-gray-700 dark:to-gray-800 border-amber-300 dark:border-amber-600 shadow-2xl">
                <CardContent className="p-12">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Premium Bloodlines</h4>
                        <p className="text-gray-700 dark:text-gray-300">Our breeding cats come from championship lines with excellent pedigrees and exceptional traits.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Health Guarantee</h4>
                        <p className="text-gray-700 dark:text-gray-300">All kittens come with comprehensive health testing, vaccinations, and a genetic health guarantee.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Socialization</h4>
                        <p className="text-gray-700 dark:text-gray-300">Kittens are raised in our home with constant human interaction, ensuring loving, confident personalities.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Lifetime Support</h4>
                        <p className="text-gray-700 dark:text-gray-300">We provide ongoing guidance and support throughout your Bengal's entire life.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Kittens Section */}
      <section id="kittens" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
              Our Available Kittens
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Meet our beautiful Bengal kittens, each one unique and ready to become your lifelong companion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Amber', color: 'Golden', pattern: 'Rosetted', age: '12 weeks', gender: 'Female', traits: ['Playful', 'Affectionate', 'Vocal'] },
              { name: 'Leo', color: 'Brown', pattern: 'Marbled', age: '10 weeks', gender: 'Male', traits: ['Curious', 'Energetic', 'Intelligent'] },
              { name: 'Zara', color: 'Snow', pattern: 'Rosetted', age: '14 weeks', gender: 'Female', traits: ['Gentle', 'Loving', 'Calm'] },
              { name: 'Max', color: 'Golden', pattern: 'Rosetted', age: '8 weeks', gender: 'Male', traits: ['Adventurous', 'Friendly', 'Trainable'] },
              { name: 'Luna', color: 'Silver', pattern: 'Rosetted', age: '11 weeks', gender: 'Female', traits: ['Sweet', 'Playful', 'Agile'] },
              { name: 'Simba', color: 'Brown', pattern: 'Rosetted', age: '13 weeks', gender: 'Male', traits: ['Confident', 'Loyal', 'Social'] },
            ].map((kitten, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-amber-200 dark:border-amber-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <CardContent className="p-6">
                  <div className="relative mb-4 h-48 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={kittenImages[index]}
                      alt={`${kitten.name} - ${kitten.color} Bengal kitten with ${kitten.pattern} pattern`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Available
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{kitten.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Color:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{kitten.color}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Pattern:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{kitten.pattern}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Age:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{kitten.age}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">Gender:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{kitten.gender}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {kitten.traits.map((trait, idx) => (
                      <span key={idx} className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-medium px-2 py-1 rounded-full">
                        {trait}
                      </span>
                    ))}
                  </div>
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Inquire About {kitten.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-white dark:bg-gray-800 border-amber-200 dark:border-amber-700/50 shadow-lg max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Interested in a Specific Kitten?</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Call us or message us on Facebook Messenger to learn more about any of our available kittens. We're happy to provide additional photos, videos, and information about each kitten's personality, health, and pedigree.
                </p>
                <a
                  href={socialLinks.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Message on Facebook Messenger
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Bengals Section */}
      <section id="breed" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
              Why Bengal Cats?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover what makes Bengal cats such extraordinary companions
            </p>
          </div>

          {/* Hero Image for Why Bengals Section */}
          <div className="mb-16 relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/IMG_2236.jpeg"
              alt="Stunning Bengal cat showcasing the beauty of the breed"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">The Beauty of Bengals</h3>
                <p className="text-lg opacity-90">Wild looks, gentle hearts - the perfect combination</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Sparkles,
                title: 'Stunning Appearance',
                description: 'Bengal cats are known for their beautiful, wild-looking coats with distinctive rosetted or marbled patterns that resemble their wild ancestors.',
              },
              {
                icon: Heart,
                title: 'Loving Personality',
                description: 'Despite their wild appearance, Bengals are incredibly affectionate and form strong bonds with their human families.',
              },
              {
                icon: Users,
                title: 'Intelligent & Trainable',
                description: 'Bengals are one of the smartest cat breeds. They can learn tricks, walk on leashes, and even play fetch!',
              },
              {
                icon: PawPrint,
                title: 'Active & Playful',
                description: 'These energetic cats love to play, climb, and explore. They make excellent companions for active families.',
              },
              {
                icon: Award,
                title: 'Low Maintenance',
                description: 'Bengals have short, easy-to-care-for coats that require minimal grooming while staying soft and shiny.',
              },
              {
                icon: Sparkles,
                title: 'Unique Personalities',
                description: 'Each Bengal has its own distinct personality, from the adventurous explorer to the cuddly lap cat.',
              },
            ].map((feature, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-amber-200 dark:border-amber-700/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-100 to-orange-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We'd love to hear from you! Whether you're interested in a kitten or just want to learn more about Bengals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-white dark:bg-gray-800 border-amber-200 dark:border-amber-700/50 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Location</div>
                      <div className="font-semibold text-gray-900 dark:text-white">Vilniaus st, 76291 Šiauliai, Lithuania</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Email</div>
                      <div className="font-semibold text-gray-900 dark:text-white">hello@balticbengals.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Phone</div>
                      <div className="font-semibold text-gray-900 dark:text-white">+370 (611) 77 900</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">International</div>
                      <div className="font-semibold text-gray-900 dark:text-white">+447534692067 (WhatsApp, Viber, WeChat)</div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">Follow Us</div>
                    <div className="flex space-x-4">
                      <a
                        href={socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-amber-300 dark:border-amber-600 bg-white dark:bg-gray-800 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors"
                      >
                        <Instagram className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </a>
                      <a
                        href={socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-amber-300 dark:border-amber-600 bg-white dark:bg-gray-800 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors"
                      >
                        <Facebook className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </a>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Registration Numbers</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      <div>WCF No. 23343-2020</div>
                      <div>No. LGAC 330/20</div>
                      <div>VMVT number: LT 77-29-085</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 border-amber-200 dark:border-amber-700/50 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                    <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all">
                      <option>Interested in a Kitten</option>
                      <option>General Inquiry</option>
                      <option>Breeding Questions</option>
                      <option>Visit Request</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all resize-none"
                      placeholder="Tell us about yourself and what you're looking for..."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <PawPrint className="w-8 h-8 text-amber-400" />
                <span className="text-2xl font-bold">Baltic Bengals</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Premium Bengal cat cattery dedicated to breeding healthy, beautiful, and well-socialized Bengal kittens with loving personalities.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-amber-400">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('kittens')} className="text-gray-400 hover:text-white transition-colors">
                    Available Kittens
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('breed')} className="text-gray-400 hover:text-white transition-colors">
                    About Bengals
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-amber-400">Connect With Us</h4>
              <div className="flex space-x-4">
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-600 hover:bg-gray-800 text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-600 hover:bg-gray-800 text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 mb-4">© 2025 Baltic Bengals. All rights reserved.</p>
            <a
              href="https://shakespeare.diy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors"
            >
              <Heart className="w-4 h-4 mr-2" />
              Vibed with Shakespeare
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Index;
