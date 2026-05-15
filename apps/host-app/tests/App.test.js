import { render, screen } from '@testing-library/vue';
import App from '../src/App.vue';

test('renders host app', () => {
  render(App);
  const headerElement = screen.getByRole('heading', { name: /Host App/i });
  expect(headerElement).toBeInTheDocument();
});