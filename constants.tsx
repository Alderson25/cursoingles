
import { Lesson, Testimonial } from './types';

export const LESSONS: Lesson[] = [
  {
    id: 1,
    title: "Aula 1: Inglês do Zero",
    description: "Pronúncia correta e frases essenciais para o dia a dia. Comece do jeito certo.",
    icon: "fa-solid fa-seedling"
  },
  {
    id: 2,
    title: "Aula 2: Entender e Responder",
    description: "Técnicas práticas para compreender o que ouve e responder com naturalidade.",
    icon: "fa-solid fa-comments"
  },
  {
    id: 3,
    title: "Aula 3: Falar sem Medo",
    description: "Estruturas para começar a falar sem travar e sem medo de errar.",
    icon: "fa-solid fa-bolt"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Célia M.",
    role: "Aluna iniciante",
    location: "Maputo",
    text: "Nunca pensei que conseguiria entender inglês. Em poucas aulas já consigo formar frases e me sinto confiante."
  },
  {
    name: "António J.",
    role: "Estudante universitário",
    location: "Beira",
    text: "O método é simples e direto, bem diferente do inglês que aprendemos na escola. Vale muito a pena!"
  }
];
