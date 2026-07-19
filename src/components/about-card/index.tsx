import ABOUT from '../../data/about';

const AboutCard = () => {
  return (
    <section className="col-span-1 lg:col-span-2 card bg-base-200 shadow-xl border border-base-300 w-full">
      <div className="card-body p-8">
        <div className="mb-5">
          <h2 className="text-base sm:text-lg font-bold text-base-content">
            {ABOUT.title}
          </h2>
        </div>

        <div className="space-y-4">
          {ABOUT.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm text-base-content/80 leading-relaxed"
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