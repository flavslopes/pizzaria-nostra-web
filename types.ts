
export interface Pizza {
  id: string;
  name: string;
  description: string;
  oldPrice: number;
  newPrice: number;
  image: string;
}

export interface Testimonial {
  name: string;
  comment: string;
  stars: number;
}

export interface CartItem extends Pizza {
  quantity: number;
}
