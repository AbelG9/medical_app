const CardView = (props) => {
  return (
    <>
      <section className="body-font relative">
        <div className="container px-8 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-3/4 md:w-2/3 flex flex-col mx-auto w-full py-8 px-3 sm:px-8 mt-8 md:mt-6 sm:mt-4 bg-gray-900 text-white rounded-3xl">
            {props.children}
          </div>
        </div>
      </section>
    </>
  );
};

export default CardView;
