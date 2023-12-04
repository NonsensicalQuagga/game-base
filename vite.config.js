import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-SWC'

export default defineConfig({
  plugins: [react()],
  base: '/game-base',
})
