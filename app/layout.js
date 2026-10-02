export const metadata = {
  title: "Pálmi Þór K.",
  description: "Official website of Pálmi Þór K.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="is">
      <body>{children}</body>
    </html>
  );
}
