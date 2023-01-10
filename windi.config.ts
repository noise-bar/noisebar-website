import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        peach: '#EF6455', // 70%, 80%
        coral: '#F7403A',
        // '#FFCA04', // lombrello yellow
        cyber: '#FFD203',
        gold: '#E0BA4F', // GOLD added from PM
        navy: '#1D1655',
        lavender: '#56517E', // 44%
        slateblue: '#6863D4',
        teal: '#557B97',
        cyan: '#C9E9E5',

        'mt-coal': '#323437', // monkeytype color
        'mt-navy': '#2c2e31', // monkeytype color
        'mt-grey': '#808080', // monkeytype color
        'mt-yellow': '#e2b714', // monkeytype color
        'mt-peach': '#ca4754', // monkeytype color',
      },
    },
  },
})
