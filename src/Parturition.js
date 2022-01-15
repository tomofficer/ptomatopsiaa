import parturition from './images/parturition.jpeg';

const Parturition = () => {
  return (
    <div>
      <div className='parturition__main-container'>
        <div className='parturition__column1'>
          <img src={parturition} alt='' />
        </div>
        <div className='parturition__column2'>Song titles will go here</div>
      </div>
    </div>
  );
};

export default Parturition;
