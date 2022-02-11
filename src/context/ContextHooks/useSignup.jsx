import axios from 'axios';
import useStore from '../useStore'

const useSignup = () => {
    const {setUser,setUserLoading} = useStore()


    const signup =async (data)=>{

        setUserLoading(true)
        try{
            const response= axios.post('/api/user/register',data)
            if(response.data){
                setUser(response.data)
                setUserLoading(false)
            }else{
                setUserLoading(false)
            }
          }catch(error){
            setUserLoading(false)
          }
    }
    return {signup}
};

export default useSignup;