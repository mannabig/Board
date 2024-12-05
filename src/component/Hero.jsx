import React, { useState } from "react";
import Group from "../assets/Group.png";

const Hero = () => {
  const [serviceType, setServiceType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBookService = (e) => {
    e.preventDefault();
    console.log("Booking service:", { serviceType, data, time });
  };

  return (
    <form
      onSubmit={handleBookService}
      className="flex flex-wrap gap-4 rounded-lg p-4 md:p-6 shadow-lg items-end  bg-yellow-400"
    >
      <div className="flex-1 min-w-[150px]">
        <select
          id="service-type"
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          className="w-full p-2 border rounded text-sm"
          required
        >
          <option value="">Service Type</option>
          {["Cleaning", "Plumbing", "Electrical"].map((service) => (
            <option key={service.toLowerCase()} value={service.toLowerCase()}>
              {service}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1 min-w-[150px]">
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded text-sm"
          required
        />
      </div>
      <div className="flex-1 min-w-[150px]">
        <select
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 border rounded text-sm"
          required
        >
          <option value="">Select Time</option>
          {["Morning", "Afternoon", "Evening"].map((timeSlot) => (
            <option key={timeSlot.toLowerCase()} value={timeSlot.toLowerCase()}>
              {timeSlot}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit" 
        className=" bg-black text-white hover:bg-blue-950 px-2 py-2 rounded mt-4 text-sm"
      >
        Book Service
      </button>
    </form>
  );
};

export default function HeroSection() {
  return (
    <div className="relative min-h bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-800  lg:text-5xl xl:text-6xl">
              Connect You With Skilled{""}
              <span className="text-teal-600">Professionals</span>For All Your
              {""} <br className="hidden lg:inline" /> Home Service Needs.
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Egestas pellentesque eu
              pellentesque tortor ligula, Ullamcorper fermentum tincidunt
              accumsan laacus nulla. Adipiscing at egestas massa egestas
              egastas. Libero in risus libero potenti.
            </p>
            <Hero />
          </div>
          <div className="hidden lg:block">
            <img
              src={Group}
              alt="Professional Service Worker"
              width={600}
              height={800}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
