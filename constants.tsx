import { Pizza, Testimonial } from './types';

export const COLORS = {
  primaryGreen: '#2D5A27',
  heroDark: '#1a3016',
  accentYellow: '#F4B41A',
  brandRed: '#D64045',
  cream: '#FFF8E1'
};

export const CONTACT_INFO = {
  phone: '5511999999999',
  ifood: 'https://www.ifood.com.br/delivery/sao-paulo-sp/pizzaria-nostra',
  linkedin: 'https://www.linkedin.com/in/flavianalopescastelobranco/'
};

export const PIZZAS: Pizza[] = [
  {
    id: '1',
    name: 'Pizza Margherita',
    description: 'A legítima: molho de tomate pelati, mussarela de búfala fresco e manjericão.',
    oldPrice: 75.90,
    newPrice: 63.90,
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    name: 'Pizza Pepperoni',
    description: 'O clássico americano com pepperoni premium levemente picante e mussarela.',
    oldPrice: 85.00,
    newPrice: 69.90,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    name: 'Pizza Napolitana',
    description: 'Inspirada em Nápoles, com bastante tomate, alho, parmesão e orégano.',
    oldPrice: 89.90,
    newPrice: 75.90,
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '4',
    name: 'Pizza Mussarela',
    description: 'Nossa base de três queijos selecionados para a cremosidade perfeita.',
    oldPrice: 55.90,
    newPrice: 43.90,
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '5',
    name: 'Pizza Calabresa',
    description: 'Calabresa artesanal fatiada com cebolas crocantes e azeitonas pretas.',
    oldPrice: 70.00,
    newPrice: 59.90,
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '6',
    name: 'Pizza 4 Queijos',
    description: 'Harmonia entre mussarela, provolone, parmesão e o toque de gorgonzola.',
    oldPrice: 92.00,
    newPrice: 79.90,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { 
    name: 'Mariana Silva', 
    comment: 'A melhor borda recheada que já comi na vida! Massa super leve.',
    stars: 5
  },
  { 
    name: 'Ricardo Oliveira', 
    comment: 'Entrega rápida e a pizza chegou fumegando. A Margherita é impecável.',
    stars: 5
  }
];