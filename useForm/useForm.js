import { useState } from "react"

const useForm = ( initialState = {} ) => {

  const [ values, setValues ] = useState( initialState );

  const reset = () => {
    setValues( initialState );
  }

  const handeInputChange = ({ target }) => {

    setValues({
      ...values,
      [ target.name ]: target.value,
      
    });
  };

  return [ values, handeInputChange, reset ];

};

export default useForm;
