import React from "react";

export default function Card(props) {
  const handlenxt = () => {
    if(props.page===4){
      props.click(true);
    }else{
      props.change(props.page + 1);
    }
  };
  const handleprv = () => {
    props.change(props.page - 1);
  };
  const chngtitle = (pageno) => {
    if (pageno === 2) {
      props.chngttl("Second Month");
    } else if (pageno === 4) {
      props.chngttl("Fourth Month");
    }
  };
  return (
    <>
      <div className="container">
        <section className="py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6">
                <img
                  className="card-img-top mb-5 mb-md-0 rounded"
                  src={
                    props.page === 2
                      ? "https://c4.wallpaperflare.com/wallpaper/20/567/615/labels-love-texture-white-background-i-love-you-hd-wallpaper-preview.jpg"
                      : "https://static.vecteezy.com/system/resources/previews/017/416/107/original/best-couple-name-s-love-t-on-transparent-background-free-png.png"
                  }
                  alt="..."
                />
              </div>
              <div className="col-md-6 text-center">
                {chngtitle(props.page)}
                <h1 className="display-4 fw-bolder">{props.title}</h1>
                <h4 className="display-10">
                  Month: {props.page === 2 ? "September" : "November"}
                </h4>
                {props.page === 2 ? (
                  <p className="lead">
                    In this Month many things happened between us first of all
                    it was completion of our first month together then you
                    saying i love you to me though it happened after you making
                    me sad but still it was really super special.On call it was
                    on 14th September at 8:24 pm and on text time was 7:47 am
                    and i remember i fall asleep after this haha but really this
                    was so cute the starting of our second month together
                  </p>
                ) : (
                  <p className="lead">
                    ohh so finally the last month haha it was the month i
                    changed myself completely i stopped talking to others and
                    all the things which might hurt you. you know i love
                    flirting and that's why i love talking haha because while
                    talking we give each other many chances to flirt one has
                    just to understand these opportunities still you know i got
                    hurted a lot this month the only thing that make me live
                    with you is love i dont know why i love you so much but it's
                    the only thing ik i love you siddhu i really love you a lot
                    this is just our 4 months complete together i know many more
                    monthiversaries are yet to come i just want you to be with
                    me all the time and support me whenever i need thank you so
                    much my love. I LOVE YOU!!!!!!!!!!
                  </p>
                )}
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-outline-dark flex-shrink-0 mx-2"
                    type="button"
                    disabled={props.page <= 1}
                    onClick={handleprv}
                  >
                    <i className="bi-cart-fill me-1"></i>
                    Previous Page
                  </button>
                  <button
                    className="btn btn-outline-dark flex-shrink-0"
                    type="button"
                    onClick={handlenxt}
                  >
                    <i className="bi-cart-fill me-1"></i>
                    Next Page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
