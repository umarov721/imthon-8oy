import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

let useStore = (set) => {
    return {
        tickets: [],
        paidTickets: [],
        setTicket: (ticket) => set((state) => ({ tickets: [...state.tickets, ticket] })),
        deleteTicket: (id) => set((state) => ({ tickets: state.tickets.filter((ticket) => ticket.id !== id) })),
    }
}

useStore = devtools(useStore)
useStore = persist(useStore, { name: 'tickets' })

export default create(useStore)