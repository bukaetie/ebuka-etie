const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='bg-body-tertiary p-3'>
      <div className='container'>
        <div className='row justify-content-center text-center'>
          <div className='col-12 col-md-6'>
            <p className='fs-6 mb-0'>
              Copyright &#169; {currentYear}. All rights reserved. &nbsp;
              <span>Created with <span className='text-danger'>&#10084;</span> by Protocodes</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
