
import { Link } from 'react-router-dom';const Btn  = ({lable,link}) => {
const text = lable ? lable : "text"
  return (
    <div>
      <Link to={link} className=' capitalize px-7 py-2 whitespace-nowrap md:py-3 bg-primary  text-white rounded-full '>{text}</Link>
    </div>
  );
};

export default Btn ;
