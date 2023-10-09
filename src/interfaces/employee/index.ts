import { HrInformationInterface } from 'interfaces/hr-information';
import { PayrollInterface } from 'interfaces/payroll';
import { VacationInterface } from 'interfaces/vacation';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  user_id: string;
  company_id: string;
  position: string;
  hire_date: any;
  termination_date?: any;
  salary: number;
  created_at?: any;
  updated_at?: any;
  hr_information?: HrInformationInterface[];
  payroll?: PayrollInterface[];
  vacation?: VacationInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    hr_information?: number;
    payroll?: number;
    vacation?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  company_id?: string;
  position?: string;
}
