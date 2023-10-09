import * as yup from 'yup';

export const hrInformationValidationSchema = yup.object().shape({
  information: yup.string().required(),
  employee_id: yup.string().nullable().required(),
});
