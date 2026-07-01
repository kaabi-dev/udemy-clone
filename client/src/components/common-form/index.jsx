import { Button } from '../ui/button';
import FormControls from './FormControls';

function CommonForm({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
  isButtonDisabled = false,
}) {
  return (
    <form onSubmit={handleSubmit}>
      {/* render form controls */}
      <FormControls
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
      />
      <Button
        variant='outline'
        disabled={isButtonDisabled}
        type='submit'
        className='mt-5 w-full'
      >
        {buttonText || 'submit'}
      </Button>
    </form>
  );
}

export default CommonForm;
