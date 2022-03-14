import { useMemo, useState } from 'react';
import { ObjectSchema } from 'joi';


const useErrorMessages = <T extends object>(schema: ObjectSchema<T>) => {
  type ErrorMessageType = {
    [key in keyof T]?: string
  };
  const [errorMessages, setErrorMessages] = useState<ErrorMessageType>({});
  const [hasBeenValidated, setHasBeenValidated] = useState(false);

  const validate = (data: T) => {
    setHasBeenValidated(true);

    const { error } = schema.validate(data, { abortEarly: false });

    if (error) {
      setErrorMessages({
        ...error.details.reduce((acc, curr) => {
          return {
            ...acc,
            ...(curr.context?.key && { [curr.context.key]: curr.message }),
          };
        }, {}),
      });

      return false;
    } else {
      setErrorMessages({});
      return true;
    }
  };

  const validateByName = (data: T, name?: string) => {
    setHasBeenValidated(true);
    const { error } = schema.validate(data, { abortEarly: false });

    if (error) {
      setErrorMessages((prev) =>({
        ...prev,
        ...error.details.reduce((acc, curr) => {
          return curr.context?.key === name ? { ...(curr.context?.key && { [curr.context.key]: curr.message }) } : acc;
        }, {}),
      }));

      return false;
    }

    return true;
  };

  const hasErrorMessages = useMemo(() => {
    return Object.values(errorMessages).some(value => value !== '');
  }, [errorMessages]);

  return { errorMessages, setErrorMessages, hasErrorMessages, validate, validateByName, hasBeenValidated };
};

const useForm = <T extends object>(data: T, setData: (data: T) => void, dataSchema: ObjectSchema<T>) => {
  const {
    errorMessages,
    setErrorMessages,
    hasErrorMessages,
    validate,
    validateByName,
    hasBeenValidated,
  } = useErrorMessages<T>(dataSchema);

  const handleChangeData = (name: string, value: string | number) => {
    setData({
      ...data,
      [name]: value,
    });
    setErrorMessages((prev) => {
      return {
        ...prev,
        [name]: '',
      }
    })
  };

  return {
    handleChangeData,
    validate,
    validateByName,
    hasErrorMessages,
    errorMessages,
    hasBeenValidated,
  };
};

export default useForm;
