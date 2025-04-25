import React from "react";
import { Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import CampaignHeader from "@/components/CampaignHeader";
import DeliverableItem from "@/components/DeliverableItem";
import GymBanner from "@/components/GymBanner";
import TiktokIcon from "@/components/icons/TiktokIcon";

const Index = () => {
  return (
    <div className="space-y-20">
      <div className="w-full max-w-screen-2xl bg-background">
        <Navbar />

        <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
          <div className="flex justify-center w-full gap-8  ">
            {/* Left column: Campaign details */}
            <div className="space-y-4 w-full max-w-md">
              <p className="text-sm ml-1 text-gray-500">Brand Name</p>
              <h1 className="text-4xl font-semibold">Campaign Title Here</h1>
              <div className="space-y-4 text-justify">
                <p className="text-gray-400">
                  Lorem ipsum dolor amet, consectetur adipiscing elit. Lacus
                  fermentum odio phasellus cras ad erat parturient. Clas at et
                  lorem quam ac inceptos netus fermentum vehicula? Duis libero
                  penatibus ante ultrices mattis. Varius dui placerat egestas ex
                  rhoncus per elit est. Nisi maecenas curabitur, ultricies
                  auctor bibendum pretium facilisis. Nascetur malesuada sed
                  suscipit consequat tempus molestie turpis posuere
                </p>
                <p className="text-gray-400">
                  Habitant tortor integer dui blandit leo aenean. Metus facili
                  praesent malesuada orci vitae tempus vehicula sollicitudin.
                  Morbi pharetra vestibulum metus; dui efficitur magnis quis
                  class. Finibus auctor maximus, donec rutrum condimentum
                  curabitur commodo? Himenaeos congue nam per sollicitudin
                  maximus ex nostra enim ridiculus. Ipsum litora elit mi aenean
                  vitae parturient tempor aliquam tempor. Justo maximus cursus
                  accumsan at aenean penatibus maecenas.
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <p className="text-sm text-gray-600">
                  Requested Start Date: MM/DD/YYYY
                </p>
                <Button variant="outline" className="flex items-center">
                  <span className="mr-2">+</span> View Campaign Brief
                </Button>
              </div>
            </div>

            {/* Right column: Gym banner */}
            <div className="flex justify-center basis-8/12">
              <GymBanner />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-2xl  bg-[#f1f5f9]">
        <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
          {/* Deliverables section */}
          <div className="mb-16 ">
            <h2 className="text-3xl font-semibold mb-12">Deliverables Requested</h2>
            <div className="flex flex-col gap-8 items-center justify-center">
              <DeliverableItem
                icon={<Instagram className="h-8 w-8 text-pink-600" />}
                platform="Instagram"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nisl feugiat."
              />
              <DeliverableItem
                icon={<TiktokIcon className="h-8 w-8 text-black" />}
                platform="TikTok"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nisl feugiat."
              />
              <DeliverableItem
                icon={<Youtube className="h-8 w-8 text-red-600" />}
                platform="Youtube"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nisl feugiat."
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">Additional Information</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In the
              pursuit of excellence, individuals often find themselves driven by
              a desire to push boundaries, unlocking new potential within
              themselves. Sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua—a phrase that reminds us of the diligence and effort
              required to achieve greatness
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Interested in this Campaign?
            </h2>
            <p className="text-gray-700 mb-8">
              Apply here to participate in the campaign:
            </p>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-12 py-6 text-lg rounded-full">
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
