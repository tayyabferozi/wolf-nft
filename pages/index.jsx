import MainLayout from "../layouts/MainLayout";
import Section from "../components/Section";
import GridContainer from "../components/GridContainer";

const stepsData = [
  {
    vector: "/assets/imgs/step-1-vector.png",
    title: "Register",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy.",
  },
  {
    vector: "/assets/imgs/step-2-vector.png",
    title: "Mint",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy.",
  },
  {
    vector: "/assets/imgs/step-3-vector.png",
    title: "Play & Win",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy.",
  },
];

export default function Home() {
  return (
    <MainLayout>
      <Section id="hero">
        <div className="text-center">
          <h1>
            Trade with confidence on the world’s fastest and most secure crypto
            exchange
          </h1>
          <p className="mt-40">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <img
            src="/assets/imgs/hero-img.png"
            alt="hero-img"
            className="wolf-hero"
          />
          <img
            src="/assets/imgs/step-bg-1.png"
            alt="step-bg"
            className="bg-step bg-1"
          />
          <img
            src="/assets/imgs/step-bg-2.png"
            alt="step-bg"
            className="bg-step bg-2"
          />

          <div className="steps">
            <GridContainer rowClassName="main-row justify-content-center">
              {stepsData.map((el, idx) => {
                const { vector, title, desc } = el;

                return (
                  <div key={"step-" + idx} className="col-lg-4 col-md-6">
                    <div className="step">
                      <div className="number">{idx + 1}</div>
                      <div className="step-body">
                        <img src={vector} alt={title} />
                        <h2 className="mt-30">{title}</h2>
                        <p className="mt-10 tint">{desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </GridContainer>
          </div>
        </div>
      </Section>

      <Section id="roadmap">
        <img
          src="/assets/imgs/bg-roadmap.png"
          alt="bg-roadmap"
          className="bg-roadmap"
        />

        <div className="text-center">
          <h1>Road Map</h1>

          <div className="roadmap-main">
            <div className="spaceship-wrapper">
              <img
                src="/assets/imgs/spaceship.png"
                alt="spaceship"
                className="spaceship"
              />
            </div>

            <div className="roadmap-text">
              <div className="roadmap-item-wrap">
                <div className="item">
                  <h2>Q1 2009</h2>
                  <div className="fs-20">Business Conception</div>

                  <p className="mt-10 tint">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </p>
                </div>

                <div className="item">
                  <h2>Q2 2009</h2>
                  <div className="fs-20">Business Conception</div>

                  <p className="mt-10 tint">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </p>
                </div>
              </div>

              <div className="roadmap-item-wrap">
                <div className="item">
                  <h2>Q3 2010</h2>
                  <div className="fs-20">Business Conception</div>

                  <p className="mt-10 tint">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </p>
                </div>

                <div className="item">
                  <h2>Q4 2010</h2>
                  <div className="fs-20">Business Conception</div>

                  <p className="mt-10 tint">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </p>
                </div>
              </div>
            </div>
          </div>

          <img
            src="/assets/imgs/wolf-1.png"
            alt="wolf"
            className="wolf wolf-1"
          />
          <img
            src="/assets/imgs/wolf-2.png"
            alt="wolf"
            className="wolf wolf-2"
          />
          <img
            src="/assets/imgs/grass.png"
            alt="grass"
            title="grass"
            className="grass"
          />
        </div>
      </Section>
    </MainLayout>
  );
}
