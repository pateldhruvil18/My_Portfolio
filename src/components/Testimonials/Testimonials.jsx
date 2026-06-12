import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechFlow',
    content: 'Dhruvil transformed our vision into a stunning reality. His attention to detail in UI/UX and robust backend implementation exceeded our expectations.',
    image: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartupX',
    content: 'Working with Dhruvil was a breeze. He delivered clean, maintainable code and the animations he added using Framer Motion gave our app that premium feel.',
    image: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Founder',
    company: 'EduLearn',
    content: 'A truly exceptional developer. He understood our requirements perfectly and delivered the project ahead of schedule with zero bugs.',
    image: 'https://i.pravatar.cc/150?u=emily'
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Design Lead',
    company: 'CreativeSpace',
    content: 'His ability to translate complex Figma designs into pixel-perfect React components is remarkable. Highly recommended!',
    image: 'https://i.pravatar.cc/150?u=david'
  }
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Client <span className="text-[var(--color-primary)]">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
            Don&apos;t just take my word for it. Here&apos;s what people I&apos;ve worked with have to say.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="max-w-md w-full">
                <div className="bg-white border border-gray-100 shadow-sm p-8 rounded-[22px] h-full flex flex-col relative mx-4">
                  <FaQuoteLeft className="text-4xl text-[var(--color-primary)] opacity-10 absolute top-8 right-8" />
                  
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 relative z-10 flex-grow italic">
                    &quot;{testimonial.content}&quot;
                  </p>
                  
                  <div className="flex items-center gap-4 border-t border-gray-100 pt-6 mt-auto">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full border-2 border-[var(--color-primary)] object-cover"
                    />
                    <div>
                      <h4 className="text-black font-bold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role} @ <span className="text-[var(--color-primary)] font-medium">{testimonial.company}</span></p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
