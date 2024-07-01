const CardView = (props) => {
  return (
    <>
      <section className="body-font relative">
        <div className="container px-3 pt-2 pb-12 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-4/5 md:w-full flex flex-col mx-auto w-full py-8 px-3 sm:px-8 mt-8 md:mt-6 bg-gray-900 text-white rounded-3xl">
            {props.children}
          </div>
        </div>
      </section>
    </>
  );
};

export default CardView;
