import React from 'react';
function CourseCard({ image, title, hours, completedHours }) {
    return(
    <div className="max-w-[250px] rounded-lg overflow-hidden  bg-white">
      <img className="w-full h-[300px] object-cover" src={image} alt={title} />
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-blue-700 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{hours} Certifiées</p>
        <p className="text-sm text-gray-600">{completedHours} Déjà achevées</p>
      </div>
    </div>
      );
     }

    
    function  StudentCoursesInterface() {
      const courses = [
        {
          image: './src/yass.jpg',
          title: 'DÉVELOPPEMENT WEB',
          hours: '40H',
          completedHours: '20H',
        },
        {
          image: './src/as.jpg',
          title: 'REACT JS',
          hours: '48H',
          completedHours: 'Déjà achevé',
        },
        {
          image: './src/ya.jpg',
          title: 'SOCIAL MEDIA',
          hours: '40H',
          completedHours: 'Déjà achevé',
        },
      ];
    
      return (
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                image={course.image}
                title={course.title}
                hours={course.hours}
                completedHours={course.completedHours}
              />
            ))}
          </div>
        </div>
      );
    }
export default StudentCoursesInterface;
