import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Label } from '../../../ui/label';
import { Input } from '../../../ui/input';
import { useContext } from 'react';
import { InstructorContext } from '../../../../context/instructor-context';
import { mediaUploadService } from '../../../../services';

function CourseSettings() {
  const { courseLandingFormData, setCourseLandingFormData } =
    useContext(InstructorContext);

  const handleImageUploadChange = async (event) => {
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      const imageFormData = new FormData();
      imageFormData.append('file', selectedImage);

      try {
        const response = await mediaUploadService(imageFormData);
        if (response.success) {
          setCourseLandingFormData({
            ...courseLandingFormData,
            image: response?.data?.url,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log(courseLandingFormData);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Course Settings</CardTitle>
      </CardHeader>
      <CardContent>
        {courseLandingFormData?.image ? (
          <img src={courseLandingFormData.image} />
        ) : (
          <div className='flex flex-col gap-3'>
            <Label>Upload Course Image</Label>
            <Input
              onChange={handleImageUploadChange}
              type='file'
              accept='image/*'
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default CourseSettings;
