import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import css from './CustomInput.module.css';
import Close from '../Icons/Close';
import Open from '../Icons/Open';

interface ICustomInput {
	placeholder: string;
	hideText?: boolean;
	validator: () => UseFormRegisterReturn<string>;
	error?: boolean;
}

const CustomInput = ({ hideText, placeholder, validator, error }: ICustomInput) => {
	const [hide, setHide] = useState<boolean>(!!hideText);
	const inputClass = error ? `${css.input} ${css.inputError}` : css.input;
	return (
		<div className={css.wrapper}>
			<input className={inputClass} type={hide ? 'password' : 'text'} placeholder={placeholder} {...validator()} />
			{hideText && <div onClick={()=>setHide(!hide)} className={css.buttonHide}>{hide ? <Close /> : <Open />}</div>}
		</div>
	);
};

export default CustomInput;
