import axios from 'axios';
import { FindAllParams, SuggestParams } from 'shared/types/items';
import BaseService from '../BaseServices';
import { Item, Suggest, ResponseSuggests, ResponseItems, ResponseDescriptionItem } from 'api/Items/declaration';

export class ItemsService extends BaseService {
  protected items: string = 'items';
  protected path: string = 'sites/MLA';

  async findAll(params: FindAllParams): Promise<ResponseItems> {
    const search: string = 'search';
    try {
      const response = await axios.get<ResponseItems>(`${this.url}/${this.path}/${search}`, { params });
      const { data: axiosData } = response;
      return axiosData as ResponseItems;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async findOne(id: string): Promise<Item> {
    try {
      const response = await axios.get<ResponseItems>(`${this.url}/${this.items}/${id}`);
      const { data: axiosData } = response;
      return axiosData as Item;
    } catch (error) {
      throw this.handleError(error);
    }
  }
}

const service = new ItemsService();
export default service;
