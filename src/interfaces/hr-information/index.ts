import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface HrInformationInterface {
  id?: string;
  employee_id: string;
  information: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface HrInformationGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
  information?: string;
}
