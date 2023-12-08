import React from "react";

export default function Card2(props) {
  const handlenxt = () => {
    props.change(props.page + 1);
  };
  const handleprv = () => {
    props.change(props.page - 1);
  };
  const chngtitle = (pageno) => {
    if (pageno === 1) {
      props.chngttl("First Month");
    } else if (pageno === 3) {
      props.chngttl("Third Month");
    }
  };
  return (
    <>
      <div className="container">
        <section className="py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
              <div className="col-md-6 text-center">
                {chngtitle(props.page)}
                <h1 className="display-4 fw-bolder">{props.title}</h1>
                <h4 className="display-10">
                  Month: {props.page === 1 ? "August" : "October"}
                </h4>
                {props.page === 1 ? (
                  <p className="lead">
                    Date 7th august,2023 I met you, you my love on a weid game i
                    never thought i will play still i played i think god made me
                    play that so that i meet my soulmate and i meet u that was
                    so great we both become so comfortable with each other so
                    fast and the things we did i mean i can never forget those
                    cute memories of us within a bit of time i realized how much
                    i love you really you were such a cute possessive lovely
                    girl that anyone would love u still i got the chance and we
                    start loving each
                  </p>
                ) : (
                  <p className="lead">
                    Wow three months completed you know i really respect you a
                    lot i mean after my past i don't think anyone can bear me
                    still you stood with me it's been special month you know
                    because it's three months we completed i mean i can't
                    remember much things but i do remember many moments of us
                    like fighting haha and also your first exams uff kya hi bolu
                    ab it was so hard to stay away from you but still we be
                    together and enjoyed a lot i mean i did a lot i wish you too
                    had a great time with me and will love and live with me
                    forever.
                  </p>
                )}
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-outline-dark flex-shrink-0 mx-2"
                    type="button"
                    onClick={handleprv}
                    disabled={props.page <= 1}
                  >
                    <i className="bi-cart-fill me-1"></i>
                    Previous Page
                  </button>
                  <button
                    className="btn btn-outline-dark flex-shrink-0"
                    type="button"
                    onClick={handlenxt}
                    disabled={props.page === 4}
                  >
                    <i className="bi-cart-fill me-1"></i>
                    Next Page
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  className="card-img-top mt-5 mb-md-0 rounded"
                  src={
                    props.page === 1
                      ? "https://play-lh.googleusercontent.com/WNWZaxi9RdJKe2GQM3vqXIAkk69mnIl4Cc8EyZcir2SKlVOxeUv9tZGfNTmNaLC717Ht"
                      : "https://img.freepik.com/premium-vector/vector-baby-milestone-cards-girl-boy-calligraphy-lettering-3-months-modern-dark-cards_506530-1859.jpg?w=2000"
                  }
                  alt="..."
                  style={{height: "60vh"}}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
