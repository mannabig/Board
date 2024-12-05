import React from "react";
import { Clock, DollarSign, Users, Award } from "lucide-react";

const Card = ({ icon: Icon, title, description, iconColor, bgColor }) => (
  <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
    <div
      className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center mb-4`}
    >
      <Icon className={`w-6 h-6 ${iconColor}`} />
    </div>
    <h3 className="text-lg font-semibold mb-2  text-white">{title}</h3>
    <p className="text-slate-400 text-sm">{description}</p>
  </div>
);

const Ourwork = () => {
  const benefits = [
    {
      icon: Award,
      title: "Over 5 Years of service",
      description:
        "With over 5 years of exprience as a service provider, we have our skills and developed a deep understanding  of the industry",
      iconColor: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Users,
      title: "Expert employee",
      description:
        "With over 5 years of exprience as a service provider, we have our skills and developed a deep understanding  of the industry.",
      iconColor: "text-emerald-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: DollarSign,
      title: "Comfortable price",
      description:
        "Our service provider offers quality at a comfortable price,ensuring afforddability without compromising on excellence.",
      iconColor: "text-blue-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Clock,
      title: "Work done with time",
      description:
        "With over 5 years of exprience as a service provider, we have our skills and developed a deep understanding  of the industry",
      iconColor: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
  ];

  return (
    <section className="px-4 p-12  bg-slate-950 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Choose Us</h2>
          <p className="text-orange-400 font-medium">Benefits</p>
          <p className="mt-6 text-slate-300 max-w-3xl mx-auto text-sm md:text-base">
            Our commitment to excellence is evident in the quality of services
            we offer, driven by a team of skilledprofessionals dedicated to
            exceeding your expectations. We Prioritize transparency and open
            communication, ensuring that you are well-informed and confident in
            every step of your engagement with us. Our platform boasts
            cutting-edge technology, providing you with innovative solution and
            a user-friendly interface that simplifies the entire process. We
            understand the value of your time, our streamlined procedures are
            designed to miximize efficency, saving you both time and effort.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourwork;
