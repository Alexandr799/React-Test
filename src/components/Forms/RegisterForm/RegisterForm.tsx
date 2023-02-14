import { FieldValues, useForm } from 'react-hook-form';
import css from './RegisterForm.module.css';
import Primarybutton from '../../Buttons/PrimaryButton';
import isEmail from 'validator/lib/isEmail';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import isAlpha from 'validator/lib/isAlpha';
import CustomInput from '../../CustomInput';
import { useEffect } from 'react';
import { meReqDefault } from '../../../redux/actions/meActions/meReqDefault';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../redux/store';
import Loader from '../../Loader';
import registrateAction from '../../../redux/actionCompinate/registrateAction';

const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm({ mode: 'onSubmit' });
	const validateName = () =>
		register('name', {
			minLength: 2,
			validate: { nameValidate: (v: string) => isAlpha(v) || isAlpha(v, 'ru-RU') },
		});
	const validateEmail = () => register('email', { validate: { mailValidate: (v) => isEmail(v) } });
	const validatePassword = () =>
		register('password', {
			minLength: 5,
			validate: {
				isPassword: (v: string) => isAlphanumeric(v),
			},
		});
	const validateRepeatPassword = () =>
		register('repeatPassword', {
			required: true,
			validate: {
				repeatPassword: (v: string) => watch('password') === v,
			},
		});
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(meReqDefault());
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    const onSubmitAction = async (data: FieldValues) => {
		await registrateAction(data.email, data.password, dispatch);
		reset();
	};
    
	const loading = useSelector<IRootState, boolean>((state) => state.me.loading);
	const errorAuth = useSelector<IRootState, false | Error>((state) => state.me.errorAuth);

	return (
		<form className={css.form} onSubmit={handleSubmit(onSubmitAction)}>
			{errorAuth && <div className={css.error}>{errorAuth.message || 'Не удалось зарегистрироваться!'}</div>}
			{loading && <Loader />}
			<span className={css.title}>Имя</span>
			<label className={css.inputlabel}>
				<CustomInput placeholder={'Введите ваше имя'} validator={validateName} error={!!errors?.name} />
				{errors?.name && errors?.name.type === 'nameValidate' && (
					<div className={css.error}>Имя может содержать только символы кириллицы или латиницы</div>
				)}
				{errors?.name && errors?.name.type === 'minLength' && (
					<div className={css.error}>Минимальная длина имени 2 символа!</div>
				)}
			</label>
			<span className={css.title}>Ваш email</span>
			<label className={css.inputlabel}>
				<CustomInput placeholder={'Введите ваш email'} validator={validateEmail} error={!!errors?.email} />
				{errors?.email && errors?.email.type === 'mailValidate' && (
					<div className={css.error}>Введите правильный email!</div>
				)}
			</label>
			<span className={css.title}>Ваш пароль</span>
			<label className={css.inputlabel}>
				<CustomInput
					placeholder={'Введите ваш пароль'}
					validator={validatePassword}
					error={!!errors?.password}
					hideText={true}
				/>
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
			<span className={css.title}>Повторите пароль</span>
			<label className={css.inputlabellast}>
				<CustomInput
					placeholder={'Повторите пароль'}
					validator={validateRepeatPassword}
					error={!!errors?.repeatPassword}
					hideText={true}
				/>
				{errors?.repeatPassword && errors?.repeatPassword.type === 'required' && (
					<div className={css.error}>Нужно повторить пароль!</div>
				)}
				{errors?.repeatPassword && errors?.repeatPassword.type === 'repeatPassword' && (
					<div className={css.error}>Пароли не совпадают!</div>
				)}
			</label>
			<Primarybutton As={'button'} text="Войти" />
		</form>
	);
};

export default RegisterForm;
