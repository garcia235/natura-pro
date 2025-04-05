const imagens = import.meta.glob('../assets/*.jpg', { eager: true });

function getImage(nomeArquivo: string) {
  const path = `../assets/${nomeArquivo}`;
  return (imagens[path] as { default: string })?.default;
}

// Categorias
export const categories = [
  {
    id: 1,
    name: "Presentes",
    description: "Presentes especiais para ocasiões especiais",
    image: "https://production.na01.natura.com/on/demandware.static/-/Sites-CBBrazil-Library/default/dw2c6dc9db/ciclo202506Nat/00-home/03-categorias/banner-home-presentes-dia-das-ma%CC%83es-desk-02.jpg",
    link: "anchor-presentes"
  },
  {
    id: 2,
    name: "Perfumaria",
    description: "A perfumaria Natura é um convite para expressar todo amor e agradecer quem sempre esteve ao seu lado",
    image: "https://production.na01.natura.com/on/demandware.static/-/Sites-CBBrazil-Library/default/dw0a21fda3/ciclo202506Nat/00-home/03-categorias/banner-home-perfumaria-aura-desk-01.jpg",
    link: "anchor-perfumaria"
  },
  {
    id: 3,
    name: "Maquiagem",
    description: "Para elevar a autoestima da sua mãe com presentes que valorizam o que ela tem de mais bonito",
    image: "https://production.na01.natura.com/on/demandware.static/-/Sites-CBBrazil-Library/default/dwcfc5536b/ciclo202506Nat/00-home/03-categorias/banner-home-maquiagem-dia-das-maes-desk-02.jpg",
    link: "anchor-maquiagem"
  },
  {
    id: 4,
    name: "Rosto",
    description: "Produtos que cuidam da pele, seja qual for a idade",
    image: "https://production.na01.natura.com/on/demandware.static/-/Sites-CBBrazil-Library/default/dw97cac9fd/ciclo202506Nat/00-home/03-categorias/banner-home-rosto-desk-01.jpg",
    link: "anchor-rosto"
  },
  {
    id: 5,
    name: "Cabelos",
    description: "Natura Tododia: fragrâncias deliciosas e Tecnologia Prebiótica para cuidar dos seus fios",
    image: "https://production.na01.natura.com/on/demandware.static/-/Sites-CBBrazil-Library/default/dw1a47dfd3/ciclo202506Nat/00-home/03-categorias/banner-home-cabelos-tododia-desk-01.jpg",
    link: "anchor-cabelos"
  },
  {
    id: 6,
    name: "Corpo e banho",
    description: "Reconhecer o papel de uma mãe é estimular o autocuidado",
    image: "https://production.na01.natura.com/on/demandware.static/-/Sites-CBBrazil-Library/default/dwc83dc618/ciclo202506Nat/00-home/03-categorias/banner-home-cuidados-diarios-dia%20das%20maes-desk-02.jpg",
    link: "anchor-corpoebanho"
  },
  {
    id: 7,
    name: "Infantil",
    description: "de Mamãe para Bebê a Naturé, tudo para o cuidado dos pequenos",
    image: "https://production.na01.natura.com/on/demandware.static/-/Sites-CBBrazil-Library/default/dwfd0c76ed/ciclo202506Nat/00-home/03-categorias/banner-home-infantil-desk-01.jpg",
    link: "anchor-infantil"
  },
  {
    id: 8,
    name: "Crer Para Ver",
    description: "ao comprar produtos da linha Crer Para Ver, você ajuda a transformar vidas através da educação",
    image: "https://production.na01.natura.com/on/demandware.static/-/Sites-CBBrazil-Library/default/dw2c6dc9db/ciclo202506Nat/00-home/03-categorias/banner-home-crer-para-ver-desk-01.jpg",
    link: "anchor-crerparaver"
  }
];

// Produtos em Destaque
export const featuredProducts = [
  {
    id: 1,
    name: "Óleo em creme ultranutritivo",
    description: "Tratamento nutritivo para pele, auxiliando na redução de estrias",
    price: "29.90",
    image: getImage("oleo-creme.jpg"),
    rating: 4.8,
    reviewCount: 120,
    isNew: false
  },
  {
    id: 2,
    name: "Aura Alba",
    description: "Perfume floral, elegante, moderno e fresco, com notas de jasmim e rosa",
    price: "42.50",
    image: getImage("aura-alba.jpg"),
    rating: 5.0,
    reviewCount: 87,
    isNew: true
  },
  {
    id: 3,
    name: "Perfume Kaiak Classic",
    description: "Fragrância masculina ousada e sofisticada com notas amadeiradas",
    price: "64.90",
    image: getImage("perfume-kaiak.jpg"),
    rating: 4.9,
    reviewCount: 203,
    isNew: false
  }
];

// Ingredientes
export const ingredients = [
  {
    name: "Açaí",
    description: "Rico em antioxidantes que protegem e rejuvenescem a pele",
    image: "https://images.unsplash.com/photo-1541775132-4e3112ab6d57?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Andiroba",
    description: "Propriedades anti-inflamatórias potentes que acalmam e reparam",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTq12mXCboTMUwU_dXWM-6Ek-Ku3oI_soDsD0RchCfpI2NpAAIrvA2pgL3uTad7mDKbfK-j2n5nw00vkR-NC6hH_w"
  },
  {
    name: "Castanha",
    description: "Nutre e hidrata com ácidos graxos essenciais e vitaminas",
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Maracujá",
    description: "Acalma e condiciona com extrato de flor de maracujá naturalmente suave",
    image: "https://plus.unsplash.com/premium_photo-1723294490531-adb186f8e319?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

// Depoimentos
export const testimonials = [
  {
    name: "Maria S.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    comment: "Estou usando o creme facial Chronos há 3 meses, e a diferença na minha pele é notável. As linhas finas diminuíram, e minha pele está mais firme e hidratada.",
    loyaltyYears: 2
  },
  {
    name: "Carlos M.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    comment: "O perfume Homem Essence se tornou minha marca registrada. É sofisticado, duradouro, e sempre recebo elogios quando uso. A Natura entrega uma qualidade excepcional.",
    loyaltyYears: 5
  },
  {
    name: "Ana P.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    comment: "Tenho pele sensível e encontrar produtos certos sempre foi difícil. As loções corporais Tododia da Natura são suaves, cheirosas e deixam minha pele nutrida o dia todo.",
    loyaltyYears: 1
  }
];