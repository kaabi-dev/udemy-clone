import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Delete, Edit } from 'lucide-react';
function InstructorCourses() {
  return (
    <Card>
      <CardHeader className='flex justify-between flex-row items-center'>
        <CardTitle className='text-3xl font-extrabold'>All Courses</CardTitle>
        <Button className='p-6'>Create A New Course</Button>
      </CardHeader>

      <CardContent className='overflow-x-auto'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Revenue</TableHead>
              <TableHead className='text-right'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className='font-medium'>
                React JS Full Course 2026
              </TableCell>
              <TableCell>100</TableCell>
              <TableCell>$5000</TableCell>
              <TableCell className='text-right'>
                <Button variant='ghost' size='lg'>
                  <Edit size={120} className='h-6 w-6' />
                </Button>
                <Button variant='ghost' size='lg'>
                  <Delete className='h-6 w-6' />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default InstructorCourses;
