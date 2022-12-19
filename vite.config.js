import { defineConfig, loadEnv } from "vite";
import autoprefixer from "autoprefixer";

const domain = "localhost";
const homedir = require("os").homedir();

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [autoprefixer],
    css: {
      devSourcemap: true,
    },
    server: {
      open: env.APP_URL,
      // uncomment if you want to use local https certificates
      // https: {
      //  key: homedir + "/.config/valet/Certificates/" + domain + ".key",
      //  cert: homedir + "/.config/valet/Certificates/" + domain + ".crt",
      //},
      host: domain,
      hmr: {
        host: domain,
      },
    },
  };
});
