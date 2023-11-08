import AddandSearchparties from '../components/AddandSearchparties';
import PartiesDetails from '../components/PartiesDetails';
import PartiesTransection from '../components/PartyTransection';

const Parties = () => {
  return (
    <>
      <div className='flex items-start space-x-3 h-full'>
        <div className='w-[30%]'>
          <AddandSearchparties />
        </div>
        <div className='w-[70%]'>
          <PartiesDetails />
          <PartiesTransection />
        </div>

      </div>

    </>
  );
};

export default Parties;
