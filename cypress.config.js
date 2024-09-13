const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    experimentalRunAllSpecs: true,  // habilita a execução de todos os testes de uma vez só, aparece o botão Run Spec no modo interativo
  },
  fixturesFolder: false,
  video: false,
})