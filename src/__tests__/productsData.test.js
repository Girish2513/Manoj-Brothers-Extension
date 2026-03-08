import { describe, it, expect } from 'vitest';
import productsData from '../data/productsData';

describe('productsData', () => {
  it('contains 41 products', () => {
    expect(productsData).toHaveLength(41);
  });

  it('every product has required fields', () => {
    productsData.forEach((product) => {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('category');
      expect(product).toHaveProperty('title');
      expect(product).toHaveProperty('desc');
      expect(product).toHaveProperty('img');
    });
  });

  it('has unique IDs', () => {
    const ids = productsData.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('no images use external URLs', () => {
    productsData.forEach((product) => {
      if (typeof product.img === 'string') {
        // In test env, local imports resolve to path strings — ensure none are http URLs
        expect(product.img).not.toMatch(/^https?:\/\//);
      }
    });
  });

  it('every product has a valid category', () => {
    const validCategories = ['flooring', 'furnishing', 'industrial', 'speciality', 'packaging', 'doormats', 'nets', 'exterior'];
    productsData.forEach((product) => {
      expect(validCategories).toContain(product.category);
    });
  });
});
