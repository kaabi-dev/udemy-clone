import React, { useContext } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import FormControls from '../../../common-form/form-controls';
import { courseLandingPageFormControls } from '../../../../config';
import { InstructorContext } from '../../../../context/instructor-context';

function CourseLandingPage() {
  const { courseLandingFormData, setCourseLandingFormData } =
    useContext(InstructorContext);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Landing Pages</CardTitle>
      </CardHeader>

      <CardContent>
        <FormControls
          formControls={courseLandingPageFormControls}
          formData={courseLandingFormData}
          setFormData={setCourseLandingFormData}
        />
      </CardContent>
    </Card>
  );
}

export default CourseLandingPage;
