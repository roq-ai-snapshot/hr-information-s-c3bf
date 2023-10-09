interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['QA'],
  customerRoles: ['Admin'],
  tenantRoles: ['Business Owner', 'HR Manager', 'Payroll Administrator', 'Employee', 'Accountant', 'QA'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage users',
    'Manage companies',
    'Manage employees',
    'Manage vacations',
    'Manage payrolls',
    'Manage HR information',
  ],
  ownerAbilities: ['Manage user data', 'Manage company data', 'Manage employee data', 'Manage payroll data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/42c5c615-9000-46c8-b378-b2b6f99cf30e',
};
