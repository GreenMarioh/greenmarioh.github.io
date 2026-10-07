import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes subtle, non-intrusive scroll choreography and entrance animations.
 * Completely respects prefers-reduced-motion.
 */
export const initPortfolioMotion = () => {
  // Check reduced motion preference
  if (typeof window === 'undefined') return () => {};
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return () => {};

  const ctx = gsap.context(() => {
    // 1. Hero entrance stagger
    const heroTl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.7 } });
    heroTl
      .from('.hero-status', { opacity: 0, y: -10, duration: 0.5 })
      .from('.hero-name', { opacity: 0, y: 16, duration: 0.6 }, '-=0.3')
      .from('.hero-title', { opacity: 0, y: 14, duration: 0.6 }, '-=0.4')
      .from('.hero-tagline', { opacity: 0, y: 12, duration: 0.5 }, '-=0.4')
      .from('.hero-summary', { opacity: 0, y: 12, duration: 0.5 }, '-=0.3')
      .from('.metric-pill', { opacity: 0, y: 8, stagger: 0.06, duration: 0.4 }, '-=0.3')
      .from('.hero-actions', { opacity: 0, y: 10, duration: 0.5 }, '-=0.2');

    // 2. Section Headers reveal
    gsap.utils.toArray('.section-header').forEach((header) => {
      gsap.from(header, {
        scrollTrigger: {
          trigger: header,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
      });
    });

    // 3. Featured Work Cards
    gsap.utils.toArray('.featured-card').forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 24,
        duration: 0.65,
        ease: 'power2.out',
      });
    });

    // 4. Competitive Programs Milestones Stagger
    const milestoneNodes = gsap.utils.toArray('.timeline-node');
    if (milestoneNodes.length > 0) {
      gsap.from(milestoneNodes, {
        scrollTrigger: {
          trigger: '.challenges-timeline',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        x: -20,
        stagger: 0.15,
        duration: 0.6,
        ease: 'power2.out',
      });
    }

    // 5. Problem Solving Rating Cards Stagger
    const ratingCards = gsap.utils.toArray('.rating-card');
    if (ratingCards.length > 0) {
      gsap.from(ratingCards, {
        scrollTrigger: {
          trigger: '.ratings-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 18,
        stagger: 0.1,
        duration: 0.55,
        ease: 'power2.out',
      });
    }

    // 6. Technical Capabilities Category Cards Stagger
    const skillCategories = gsap.utils.toArray('.skill-category');
    if (skillCategories.length > 0) {
      gsap.from(skillCategories, {
        scrollTrigger: {
          trigger: '.capabilities-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 16,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  });

  return () => {
    ctx.revert(); // clean up GSAP context and ScrollTriggers on unmount
  };
};
