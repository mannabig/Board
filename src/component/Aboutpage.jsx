import React from "react";
import About from "../assets/About.png";

const Aboutpage = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="hidden lg:block">
            <img
              src={About}
              alt="Construction professional at work site"
              className="w-full h-auto object-cover rounded-lg "
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Who We Are</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                At Proconnect, we understand the importance of finding the right
                home service professionals for your unique needs. wether it's a
                Plumbing, Electrician, painter, or any other service, our
                platform is designed to simplify the process of connecting you
                with top-tier professionals who are not only qualified but also
                dedicated to delivering exceptional service.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 py-6">
              {[
                { count: "500+", label: "Happy Clients" },
                { count: "2000+", label: "Projects Completed" },
                { count: "100+", label: "Qualified Professionals" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl font-bold text-green-600">
                    {stat.count}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            <button className="bg-yellow-400 hover:bg:yellow-500 text-gray-900 font-bold py-2 px-4 rounded">Read more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutpage;
