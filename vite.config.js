// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [tailwindcss(), react()],
//   build:{
//     outDir: "dist",
//     assetsDir: "assets",
//     sourcemap: false,
//     minify: "terser",
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           vendor: ["react", "react-dom"],
//           icons: ["lucide-react"]
//         }
//       }
//     }
//   },
//   preview: {
//     port: 3000,
//     open: true
//   }

// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          icons: ["lucide-react"],
        },
      },
    },
  },
  preview: {
    port: 3000,
    open: true,
  },
});
