import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import CourseCurriculum from '../../components/instructor-view/courses/add-new-course/course-curriculum';
import CourseLandingPage from '../../components/instructor-view/courses/add-new-course/course-landing-page';
import CourseSettings from '../../components/instructor-view/courses/add-new-course/course-settings';

function CreateNewCoursePage() {
  return (
    <div className='container mx-auto p-4'>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-extrabold mb-5'>Create a new course</h1>
        <Button className='text-sm tracking-wider font-bold px-8 py-5'>
          Submit
        </Button>
      </div>

      <Card>
        <CardContent>
          <div className='container mx-auto p-4'>
            <Tabs defaultValue='curriculum' className='space-y-4'>
              {/* Tabs list */}
              <TabsList>
                <TabsTrigger value='curriculum'>Curriculum</TabsTrigger>
                <TabsTrigger value='course-landing-page'>
                  Course Landing Page
                </TabsTrigger>
                <TabsTrigger value='settings'>Settings</TabsTrigger>
              </TabsList>

              {/* Tabs content */}
              <TabsContent value='curriculum'>
                <CourseCurriculum />
              </TabsContent>
              <TabsContent value='course-landing-page'>
                <CourseLandingPage />
              </TabsContent>
              <TabsContent value='settings'>
                <CourseSettings />
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CreateNewCoursePage;
