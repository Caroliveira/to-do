import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      manifest: {
        name: 'Lina\'s To Do',
        short_name: 'ToDo',
        description: 'A very simple and practical To Do App.',
        theme_color: '#AD4022',
        icons: [
          {
            src: 'logo-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: "maskable_icon.png",
            sizes: "196x196",
            type: "image/png",
            purpose: "maskable"
          }
        ]
      }

    })
  ],
})
