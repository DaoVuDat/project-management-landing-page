export interface TestimonialCustomer {
  content: string;
  name: string;
  title: string;
}

interface CardProp {
  testimonialCustomer: TestimonialCustomer;
}

export function Card({
  testimonialCustomer: { content, name, title },
}: CardProp) {
  return <div>Card</div>;
}
