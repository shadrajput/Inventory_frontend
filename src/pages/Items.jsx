import AddandSearchItems from '../components/AddandSearchItems';
import ItemsDetails from '../components/ItemsDetails';
import ItemsTransection from '../components/ItemsTransection';

const Profile = () => {
  return (
    <>
      <div className='flex items-start space-x-3 h-full'>
        <div className='w-[30%]'>
          <AddandSearchItems />
        </div>
        <div className='w-[70%]'>
          <ItemsDetails />
          <ItemsTransection />
        </div>

      </div>

    </>
  );
};

export default Profile;
