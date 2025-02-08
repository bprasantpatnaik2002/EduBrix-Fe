import React from 'react'
import Videos from './Videos';
import { useData } from '../ContextAPI/DataContext';

function VideoTestimonials() {

  const {fall}=useData();

  return (
    <Videos  Heading={"Gallery"} title={"Explore our vibrant EduBrix gallery, showcasing moments of innovation, learning, and collaboration!"} testimonials={[...fall]}/>
  )
}

export default VideoTestimonials