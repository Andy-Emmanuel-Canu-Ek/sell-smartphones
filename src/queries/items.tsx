import ItemsService from 'api/Items';
import { useQuery } from 'react-query';

export const useItem = (id: string) => {
  return useQuery(['item', id], async () => {
    return id ? await ItemsService.findOne(id) : null;
  });
};

export const useItems = (querySearch: string) => {
  console.log(querySearch);
  const emptyResponse = { results: [], filters: [] };
  return useQuery(['items', querySearch], async () => {
    return querySearch ? await ItemsService.findAll({ q: `celular ${querySearch}` }) : emptyResponse;
  });
};
