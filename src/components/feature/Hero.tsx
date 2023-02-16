import Image from "next/image";

export default function Hero() {
  const experiences = [
    {
      description:
        "snappify has been an absolute game-changer for me. I share weekly content on programming, and I've written two e-books that are rich in code examples and illustrations. snappify has helped me tremendously in both.",
      person: {
        name: "Simon Høiberg",
        job: "CEO of FeedHive",
      },
    },
    {
      description:
        "As a DevRel, snappify is one of the top tools in my toolbelt. They make sharing code snippets so easy! My Twitter followers love those tweets.",
      person: {
        name: "Lazar Nikolov",
        job: "Maintainer of ChakraUI",
      },
    },
    {
      description:
        "I'm thankful for snappify. In the past I had to take code screenshots and had to mess with Photoshop until everything looked correct. Now I can do everything directly in the code editor and finish much faster.",
      person: {
        name: "Tobias Petry",
        job: "Software Developer",
      },
    },
    {
      description:
        "I've been using snappify for months, it's the enabler for my fancy slides about coding. I can't live without it, so user friendly and customizable! Dominik and Anki did a great job!",
      person: {
        name: "Luca Restagno",
        job: "Content creator",
      },
    },
  ];

  return (
    <div className="mt-5 bg-orange-50 p-4 sm:p-20">
      <h1 className="text-center text-4xl font-bold">
        What our users think about snappify
      </h1>
      <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2">
        {experiences.map((experience, i) => (
          <div
            key={i}
            className="rounded-lg border border-gray-200 bg-white p-8 text-center"
          >
            <p>{experience.description}</p>
            <div className="mt-5 flex justify-center">
              <img
                key={i}
                src="/img/profile.png"
                alt=""
                className="h-10 rounded-full"
              />
              <p className="ml-4 text-left">
                <b>{experience.person.name}</b> <br /> {experience.person.job}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
