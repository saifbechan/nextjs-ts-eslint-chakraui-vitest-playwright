import { expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Home from '../pages';

test('home', () => {
  render(<Home />);
  const main = within(screen.getByRole('main'));
  expect(
    main.getByRole('heading', { level: 1, name: /Welcome to the Home page/i })
  ).toBeDefined();

  const footer = within(screen.getByRole('contentinfo'));
  const link = within(footer.getByRole('link'));
  expect(link.getByRole('img', { name: /vercel logo/i })).toBeDefined();
});
