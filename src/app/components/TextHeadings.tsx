import react from 'react';
interface TextHeadingProps {
    smallHeading: string;
    mainHeading: string;
}
const TextHeadings: React.FC<TextHeadingProps> = ({smallHeading , mainHeading}) => {
  return (
    <>
     <div className='flex justify-center items-center flex-col md:mt-5'>
     <h3 className="text-xl text-center uppercase text-blue-500">{smallHeading}</h3>
     <h1 className="text-4xl text-center">{mainHeading}</h1>
     <div>
        
     </div>
     </div>
    </>
  )
}

export default TextHeadings