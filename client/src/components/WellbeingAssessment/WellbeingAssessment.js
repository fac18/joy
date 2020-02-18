// initial assessment

import React from 'react';
import { useForm } from 'react-hook-form';

export default function RegisterClient() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
      console.log(data);
      
    };

  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>1<input name="companionship" type="radio" required value="hardlyEver" ref={register}/></label>
      <label>2<input name="companionship" type="radio" required value="sometimes" ref={register}/></label>
      <label>3<input name="companionship" type="radio" required value="often" ref={register}/></label>
        {/* { errors.companionship && <p>Required field!</p> } */}

      <label>1<input name="leftOut" type="radio" required value="hardlyEver" ref={register}/></label>
      <label>2<input name="leftOut" type="radio" required value="sometimes" ref={register}/></label>
      <label>3<input name="leftOut" type="radio" required value="often" ref={register}/></label>

      <label>1<input name="feelIsolated" type="radio" required value="hardlyEver" ref={register}/></label>
      <label>2<input name="feelIsolated" type="radio" required value="sometimes" ref={register}/></label>
      <label>3<input name="feelIsolated" type="radio" required value="often" ref={register}/></label>
      
      <label>Additional Notes:<textarea name="additionalNotes" ref={register} /></label>
      
      <label>Next Appointment:<input type="datetime-local" placeholder="nextAppointment" name="nextAppointment" ref={register} /></label>

      <input type="submit" />
    </form>
  );
}