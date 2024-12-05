import React from "react";
import {
  Wrench,
  Grid,
  Hammer,
  Lightbulb,
  Axe,
  Cog,
  Paintbrush,
} from "lucide-react";

const Servicepage = () => {
  const Services = [
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Plumbing Services",
      description:
        "Our expert plumbers provide fast and efficient leak repairs to prevent water damage and reduce your utility bills. we address leaks in pipes, faucets, toilet, and more, ensuring your plumbing system runs smoothly.",
    },
    {
      icon: <Grid className="w-8 h-8 text-primary" />,
      title: "Tiling Services",
      description:
        "Protect your home year-round with our preventative pest control services. We offer regular treatments that keep pests at bay, ensuring your home remains comfortable and safe.",
    },
    {
      icon: <Hammer className="w-8 h-8 text-primary" />,
      title: "Masonry Services",
      description:
        "Our expert plumbers provide fast and efficient leak repairs to prevent water damage and reduce your utility bills. we address leaks in pipes, faucets, toilet, and more, ensuring your plumbing system runs smoothly.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Electrical Services",
      description:
        "wether you're building new or updating old wiring, our licensed electricians provides comprehensive electrical rewiring services. We ensure your home meets all electrical safety standard.",
    },
    {
      icon: <Axe className="w-8 h-8 text-primary" />,
      title: "Carpentry Services",
      description:
        "Our deep cleaning services target those often-neglected areas of your home, proving a thorough clean and making your space sparkle using safe and effective methods.",
    },
    {
      icon: <Cog className="w-8 h-8 text-primary" />,
      title: "Wielding Services",
      description:
        "Our handyman services cover many range of tasks, from repairs, from fixing every detail in your home . We also provide instant and reliable service to keep your home in top condition.",
    },
    {
      icon: <Paintbrush className="w-8 h-8 text-primary" />,
      title: "Painting Services",
      description:
        "Transform your space with our profestional painting services. We offer high-quality finish and efficient painting , using permium materials for a long-lasting finish that leaves you with your desired aesthetic.",
    },
  ];
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="relative inline-block">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <div className="absolute -bottom-4 right-0">
              <span className="text-primary text-sm">What We Do</span>
            </div>
          </div>
          <p className="mx-auto max-w-[800px] text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
            Looking for reliable service provider? Look no further than
            Proconnect, the ultimate platform for connecting customers with
            top-notch professtionals. With our cutting-egde technology and
            extensive vetting process, we ensure that only the best
            professtionals join our platform. Proconnect provides a wide range
            of services to meet every customers unique needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Services.map((service, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 rounded-full bg-primary/5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicepage;
