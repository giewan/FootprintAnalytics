// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders FootprintAnalytics title', () => {
    render(<App />);
    const titleElement = screen.getByText(/FootprintAnalytics/i);
    expect(titleElement).toBeInTheDocument();
});
