import React, { useEffect } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import css from './AuthForm.module.css';
import Primarybutton from '../../Buttons/PrimaryButton';
import isEmail from 'validator/lib/isEmail';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import CustomInput from '../../CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../redux/store';
import Loader from '../../Loader';
import authAction from '../../../redux/actionCompinate/authAction';
import { meReqDefault } from '../../../redux/actions/meActions/meReqDefault';

const AuthForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ mode: 'onSubmit' });

	const validatorEmail = () => register('email', { validate: { mailValidate: (v) => isEmail(v) } });

	const validatorPassword = () =>
		register('password', {
			required: 'Вы не ввели пароль!',
			minLength: { value: 5, message: 'Минимальная длинна пароля 5 символов!' },
			validate: {
				isPassword: (v) => isAlphanumeric(v),
			},
		});
	const dispatch = useDispatch();
    useEffect(() => {
		dispatch(meReqDefault());
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const loading = useSelector<IRootState, boolean>((state) => state.me.loading);
	const errorAuth = useSelector<IRootState, false | Error>((state) => state.me.errorAuth);

	const onSubmitAction = async (data: FieldValues) => {
		await authAction(data.email, data.password, dispatch);
		reset();
	};

	return (
		<form className={css.form} onSubmit={handleSubmit(onSubmitAction)}>
			{errorAuth && <div className={css.error}>{errorAuth.message || 'Не удалось авторизироваться!'}</div>}
			{loading && <Loader />}
			<span className={css.title}>Ваш email</span>
			<label className={css.inputlabel}>
				<CustomInput placeholder={'Введите ваш email'} validator={validatorEmail} />
				{errors?.email && errors?.email.type === 'mailValidate' && (
					<div className={css.error}>Введите правильный email!</div>
				)}
			</label>
			<span className={css.title}>Ваш пароль</span>
			<label className={css.inputlabellast}>
				<CustomInput placeholder={'Введите ваш пароль'} validator={validatorPassword} hideText={true}/>
				{errors?.password && errors?.password.type === 'required' && (
					<div className={css.error}>Вы не ввели пароль!</div>
				)}
				{errors?.password && errors?.password.type === 'minLength' && (
					<div className={css.error}>Минимальная длина пароля 5 символов!</div>
				)}
				{errors?.password && errors?.password.type === 'isPassword' && (
					<div className={css.error}>Пароль может содержать только цифры и символы латинского алфавита!</div>
				)}
			</label>
			<Primarybutton As={'button'} text="Войти" />
		</form>
	);
};

export default AuthForm;
