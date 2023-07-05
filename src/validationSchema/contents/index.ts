import * as yup from 'yup';

export const contentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  studio_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
