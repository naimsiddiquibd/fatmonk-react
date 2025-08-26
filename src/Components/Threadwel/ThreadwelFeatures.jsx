import React from "react";
import FeatureCard from "./FeatureCard";

const DATA = [
  {
    title: "Request Price Quotations",
    description:
      "Request quotes from 1,000+ products, set details, and connect with top suppliers instantly.",
    url: "/threadwel/thread_price_tag.svg",
  },
  {
    title: "Bid Submission",
    description:
      "Suppliers submit bids with details and modifications directly, streamlining the process.",
    url: "/threadwel/bid.svg",
  },
  {
    title: "Cost Comparison",
    description:
      "Bids auto-compile into a comparison sheet, enabling quick selection of best offers.",
    url: "/threadwel/loose-money.svg",
  },
  {
    title: "Issue Purchase Orders",
    description:
      "Accepted bids convert to detailed POs for easy review and finalization.",
    url: "/threadwel/package.svg",
  },
  {
    title: "Order Tracking",
    description: "Real-time tracking keeps both buyers and suppliers updated.",
    url: "/threadwel/thread_price_tag.svg",
  },
  {
    title: "Autogenerate Documents",
    description:
      "Automatically generate essential documents, reducing time and errors.",
    url: "/threadwel/thread_features_file.svg",
  },
  {
    title: "Notifications",
    description:
      "Receive instant updates on orders, RFQs, and project progress.",
    url: "/threadwel/notification.svg",
  },
  {
    title: "Member Invitation",
    description:
      "Invite team members with customized permissions for efficient management.",
    url: "/threadwel/add-user.svg",
  },
];

const ThreadwelFeatures = () => {
  return (
    <div className="min-h-[1000px] bg-[#1E72FC] flex flex-col justify-center items-center py-6">
      <h1 className="text-monkwhite text-3xl font-bold mt-4 mb-4">
        Key Feature of Threadwel ?
      </h1>
      <div className="min-h-[700px] max-w-[1500px] flex justify-center items-center flex-wrap gap-8">
        {DATA.map((item, i) => (
          <FeatureCard
            key={i}
            url={item.url}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreadwelFeatures;
