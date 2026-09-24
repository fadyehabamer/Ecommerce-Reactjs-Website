import React from 'react';
import { render, act } from '@testing-library/react';
import { ProductProvider, ProductConsumer } from './Context';
import { storeProducts } from './data';

// Renders the provider and returns a getter for the latest context value.
function setup() {
  let latest;
  render(
    <ProductProvider>
      <ProductConsumer>
        {value => {
          latest = value;
          return null;
        }}
      </ProductConsumer>
    </ProductProvider>
  );
  return () => latest;
}

const [first, second] = storeProducts;

describe('cart logic', () => {
  test('starts with an empty cart and zero totals', () => {
    const ctx = setup();
    expect(ctx().products).toHaveLength(storeProducts.length);
    expect(ctx().cart).toEqual([]);
    expect(ctx().cartSubTotal).toBe(0);
    expect(ctx().cartTax).toBe(0);
    expect(ctx().cartTotal).toBe(0);
  });

  test('addToCart adds one unit and computes subtotal, 10% tax and total', () => {
    const ctx = setup();
    act(() => ctx().addToCart(first.id));

    expect(ctx().cart).toHaveLength(1);
    expect(ctx().cart[0]).toMatchObject({ id: first.id, inCart: true, count: 1, total: first.price });
    expect(ctx().products.find(p => p.id === first.id).inCart).toBe(true);
    expect(ctx().cartSubTotal).toBe(first.price);
    expect(ctx().cartTax).toBeCloseTo(first.price * 0.1, 2);
    expect(ctx().cartTotal).toBeCloseTo(first.price * 1.1, 2);
  });

  test('does not mutate the source product data', () => {
    const ctx = setup();
    act(() => ctx().addToCart(first.id));
    expect(storeProducts[0]).toMatchObject({ inCart: false, count: 0, total: 0 });
  });

  test('increment and decrement update the line total and cart totals', () => {
    const ctx = setup();
    act(() => ctx().addToCart(first.id));
    act(() => ctx().addToCart(second.id));
    act(() => ctx().increment(first.id));
    act(() => ctx().increment(first.id));

    const line = ctx().cart.find(i => i.id === first.id);
    expect(line.count).toBe(3);
    expect(line.total).toBe(first.price * 3);
    const subTotal = first.price * 3 + second.price;
    expect(ctx().cartSubTotal).toBe(subTotal);
    expect(ctx().cartTax).toBeCloseTo(subTotal * 0.1, 2);
    expect(ctx().cartTotal).toBeCloseTo(subTotal * 1.1, 2);

    act(() => ctx().decrement(first.id));
    expect(ctx().cart.find(i => i.id === first.id).count).toBe(2);
    expect(ctx().cartSubTotal).toBe(first.price * 2 + second.price);
  });

  test('decrementing a single unit removes the item from the cart', () => {
    const ctx = setup();
    act(() => ctx().addToCart(first.id));
    act(() => ctx().decrement(first.id));

    expect(ctx().cart).toEqual([]);
    expect(ctx().products.find(p => p.id === first.id)).toMatchObject({ inCart: false, count: 0, total: 0 });
    expect(ctx().cartSubTotal).toBe(0);
    expect(ctx().cartTotal).toBe(0);
  });

  test('removeItem removes only that item and resets the details product', () => {
    const ctx = setup();
    act(() => ctx().addToCart(second.id));
    act(() => ctx().addToCart(first.id));
    expect(ctx().detailProduct).toMatchObject({ id: first.id, inCart: true });

    act(() => ctx().removeItem(first.id));

    expect(ctx().cart.map(i => i.id)).toEqual([second.id]);
    expect(ctx().detailProduct).toMatchObject({ id: first.id, inCart: false });
    expect(ctx().cartSubTotal).toBe(second.price);
  });

  test('clearCart empties the cart, resets products, totals and the details product', () => {
    const ctx = setup();
    act(() => ctx().addToCart(first.id));
    act(() => ctx().addToCart(second.id));
    act(() => ctx().clearCart());

    expect(ctx().cart).toEqual([]);
    expect(ctx().products.every(p => !p.inCart)).toBe(true);
    expect(ctx().detailProduct.inCart).toBe(false);
    expect(ctx().cartSubTotal).toBe(0);
    expect(ctx().cartTax).toBe(0);
    expect(ctx().cartTotal).toBe(0);
  });
});
