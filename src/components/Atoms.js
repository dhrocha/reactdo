import { atom } from 'jotai'

export const tasksAtom = atom([])
export const currentTaskAtom = atom({})
export const openEditAtom = atom({ type: '', open: false })
