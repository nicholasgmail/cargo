import { defineStore } from 'pinia'

export const useVehiclesStore = defineStore('vehicles', {
    state: () => ({
        vehicles: [
            {
                name: 'Vozidlo 20m3 (Iveco Daily 35s12)',
                specs: {
                    'Celková nosnost': '3,5t',
                    'Nosnost (nákladu max)': '750 kg',
                    'Hydraulické čelo': 'NE',
                    'Délka – Výška – Šířka': '420 x 230 x 220 cm',
                    'Počet míst': 'řidič + 2'
                }
            }
        ]
    }),
})
