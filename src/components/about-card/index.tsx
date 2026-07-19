import ABOUT from '../../data/about';

const AboutCard = () => {
  return (
    <section className="card shadow-lg card-sm bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h2 className="card-title">
            <span className="text-base-content opacity-70">
              {ABOUT.title}
            </span>
          </h2>
        </div>

        <div className="px-3 pb-3 space-y-4">
          {ABOUT.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base-content opacity-80 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}

          <div className="flex flex-wrap gap-2 pt-1">
            {ABOUT.focusAreas.map((area) => (
              <span
                key={area}
                className="badge badge-primary badge-outline badge-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;