/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',  // Ensure to scan files in the src folder
    './app/**/*.{js,ts,jsx,tsx}',  // Ensure to scan files in the app folder
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],  // Adding Inter font family
      },
      fontSize: {
        'heading': '24px',               // Custom font size for headings
        'metric': '20px',                // Custom font size for metrics
        'table-header': '16px',          // Custom font size for table headers
        'filter-label': '14px',          // Custom font size for filter labels
        'status-indicator': '12px',      // Custom font size for status indicators
      },
      colors: {
        'off-white': '#F5F7FA',
        'dark-gray': '#333333',
        'medium-gray': '#666666',
        'deep-blue': '#1A73E8',          // Custom color for deep blue
        'forest-green': '#34C759',
        'error-red': '#FF3B30',
        'slate-blue': '#5A6E8C',
        'amber': '#FF9500',
        'light-blue': '#E8F0FE',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
