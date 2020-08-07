import { writable } from 'svelte/store';

export const registro = writable({
    id : '',
    nombre : '',
    usuario : '',
    clave : ''
});