import { ListItems } from "@/types/ListItems";

/*
    dois parametro do reducer obrigatorios 
    ListReducer(lista de itens, ação que eu quero executar)

--qual o objetivo dessa função? 
     Executar alguma ação 
        vamos mandar dentro do action duas informações
        1= qual a ação exata a ser feita EX: adicionar na lista 
        2= carga, ou seja, o dado a ser mandado ou modificado 

   action.type -> type é o tipo  da ação, EX: adicionar 
   action.payload ->  payload é a carga(dado) que vamos mandar, EX: queremos adicionar um texto, mandamos text que ja exite na lista

   precisamos criar tipos diferentes para cada ação ex: (adicionar, remover, modificar )
*/

type AddAction = {
  type: "add";
  payload: {
    text: string;
  };
};

type EditTextAction = {
  type: "editText";
  payload: {
    id: string;
    newText: string;
  };
};

type ToggleDoneAction = {
  type: "togleDone";
  payload: {
    id: string;
    done: boolean;
  };
};

type RemoveAction = {
  type: "RemoveAcion";
  payload: {
    id: string;
  }
};
// depois de tipar as ações separadas, junte elas em uma só, para mandar na função

// minha lista de ações vai ser adiconar OU editarTexto OU trocarDone OU remover
type ListActions = AddAction | EditTextAction | ToggleDoneAction | RemoveAction;
export function ListReducer(List: ListItems[], action: ListActions) {
  
// executando as ações
switch (action.type) {
    case "add":
      return [
        ...List,
        {
          id: crypto.randomUUID(),
          text: action.payload.text,
          done: false,
        },
      ];

    case "editText":
      return List.map((item) => {
        if (item.id === action.payload.id) {
          item.text = action.payload.newText;
        }
        return item
      });

    case "togleDone":
      return List.map((item) => {
        if (item.id === action.payload.id) {
          return {...item, done: !item.done}
        }
        return item
      });

    case "RemoveAcion":
        return List.filter((item) => item.id !== action.payload.id)

    default:
      return List;
  }
}
