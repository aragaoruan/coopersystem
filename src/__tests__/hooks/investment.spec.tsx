import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import { useInvestment, InvestmentProvider } from '~/hooks/investment';
import api from '~/services/api';

// import { responseApi, acoes } from '~/__tests__/mocksApi';

const apiMock = new MockAdapter(api);

describe('Investment hook', () => {
  it('should be able to setActions', async () => {
    const apiResponse = {
      response: {
        status: '200',
        data: {
          listaInvestimentos: [
            {
              nome: 'INVESTIMENTO I',
              objetivo: 'Minha aposentadoria',
              saldoTotalDisponivel: 39321.29,
              indicadorCarencia: 'N',
              acoes: [
                {
                  id: '1',
                  nome: 'BBAS3',
                  percentual: 28.1,
                },
              ],
            },
          ],
        },
      },
    };
    apiMock.onGet('5e76797e2f0000f057986099').replyOnce(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useInvestment(), {
      wrapper: InvestmentProvider,
    });

    act(() =>
      result.current.setActions([
        {
          id: 1,
          nome: 'nome',
          percentual: 10,
        },
      ]),
    );

    await waitForNextUpdate();

    expect(result.current.investmentActions).toEqual([
      {
        id: 1,
        nome: 'nome',
        percentual: 10,
        newValue: 0,
      },
    ]);
  });

  it('should be able to updateActions', async () => {
    const apiResponse = {
      response: {
        status: '200',
        data: {
          listaInvestimentos: [
            {
              nome: 'INVESTIMENTO I',
              objetivo: 'Minha aposentadoria',
              saldoTotalDisponivel: 39321.29,
              indicadorCarencia: 'N',
              acoes: [
                {
                  id: '1',
                  nome: 'BBAS3',
                  percentual: 28.1,
                },
              ],
            },
          ],
        },
      },
    };
    apiMock.onGet('5e76797e2f0000f057986099').replyOnce(200, apiResponse);

    const { result, waitForNextUpdate } = renderHook(() => useInvestment(), {
      wrapper: InvestmentProvider,
    });

    act(() =>
      result.current.setActions([
        {
          id: 1,
          nome: 'nome',
          percentual: 10,
        },
      ]),
    );

    act(() =>
      result.current.updateActions({
        id: 1,
        nome: 'nome',
        percentual: 10,
        newValue: 40,
      }),
    );

    await waitForNextUpdate();

    expect(result.current.investmentActions).toEqual([
      {
        id: 1,
        nome: 'nome',
        percentual: 10,
        newValue: 40,
      },
    ]);
  });
});
