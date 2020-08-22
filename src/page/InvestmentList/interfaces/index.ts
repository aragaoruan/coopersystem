export interface Response {
  response: ResponseStatus;
}

interface ResponseStatus {
  status: number;
  data: { listaInvestimentos: ListaInvestimentos[] };
}

export interface ListaInvestimentos {
  nome: string;
  objetivo: string;
  saldoTotalDisponivel: number;
  indicadorCarencia: 'N' | 'S';
  acoes: Acoes[];
}

interface Acoes {
  id: number;
  nome: string;
  percentual: number;
}
