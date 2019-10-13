import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const error = message => {
  return toast.error(message, {
    position: toast.POSITION.TOP_CENTER
  });
};

export default error;
