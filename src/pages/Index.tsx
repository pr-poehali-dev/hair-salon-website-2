import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

function Index() {
  const [selectedService, setSelectedService] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const services = [
    {
      id: 'mens-haircut',
      title: 'Мужские стрижки',
      description: 'Классические и современные стрижки',
      price: 'от 1 500 ₽',
      icon: 'Scissors'
    },
    {
      id: 'womens-haircut',
      title: 'Женские стрижки',
      description: 'Стильные стрижки любой сложности',
      price: 'от 2 500 ₽',
      icon: 'Sparkles'
    },
    {
      id: 'kids-haircut',
      title: 'Детские стрижки',
      description: 'Аккуратные стрижки для малышей',
      price: 'от 800 ₽',
      icon: 'Heart'
    },
    {
      id: 'coloring',
      title: 'Окрашивание',
      description: 'Все виды окрашивания волос',
      price: 'от 3 000 ₽',
      icon: 'Palette'
    },
    {
      id: 'styling',
      title: 'Укладки',
      description: 'Праздничные и повседневные',
      price: 'от 1 200 ₽',
      icon: 'Wand2'
    },
    {
      id: 'beard',
      title: 'Бритье и борода',
      description: 'Моделирование бороды и усов',
      price: 'от 800 ₽',
      icon: 'User'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Привожу сюда всю семью! Муж стрижется, я делаю окрашивание, дети тоже любят сюда ходить!'
    },
    {
      name: 'Александр Михайлов',
      rating: 5,
      text: 'Отличные мастера! Мужская стрижка и борода на высшем уровне. Рекомендую!'
    },
    {
      name: 'Мария с Машей',
      rating: 5,
      text: 'Приходим с 5-летней дочкой. Мастера умеют найти подход к детям. Очень довольны!'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в течение часа для подтверждения записи.');
    setFormData({
      name: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Scissors" className="text-primary" size={24} />
              <span className="text-xl font-bold text-gradient">КОЛИБРИ</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('prices')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Цены
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Отзывы
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Запись
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => scrollToSection('booking')} 
                className="hidden sm:flex gradient-gold text-white"
              >
                Записаться
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-muted transition-colors"
                aria-label="Открыть меню"
              >
                {isMobileMenuOpen ? (
                  <Icon name="X" size={20} />
                ) : (
                  <Icon name="Menu" size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm border-b border-border animate-fade-in">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 border-b border-border/30"
                >
                  Главная
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 border-b border-border/30"
                >
                  Услуги
                </button>
                <button 
                  onClick={() => scrollToSection('prices')}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 border-b border-border/30"
                >
                  Цены
                </button>
                <button 
                  onClick={() => scrollToSection('reviews')}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 border-b border-border/30"
                >
                  Отзывы
                </button>
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 border-b border-border/30"
                >
                  Запись
                </button>
                <button 
                  onClick={() => scrollToSection('contacts')}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 border-b border-border/30"
                >
                  Контакты
                </button>
                <Button 
                  onClick={() => scrollToSection('booking')} 
                  className="gradient-gold text-white w-full mt-4"
                >
                  Записаться на прием
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Стиль для
                <span className="text-gradient block">каждого</span>
                в семье
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Универсальная парикмахерская для всей семьи. Мужские, женские и детские стрижки, 
                окрашивание, укладки и уход за бородой от опытных мастеров.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="gradient-gold text-white hover-scale"
                  onClick={() => scrollToSection('booking')}
                >
                  Записаться на прием
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('services')}
                >
                  Посмотреть услуги
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/1fe37e0e-c999-4f30-b66a-1041e6d02a54.jpg"
                  alt="Профессиональный салон красоты"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center">
                    <Icon name="Star" className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">1000+ довольных клиентов</p>
                    <p className="text-sm text-muted-foreground">Рейтинг 4.9/5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр парикмахерских услуг для мужчин, женщин и детей любого возраста
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="hover-scale cursor-pointer transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="text-lg py-2 px-4">
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Прайс-лист</h2>
            <p className="text-lg text-muted-foreground">
              Честные цены на качественные услуги
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary">Мужские стрижки</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Классическая стрижка</span>
                          <span className="font-medium">от 1 500 ₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Модельная стрижка</span>
                          <span className="font-medium">от 2 000 ₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Машинка</span>
                          <span className="font-medium">1 000 ₽</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary">Женские стрижки</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Женская стрижка</span>
                          <span className="font-medium">от 2 500 ₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Стрижка + укладка</span>
                          <span className="font-medium">от 3 200 ₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Челка</span>
                          <span className="font-medium">800 ₽</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary">Детские стрижки</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Детская стрижка (до 12 лет)</span>
                          <span className="font-medium">800 ₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Подростковая (12-16 лет)</span>
                          <span className="font-medium">1 200 ₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Первая стрижка</span>
                          <span className="font-medium">600 ₽</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-primary">Дополнительно</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Бритье бороды</span>
                          <span className="font-medium">800 ₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Окрашивание волос</span>
                          <span className="font-medium">от 3 000 ₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Укладка</span>
                          <span className="font-medium">от 1 200 ₽</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card 
                key={index} 
                className="animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Записаться на прием</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку, и мы свяжемся с вами для подтверждения записи
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <img 
                  src="/img/d4934908-5c63-47df-abf5-041c29623fbf.jpg"
                  alt="Результат работы мастера"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle>Форма записи</CardTitle>
                  <CardDescription>
                    Заполните форму, и мы подберем удобное время для вас
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBooking} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Ваше имя"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Телефон"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <select 
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        required
                      >
                        <option value="">Выберите услугу</option>
                        {services.map(service => (
                          <option key={service.id} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          type="time"
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Textarea
                        placeholder="Дополнительные пожелания (необязательно)"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="w-full gradient-gold text-white hover-scale">
                      Отправить заявку
                      <Icon name="Send" className="ml-2" size={16} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">
              Мы находимся в самом центре города
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Адрес</h3>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Тверская, д. 15<br />
                    ТЦ "Галерея", 3 этаж
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Режим работы</h3>
                  <p className="text-muted-foreground">
                    Пн-Вс: 10:00 - 21:00<br />
                    Без выходных
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">info@beautystudio.ru</p>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <Icon name="Map" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Карта</h3>
                <p className="text-muted-foreground">
                  Интерактивная карта будет добавлена
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Scissors" className="text-primary" size={24} />
              <span className="text-xl font-bold">КОЛИБРИ</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                +7 (495) 123-45-67
              </a>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 КОЛИБРИ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;