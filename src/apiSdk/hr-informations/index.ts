import queryString from 'query-string';
import { HrInformationInterface, HrInformationGetQueryInterface } from 'interfaces/hr-information';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getHrInformations = async (
  query?: HrInformationGetQueryInterface,
): Promise<PaginatedInterface<HrInformationInterface>> => {
  return fetcher('/api/hr-informations', {}, query);
};

export const createHrInformation = async (hrInformation: HrInformationInterface) => {
  return fetcher('/api/hr-informations', { method: 'POST', body: JSON.stringify(hrInformation) });
};

export const updateHrInformationById = async (id: string, hrInformation: HrInformationInterface) => {
  return fetcher(`/api/hr-informations/${id}`, { method: 'PUT', body: JSON.stringify(hrInformation) });
};

export const getHrInformationById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/hr-informations/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteHrInformationById = async (id: string) => {
  return fetcher(`/api/hr-informations/${id}`, { method: 'DELETE' });
};
