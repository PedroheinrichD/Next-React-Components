import { Person } from "@/types/Person";


// Após criarmos a pasta types para guardar o tipos, estamos dizendo que PeopleList é um array de Person
export const PeopleList: Person[] = [
    {id: 1, name: 'Pedro', profession: 'DEV'},
    {id: 2, name: 'Fulano', profession: 'Chemist'},
    {id: 3, name: 'Cicrano', profession: 'Police'},
    {id: 4, name: 'Beltrano', profession: 'Chemist'},
    {id: 5, name: 'Juliano', profession: 'Mathematician'},
  ]