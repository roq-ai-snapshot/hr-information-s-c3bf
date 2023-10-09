import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  position: yup.string().required(),
  hire_date: yup.date().required(),
  termination_date: yup.date().nullable(),
  salary: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
