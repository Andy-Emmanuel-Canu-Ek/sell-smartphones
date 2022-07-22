import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

const schemaValidation = () =>
  yup.object().shape({
    password: yup.string().required(),
    email: yup.string().email().required(),
  });

const LoginTemplate = (): ReactElement => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    router.replace('/products');
  };

  return (
    <div className="row login-container">
      <div className="col-md-5 login-form-1">
        {(errors?.password || errors?.email) && (
          <div className="alert alert-danger" role="alert">
            {errors?.email?.message || errors?.password?.message}
          </div>
        )}
        <h3>Ingreso</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Correo" name="email" {...register('email')} />
          </div>
          <br />
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              name="password"
              {...register('password')}
            />
          </div>
          <br />
          <div className="form-group">
            <input type="submit" className="btnSubmit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginTemplate;
