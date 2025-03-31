
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Nakato",
    location: "Kampala",
    quote: "KashMe helped me when I needed emergency medical funds. The process was so quick and the customer service was excellent!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "John Mutesa",
    location: "Entebbe",
    quote: "I was skeptical at first, but KashMe delivered exactly as promised. The loan went straight to my mobile money account within minutes.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Rebecca Achieng",
    location: "Jinja",
    quote: "As a small business owner, KashMe has been invaluable for managing my cash flow. The app is so easy to use and the rates are fair.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-kashme-black mb-4">What Our Customers Say</h2>
          <p className="text-kashme-darkgray max-w-3xl mx-auto">Don't just take our word for it. Here's what some of our satisfied customers have to say about their experience with KashMe.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-kashme-gray p-6 rounded-xl relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full overflow-hidden border-4 border-white">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-8 text-center">
                <div className="flex justify-center mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-kashme-green fill-kashme-green' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="italic text-kashme-darkgray mb-4">"{testimonial.quote}"</p>
                <p className="font-bold text-kashme-black">{testimonial.name}</p>
                <p className="text-sm text-kashme-darkgray">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-kashme-darkgray">Join thousands of satisfied customers across Uganda who trust KashMe for their financial needs.</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
