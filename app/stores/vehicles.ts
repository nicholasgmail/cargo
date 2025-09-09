import { defineStore } from 'pinia'

export const useVehiclesStore = defineStore('vehicles', {
    state: () => ({
        vehicles: [
            {
                name: 'Vehicle 20m3 (Iveco Daily 35s12)',
                specs: {
                    'Total load capacity': '3,5t',
                    'Load capacity (max. load)': '750 kg',
                    'Hydraulic front': 'NE',
                    'Length – Height – Width': '420 x 230 x 220 cm',
                    'Number of seats': 'driver + 2'
                }
            }
        ]
    }),
})
