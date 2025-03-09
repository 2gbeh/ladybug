import {useState} from 'react';
//
import {sleep} from '@/utils/sleep';
import {PROTOTYPING} from '@/constants/PROTOTYPING';

type FormDataType = {
  emailOrUsername: string;
  password: string;
};

const initialFormData = {
  emailOrUsername: '',
  password: '',
};

const mockFormData = {
  emailOrUsername: '2gbeh',
  password: 'password',
};

const P = PROTOTYPING.auth;

export function useLoginScreen() {
  const [formData, setFormData] = useState<FormDataType>(
    P.formData ? mockFormData : initialFormData,
  );
  const [submitting, setSubmitting] = useState(false);
  // ACTIONS
  const resetFormData = () => setFormData(initialFormData);
  const mutateFormData = (name:) => {
  
  };
  const handleSubmit = async () => {
    setSubmitting(true);
    await sleep();
    setSubmitting(false);
  };

  return {formData, handleSubmit, submitting};
}
