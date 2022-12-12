import ConfigProvider from './components/ConfigProvider';
import Footer from './components/Footer';
import './globals.css';
  // <html>bg-[#fef08a]
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html>
      <ConfigProvider>
      <body className='relative h-screen bg-[#fef08a]'>
        <main className='overflow-hidden'>{children}</main>
        <footer className='flex justify-center'>
          <Footer />
      </footer>
      </body>
      </ConfigProvider>
    </html>
  )
}
