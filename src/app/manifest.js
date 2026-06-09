export default function manifest() {
  return {
    name: '9Router - Quản lý Hạ tầng AI',
    short_name: '9Router',
    description: 'Một endpoint cho tất cả nhà cung cấp AI. Quản lý khóa, theo dõi sử dụng và mở rộng dễ dàng.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icons/icon-192.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
      {
        src: '/icons/icon-512.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
      {
        src: '/icons/icon-512.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  }
}
