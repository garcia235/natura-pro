// Categorias
export const categories = [
  {
    id: 1,
    name: "Fragrâncias",
    description: "Aromas cativantes criados a partir da biodiversidade brasileira",
    image: "https://plus.unsplash.com/premium_photo-1678449464118-75786d816fac?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Cuidados com a Pele",
    description: "Fórmulas nutritivas com ativos naturais potentes",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Maquiagem",
    description: "Cosméticos ricos em cor para uma autoexpressão radiante",
    image: "https://images.unsplash.com/photo-1599733594230-6b823276abcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Cuidados Corporais",
    description: "Fórmulas luxuosas que despertam os sentidos",
    image: "https://plus.unsplash.com/premium_photo-1679046947907-9f99734a2ad3?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

// Produtos em Destaque
export const featuredProducts = [
  {
    id: 1,
    name: "Óleo Capilar Ekos Patauá",
    description: "Tratamento nutritivo para cabelos secos e danificados com óleo de patauá da Amazônia",
    price: "29.90",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    reviewCount: 120,
    isNew: false
  },
  {
    id: 2,
    name: "Creme Facial Chronos 70+",
    description: "Fórmula avançada antissinais com extrato concentrado de jambú",
    price: "42.50",
    image: "https://images.unsplash.com/photo-1666028095907-15814bd435cd?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5.0,
    reviewCount: 87,
    isNew: true
  },
  {
    id: 3,
    name: "Perfume Homem Essence",
    description: "Fragrância masculina ousada e sofisticada com notas amadeiradas",
    price: "64.90",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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