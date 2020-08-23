/* eslint-disable @typescript-eslint/ban-types */
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import api from '../services/api';

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
  newValue: number;
}

interface InvestmentContextData {
  investments: ListaInvestimentos[];
  loading: boolean;

  setActions(actions: Omit<Acoes, 'newValue'>[]): void;
  updateActions(action: Acoes): void;

  investmentActions: Acoes[];
  total: number;
}

const InvestmentContext = createContext<InvestmentContextData>(
  {} as InvestmentContextData,
);

export const InvestmentProvider: React.FC = ({ children }) => {
  const [investments, setInvestments] = useState<ListaInvestimentos[]>([]);
  const [investmentActions, setInvestmentActions] = useState<Acoes[]>([]);
  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get<Response>('5e76797e2f0000f057986099').then((response) => {
      setInvestments(response.data.response.data.listaInvestimentos);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    let totalInvest = 0;

    investmentActions.forEach((invest): void => {
      totalInvest += invest.newValue;
    });

    setTotal(totalInvest);
  }, [investmentActions]);

  const setActions = useCallback((actions: Acoes[]) => {
    setInvestmentActions(
      actions.map((action) => {
        return {
          ...action,
          newValue: 0,
        };
      }),
    );
  }, []);

  const updateActions = useCallback(
    (action) => {
      setInvestmentActions(
        investmentActions.map((investment) =>
          investment.id === action.id ? action : investment,
        ),
      );
    },
    [investmentActions],
  );

  return (
    <InvestmentContext.Provider
      value={{
        investments,
        loading,
        setActions,
        updateActions,
        investmentActions,
        total,
      }}
    >
      {children}
    </InvestmentContext.Provider>
  );
};

export function useInvestment(): InvestmentContextData {
  const context = useContext(InvestmentContext);

  if (!context) {
    throw new Error('useInvestment must be used within a InvestmentProvider');
  }

  return context;
}
